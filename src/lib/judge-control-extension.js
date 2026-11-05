import BlockType from 'scratch-vm/src/extension-support/block-type';
import ArgumentType from 'scratch-vm/src/extension-support/argument-type';
import Cast from 'scratch-vm/src/util/cast';
import {ScriptTreeGenerator} from 'scratch-vm/src/compiler/irgen';

// 2026-09-24：對齊官方平台Scratch介面「控制」分類的「重複當」積木。原生scratch-vm的
// control_while opcode顯示字串是「當 %1」（少了「重複」二字，容易被誤會成別種積木），
// 一開始想用跟judge-operators-extension.js一樣的patchThinkBlockLabel手法直接改
// Blockly.Msg.CONTROL_WHILE，結果踩到一個新坑：scratch-blocks的flyout有「回收」機制
// （見node_modules/scratch-blocks/core/flyout_base.js的recycleBlocks_），同一個
// `<block>`標籤（沒寫id時用type當key）只要跟「上一次」渲染出來的舊BlockSVG比對相符，
// 就直接重用舊的，完全不會重新呼叫domToBlock()/init()去讀新patch過的Msg字串——這顆
// 積木在我的patch生效之前，已經在Blockly.inject()内部某次更早的flyout預熱渲染中被
// 建立並丟進回收池，之後不管Msg改得多正確、換自訂id也一樣，都會一路沿用那個過期版本。
// 直接patch Msg這條路線在這個情境下走不通。
//
// 改用跟judge-operators-extension.js同一套「寫一個VM extension」的作法解決：這裡的
// 「重複當」是全新的自訂積木類型（judgecontrol_repeatWhile，不是native control_while），
// label是extension的text欄位裡的固定字串，從頭就是「重複當」，不需要也不會受
// Blockly.Msg/flyout回收快取影響，從根本上避開上面那個坑。迴圈邏輯（BlockType.LOOP＋
// util.startBranch）照抄scratch-vm/src/blocks/scratch3_control.js的repeatWhile
// 實作，確保行為跟原生control_while完全一致。native control_while opcode本身沒有
// 被動到，只是這個toolbox不再放它，跟其餘6顆官方沒有的控制積木下架方式一致。
//
// 2026-11-05：加「中斷循環」（judgecontrol_breakLoop），對齊官方平台同名積木，也對齊
// BlocklyYdws的「跳出迴圈」（controls_flow_statements），A系列題目在兩個平台可以用同一種
// 寫法。原生scratch-vm沒有break，這顆只在osep-judge自己的VM裡能執行（.sb3拿去原版
// Scratch開會變成不認得的積木），這是刻意的取捨。
//
// 實作分兩段：
// 1. 直譯模式（sequencer）：迴圈積木呼叫startBranch(n, true)時，會把迴圈積木自己那層
//    stackFrame標成isLoop。breakLoop往下pop到最近一層isLoop的frame，再goToNextBlock()
//    把那層換成迴圈積木的下一顆，等於整個迴圈結束、從迴圈後面繼續跑。原生control_stop
//    「停止這個程式」也是在積木函式裡直接改thread.stack，同一種做法。重複N次／重複直到／
//    重複當（含原生control_while、control_forever）都靠isLoop判斷，不用逐一列opcode。
//    碰到procedures_call那層就停（不跨出自訂積木），找不到迴圈時什麼都不做。
// 2. TurboWarp編譯器：編譯後的迴圈是真正的JS迴圈，extension積木走compatibility layer
//    無法跳出JS迴圈。所以讓編譯器遇到breakLoop就丟例外——Thread.tryCompile()本來就會
//    接住編譯錯誤、改用上面的直譯模式跑這個程式（含它呼叫的自訂積木）。只有用到中斷循環
//    的程式會變直譯模式，其餘程式照常編譯；評分時本來就開turbo模式，速度影響有限。
const EXTENSION_ID = 'judgecontrol';
const BREAK_OPCODE = `${EXTENSION_ID}_breakLoop`;

const originalDescendStackedBlock = ScriptTreeGenerator.prototype.descendStackedBlock;
ScriptTreeGenerator.prototype.descendStackedBlock = function (block) {
    if (block.opcode === BREAK_OPCODE) {
        throw new Error(`${BREAK_OPCODE} runs in the interpreter only`);
    }
    return originalDescendStackedBlock.call(this, block);
};

class JudgeControlExtension {
    getInfo () {
        return {
            id: EXTENSION_ID,
            name: '解題控制（官方對齊）',
            color1: '#FFAB19',
            color2: '#EC9C13',
            color3: '#CF8B17',
            blocks: [
                {
                    opcode: 'repeatWhile',
                    blockType: BlockType.LOOP,
                    text: '重複當 [CONDITION]',
                    arguments: {
                        CONDITION: {
                            type: ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: 'breakLoop',
                    blockType: BlockType.COMMAND,
                    text: '中斷循環',
                    isTerminal: true
                }
            ]
        };
    }

    breakLoop (args, util) {
        const thread = util.thread;
        for (let i = thread.stackFrames.length - 2; i >= 0; i--) {
            const block = thread.target.blocks.getBlock(thread.stack[i]);
            if (block && block.opcode === 'procedures_call') return;
            if (thread.stackFrames[i].isLoop) {
                while (thread.stack.length > i + 1) thread.popStack();
                thread.goToNextBlock();
                return;
            }
        }
    }

    // 照抄scratch3_control.js的repeatWhile：條件為真才進分支一次，交給sequencer每個tick
    // 重新呼叫這個積木自己做判斷，是不是要再跑一次分支，跟native control_while行為一致。
    repeatWhile (args, util) {
        if (Cast.toBoolean(args.CONDITION)) {
            util.startBranch(1, true);
        }
    }
}

export default JudgeControlExtension;
export {EXTENSION_ID};
