exports.on = function(app) {
    const preRestApi = '/job';
    const job = require('../role/job');
    const config = require('../setting/config').config;
    const nasDir = config.nasDir;
    const path = require('path')
    const utilsValue = require('../utils/value');
    const watermarkType = 0;
    app.post(preRestApi + '/addJob', function(req, res) {
        /* 
          #swagger.parameters['obj'] = {
            in: 'body',
            description: 'new job',
            schema: {
                type:0,
                info:{
                    input:"input",
                    output:"output"
                }
            }
        }
        */

        const type = req.body.type*1

        const response = {
            'status':true,
            'data':''
        }
        
        switch(type){
            case watermarkType:
                const input = path.join(nasDir,req.body.info.input);
                const output = path.join(nasDir,req.body.info.output);
                let watermarkPath = path.join(__dirname,'..','..','resource','image','watermark.png');
                if(utilsValue.isValid(req.body.info.watermarkPath)){
                    watermarkPath = path.join(nasDir,req.body.info.watermarkPath);
                }
                response.status = true;
                response.data = 'working'
                res.send(response)
                job.watermarkByFolder(input,output,watermarkPath,()=>{})
                break;
            default:
                response.status = false;
                response.data = 'no job type'
                res.send(response)
        }
    });

}