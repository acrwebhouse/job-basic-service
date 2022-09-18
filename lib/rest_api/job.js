exports.on = function(app) {
    const preRestApi = '/job';
    const house = require('../role/house');
    const config = require('../setting/config').config;
    const nasDir = config.nasDir;
    app.post(preRestApi + '/addJob', function(req, res) {
        /* 
        #swagger.security = [{
               "apiKeyAuth": []
        }] 
          #swagger.parameters['obj'] = {
            in: 'body',
            description: 'new job',
            schema: {
                type:0
            }
        }
        */

        const response = {
            'status':true,
            'data':''
        }
        res.send(response)
        
    });

}