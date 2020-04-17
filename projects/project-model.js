const db = require('../data/db-config.js'); 

// Build an API with endpoints for:
//   - [X] adding projects. /api/projects: POST
//   - [X] retrieving a list of projects. /api/projects: GET
//   - [ ] adding tasks. /api/projects/:id/: POST
//   - [X] retrieving a list of tasks. **The list of tasks should include the project name and project description**. /api/projects/:id: GET

module.exports = {
    find, // retrieving a list of projects
    findById, // 
    add, // adding projects
    addTask, 
    findTasks, 
    findResources, 
    addResource
}

function findResources(){ 
    return db("resources")
}

function addResource(resource){
   return db('resources')
        .insert(resource)
        .then(id => {
            console.log('resource added:', id)
            return db('resources')
                .select('*')
                .where({ 'resources.id': id })
                .then(resource => {
                    console.log('New resource created: ', resource); 
                    return resource; 
                })
                .catch(error => {
                    console.log(error); 
                })
            })
        .catch(error => {
            console.log(error); 
            })
}

function find(){
    return db("projects")
}

function findById(id){
    return db('projects')
        .where({ 'projects.id': id })
        .then(project => {
            console.log('Project: ', project); 
                return db('tasks')
                .where({ 'tasks.project_id': id })
                .then(tasks => {
                    console.log('Tasks: ', tasks); 
                    return tasks; 
                })
                .catch(error => {
                    console.log('Model task error:', error); 
                })
                //return ("Project:", project); 
        })
        .catch(error => {
            console.log('Model error: ', error); 
            return error; 
        })
}

function add(project){
    return db("projects")
    .insert(project)
    .then(response => {
        console.log(response); 
    })
    .catch(error => {
        console.log(error); 
    })
}

function addTask(task){
    return db('tasks')
        .insert(task)
        .then(response => {
            return response; 
        })
        .catch(error => {
            console.log(error);
        })
}

function findTasks(id){
    return db("tasks")
        .select('*')    
        .where({ project_id: id })
        .then(response => {
            console.log(`Model response: `, response); 
            return response; 
        })
        .catch(error => {
            console.log(error); 
        })
}