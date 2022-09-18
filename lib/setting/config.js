require('dotenv').config()
exports.config = {
    'serverIp':process.env.SERVER_IP || '127.0.0.1',
    'serverPort': process.env.SERVER_PORT || 19000,
    'swaggerIp':process.env.SWAGGER_IP || '127.0.0.1',
    'nasDir': process.env.NAS_DIR || '/Users/chris/Documents/work/ACR/nas_dir'
}