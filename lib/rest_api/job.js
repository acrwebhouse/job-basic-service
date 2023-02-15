exports.on = function(app) {
    const preRestApi = '/job';
    const job = require('../role/job');
    const config = require('../setting/config').config;
    const nasDir = config.nasDir;
    const path = require('path')
    const utilsValue = require('../utils/value');
    const utilsFile = require('../utils/file');
    const watermarkType = 0;
    app.post(preRestApi + '/addJob', function(req, res) {
        /* 
          #swagger.parameters['obj'] = {
            in: 'body',
            description: 'new job',
            schema: {
                type:0,
                info:{
                    input:{
                        path : "input",
                        watermarkPath : "company/638b89b51925e5002a857593/image/watermark.png"
                    },
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
                const input = path.join(nasDir,req.body.info.input.path);
                const output = path.join(nasDir,req.body.info.output);
                let watermarkPath = path.join(nasDir,req.body.info.input.watermarkPath);
                utilsFile.checkFileExists(watermarkPath,(result)=>{
                    if(result === true){
                    }else{
                        watermarkPath = path.join(__dirname,'..','..','resource','image','watermark.png');
                    }
                    response.status = true;
                    response.data = 'working'
                    res.send(response)
                    job.watermarkByFolder(input,output,watermarkPath,()=>{})
                })
                break;
            default:
                response.status = false;
                response.data = 'no job type'
                res.send(response)
        }
    });

}