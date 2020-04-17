const helmet = require('helmet'); 
const express = require('express'); 
const server = express(); 
const projectRouter = require('../projects/project-router.js'); 
const resourceRouter = require('../resources/resources-router.js'); 

server.use(express.json()); 
server.use(helmet()); 
server.use('/api/projects', projectRouter); 
server.use('/api/resources', resourceRouter); 

module.exports = server; 