// MVP-33-1：把BlocklyYdws M0-01-BasicOutput第一小題（A-01-0 Hello world）手動轉成
// 真正的Scratch .sb3範例答案檔。積木語意對照BlocklyYdws的starterXml：
//   event_whenflagclicked -> event_whenflagclicked（同名，Scratch原生就有）
//   interaction_ask_and_wait -> sensing_askandwait
//   interaction_answer -> sensing_answer
//   interaction_say -> looks_say
// 用src/lib/default-project/的costume/backdrop素材，確保資產有效不用另外生圖。

const fs = require('fs');
const path = require('path');
const JSZip = require('@turbowarp/jszip');

const projectJson = {
    targets: [
        {
            isStage: true,
            name: 'Stage',
            variables: {},
            lists: {},
            broadcasts: {},
            blocks: {},
            comments: {},
            currentCostume: 0,
            costumes: [
                {
                    assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                    name: 'backdrop1',
                    md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                    dataFormat: 'svg',
                    rotationCenterX: 240,
                    rotationCenterY: 180
                }
            ],
            sounds: [],
            volume: 100
        },
        {
            isStage: false,
            name: 'M0-01-A-01-0',
            variables: {
                var_name: ['名字', '']
            },
            lists: {},
            broadcasts: {},
            comments: {},
            currentCostume: 0,
            costumes: [
                {
                    assetId: '927d672925e7b99f7813735c484c6922',
                    name: 'costume1',
                    bitmapResolution: 1,
                    md5ext: '927d672925e7b99f7813735c484c6922.svg',
                    dataFormat: 'svg',
                    rotationCenterX: 30.75,
                    rotationCenterY: 58.86
                }
            ],
            sounds: [],
            volume: 100,
            visible: true,
            x: 0,
            y: 0,
            size: 100,
            direction: 90,
            draggable: false,
            rotationStyle: 'all around',
            blocks: {
                b1: {
                    opcode: 'event_whenflagclicked',
                    next: 'b2', parent: null,
                    inputs: {}, fields: {}, shadow: false, topLevel: true, x: 20, y: 20
                },
                b2: {
                    opcode: 'sensing_askandwait',
                    next: 'b3', parent: 'b1',
                    inputs: {QUESTION: [1, [10, '請輸入名字']]},
                    fields: {}, shadow: false, topLevel: false
                },
                b3: {
                    opcode: 'data_setvariableto',
                    next: 'b4', parent: 'b2',
                    inputs: {VALUE: [2, 'b3v']},
                    fields: {VARIABLE: ['名字', 'var_name']},
                    shadow: false, topLevel: false
                },
                b3v: {
                    opcode: 'sensing_answer',
                    next: null, parent: 'b3',
                    inputs: {}, fields: {}, shadow: false, topLevel: false
                },
                b4: {
                    opcode: 'looks_say',
                    next: null, parent: 'b3',
                    inputs: {MESSAGE: [2, 'b4j']},
                    fields: {}, shadow: false, topLevel: false
                },
                b4j: {
                    opcode: 'operator_join',
                    next: null, parent: 'b4',
                    inputs: {
                        STRING1: [1, [10, 'Hello, ']],
                        STRING2: [2, 'b4v']
                    },
                    fields: {}, shadow: false, topLevel: false
                },
                b4v: {
                    opcode: 'data_variable',
                    next: null, parent: 'b4j',
                    inputs: {},
                    fields: {VARIABLE: ['名字', 'var_name']},
                    shadow: false, topLevel: false
                }
            }
        }
    ],
    meta: {semver: '3.0.0', vm: '0.1.0', agent: 'osep-judge/MVP-33-1'}
};

(async () => {
    const zip = new JSZip();
    zip.file('project.json', JSON.stringify(projectJson));

    const backdropSvg = fs.readFileSync(
        path.join(__dirname, '../../src/lib/default-project/cd21514d0531fdffb22204e0ec5ed84a.svg')
    );
    const costumeSvg = fs.readFileSync(
        path.join(__dirname, '../../src/lib/default-project/dango-cat.svg')
    );
    zip.file('cd21514d0531fdffb22204e0ec5ed84a.svg', backdropSvg);
    zip.file('927d672925e7b99f7813735c484c6922.svg', costumeSvg);

    const outPath = path.join(__dirname, '../../static/judge-content/m0/M0-01-BasicOutput/A-01-0.sb3');
    const buffer = await zip.generateAsync({type: 'nodebuffer'});
    fs.writeFileSync(outPath, buffer);
    console.log('已寫出：', outPath, `(${buffer.length} bytes)`);
})();
