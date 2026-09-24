import BlockType from 'scratch-vm/src/extension-support/block-type';
import ArgumentType from 'scratch-vm/src/extension-support/argument-type';
import Cast from 'scratch-vm/src/util/cast';

// 2026-09-24：對齊官方平台（demo.csie.ntnu.edu.tw）Scratch介面「運算」分類的4顆積木。
// 官方把四則運算／比較／且或分別合併成一顆「積木＋下拉選單」，另外多一顆布林「真／假」
// 字面值積木——這4種都不是scratch-vm（TurboWarp核心）的原生opcode（見
// node_modules/scratch-vm/src/blocks/scratch3_operators.js，只有拆開的operator_add/
// operator_gt/operator_and等分開積木，沒有合併版，也沒有布林字面值），所以另外用
// scratch-vm的extension機制生出這4顆自訂積木，計算邏輯照抄scratch3_operators.js原本
// 的實作（同一套Cast工具函式），確保跟原生積木的四則運算/比較/且或行為完全一致，只是
// 外觀合併成官方那種單一積木＋下拉選單樣式。
//
// 這個extension不會有自己獨立的toolbox分類——`make-toolbox-xml.js`的makeToolboxXML()
// 會用moveCategory('judgeoperators')把scratch-vm自動生成的分類XML整個丟棄，只留下
// 這裡定義的4個積木「類型」被登記進Blockly.Blocks，讓`operators()`手寫的運算分類XML
// 可以直接用`<block type="judgeoperators_xxx"/>`混搭原生積木（跟既有judgeHelpers分類
// 混用原生control_wait/自訂敘事同一招）。
//
// 積木顏色沒有跟著使用者切換主題（高對比/暗色）動態變化，直接寫死對齊預設主題「運算」
// 分類的顏色（src/lib/themes/blocks/three.js的operators.primary/secondary/tertiary）
// ——這跟既有「專用」分類（judgeHelpers，colour="#FF6680"寫死）是同一種取捨，換主題時
// 這4顆積木顏色不會跟著變，但視覺上不影響功能，之後如果要做成主題自適應可以再擴充。
const EXTENSION_ID = 'judgeoperators';

class JudgeOperatorsExtension {
    getInfo () {
        return {
            id: EXTENSION_ID,
            name: '解題運算（官方對齊）',
            color1: '#59C059',
            color2: '#46B946',
            color3: '#389438',
            blocks: [
                {
                    opcode: 'boolLiteral',
                    blockType: BlockType.BOOLEAN,
                    text: '[VALUE]',
                    arguments: {
                        VALUE: {
                            type: ArgumentType.STRING,
                            menu: 'boolValues',
                            defaultValue: 'true'
                        }
                    }
                },
                {
                    opcode: 'compare',
                    blockType: BlockType.BOOLEAN,
                    text: '[OPERAND1] [OP] [OPERAND2]',
                    arguments: {
                        OPERAND1: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        },
                        OP: {
                            type: ArgumentType.STRING,
                            menu: 'compareOps',
                            defaultValue: '='
                        },
                        OPERAND2: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        }
                    }
                },
                {
                    opcode: 'andOr',
                    blockType: BlockType.BOOLEAN,
                    text: '[OPERAND1] [OP] [OPERAND2]',
                    arguments: {
                        OPERAND1: {
                            type: ArgumentType.BOOLEAN
                        },
                        OP: {
                            type: ArgumentType.STRING,
                            menu: 'andOrOps',
                            defaultValue: 'and'
                        },
                        OPERAND2: {
                            type: ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: 'arithmetic',
                    blockType: BlockType.REPORTER,
                    text: '[NUM1] [OP] [NUM2]',
                    arguments: {
                        NUM1: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        OP: {
                            type: ArgumentType.STRING,
                            menu: 'arithOps',
                            defaultValue: '+'
                        },
                        NUM2: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                }
            ],
            menus: {
                boolValues: {
                    items: [
                        {text: '真', value: 'true'},
                        {text: '假', value: 'false'}
                    ]
                },
                compareOps: {
                    items: [
                        {text: '=', value: '='},
                        {text: '>', value: '>'},
                        {text: '<', value: '<'}
                    ]
                },
                andOrOps: {
                    items: [
                        {text: '且', value: 'and'},
                        {text: '或', value: 'or'}
                    ]
                },
                arithOps: {
                    items: [
                        {text: '+', value: '+'},
                        {text: '-', value: '-'},
                        {text: '×', value: '*'},
                        {text: '÷', value: '/'}
                    ]
                }
            }
        };
    }

    boolLiteral (args) {
        return args.VALUE === 'true';
    }

    // 計算邏輯照抄scratch-vm/src/blocks/scratch3_operators.js的equals/gt/lt，
    // 用同一套Cast.compare確保跟原生operator_equals/gt/lt行為一致。
    compare (args) {
        const result = Cast.compare(args.OPERAND1, args.OPERAND2);
        switch (args.OP) {
        case '>': return result > 0;
        case '<': return result < 0;
        default: return result === 0;
        }
    }

    // 照抄scratch3_operators.js的and/or，用Cast.toBoolean。
    andOr (args) {
        if (args.OP === 'or') {
            return Cast.toBoolean(args.OPERAND1) || Cast.toBoolean(args.OPERAND2);
        }
        return Cast.toBoolean(args.OPERAND1) && Cast.toBoolean(args.OPERAND2);
    }

    // 照抄scratch3_operators.js的add/subtract/multiply/divide，用Cast.toNumber。
    arithmetic (args) {
        const n1 = Cast.toNumber(args.NUM1);
        const n2 = Cast.toNumber(args.NUM2);
        switch (args.OP) {
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '/': return n1 / n2;
        default: return n1 + n2;
        }
    }
}

export default JudgeOperatorsExtension;
export {EXTENSION_ID};
