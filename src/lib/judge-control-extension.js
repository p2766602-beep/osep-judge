import BlockType from 'scratch-vm/src/extension-support/block-type';
import ArgumentType from 'scratch-vm/src/extension-support/argument-type';
import Cast from 'scratch-vm/src/util/cast';

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
const EXTENSION_ID = 'judgecontrol';

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
                }
            ]
        };
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
