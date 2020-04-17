const db = require('../data/db-config.js'); 

// Build an API with endpoints for:
//   - [X] adding resources. /api/projects/resources: POST
//   - [X] retrieving a list of resources. /api/resources: GET

module.exports = {
    find, // retrieving a list of projects
    findById, // 
    add // adding projects
}

function find(){
    return db("resources"); 
}

function findById(id){
    return db('resources')
        .where({ 'resources.id': id })
}

function add(resource){
   return db('resources')
        .insert(resource, "id")
        .then(id => {
            console.log('New Resource ID:', id)
                findById(id); 
            })
        .catch(error => {
            console.log(error); 
            })
}