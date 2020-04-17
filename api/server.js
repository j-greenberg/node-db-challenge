const helmet = require('helmet'); 
const express = require('express'); 
const server = express(); 
const projectRouter = require('../projects/project-router.js'); 

server.use(express.json()); 
server.use(helmet()); 
server.use('/api/projects', projectRouter); 

module.exports = server; 