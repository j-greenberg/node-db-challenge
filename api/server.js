const helmet = require('helmet'); 
const express = require('express'); 

const server = express(); 

server.use(express.json()); 
server.use(helmet); 

module.exports = server; 