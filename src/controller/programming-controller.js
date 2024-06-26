const Program = require('../models/program-schema');
const bodyParser = require('body-parser');
const axios = require('axios');

//danh sách các api để lập trình ứng dụng
let apis = [
    {
        id: 'api1',
        name: 'http://localhost:3030/cobot_api/rotate_base_right'
    },
    {
        id: 'api2',
        name: 'http://localhost:3030/cobot_api/rotate_base_left'
    },
    {
        id: 'api3',
        name: 'http://localhost:3030/cobot_api/rotate_servo_01_up'
    },
    {
        id: 'api4',
        name: 'http://localhost:3030/cobot_api/rotate_servo_01_down'
    },
    {
        id: 'api5',
        name: 'http://localhost:3030/cobot_api/rotate_servo_02_up'
    },
    {
        id: 'api6',
        name: 'http://localhost:3030/cobot_api/rotate_servo_02_down'
    },
    {
        id: 'api7',
        name: 'http://localhost:3030/cobot_api/rotate_claw_right'
    },
    {
        id: 'api8',
        name: 'http://localhost:3030/cobot_api/rotate_claw_left'
    },
    {
        id: 'api9',
        name: 'http://localhost:3030/cobot_api/rotate_claw_up'
    },
    {
        id: 'api10',
        name: 'http://localhost:3030/cobot_api/rotate_claw_down'
    },
    {
        id: 'api11',
        name: 'http://localhost:3030/cobot_api/rotate_claw'
    },
    {
        id: 'api12',
        name: 'http://localhost:3030/cobot_api/release_claw'
    }
]

const ShowListApi = async (req, res) => {
    //method: GET
    try {
        res.status(200).send(apis);
    } catch (error) {
        res.status(400).send(error);
    }
}

const SaveProgram = async (req, res) => {
    //method: POST
    try {

        const {appName, apisEntries} = req.body;

        let result = {
            name: appName,
            apis: {}
        };

        apisEntries.forEach(entry => {
            result.apis[entry.id] = {
                name: entry.api,
                input: parseFloat(entry.amplitude)
            }
        });

        const program = new Program({
            name: result.name,
            apis: result.apis
        });

        await program.save();

        console.log(`\n CREATEED PROGRAM '${program.name}' SUCCESSFULLY !`);
        console.log('Result:', JSON.stringify(program, null, 2));
        res.status(200).send(program);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    ShowListApi,
    SaveProgram
};


// const Work = require('../models/work-schema');
// const bodyParser = require('body-parser');
// const axios = require('axios');

// const CreateWork = async (req, res) => {
//     //method: POST
//     try {
//         const work = new Work({
//             name: req.body.name,
//             description: req.body.description
//         });

//         await work.save();
        
//         console.log(`\n CREATEED WORK '${work.name}' SUCCESSFULLY !`);
//         res.status(200).send(work);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// }

// const EditWork = async (req, res) => {
//     //method: PUT
//     try {
//         const work = await Work.findByIdAndUpdate(req.body.name, {
//             description: req.body.description
//         });
//         res.status(200).send(work);
//     }
//     catch (error) {
//         res.status(400).send(error);
//     }
// }

// const DeleteWork = async (req, res) => {
//     //method: DELETE
//     try { 
//         const work = await Work.findByIdAndDelete(req.body.name);
//         res.status(200).send(work);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// }

// const ListWork = async (req, res) => {
//     //method: GET
//     try {
//         const work = await Work.find();
//         res.status(200).send(work);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// }

// module.exports = {
//     CreateWork,
//     EditWork,
//     DeleteWork,
//     ListWork
// };