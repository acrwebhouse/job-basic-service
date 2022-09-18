const express = require('express');
const app = express();
const config = require('./lib/setting/config').config;
const serverPort = config.serverPort;
const server = require('http').createServer(app);
const serverUse=require('./lib/serverUse');
const jobRestApi = require("./lib/rest_api/job");

console.log('config',config)

serverUse.on(app);
jobRestApi.on(app);

server.listen(serverPort);
console.log("現在使用" + serverPort + " port");