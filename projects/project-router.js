const express = require('express'); 
const router = express.Router(); 
const Projects = require('./project-model.js'); 

router.get('/', (req, res) => {
    Projects.find()
    .then(response => {
        console.log(response); 
        res.status(200).json({ response }); 
    })
    .catch(error => {
        console.log(error); 
        res.status(404).json({ error }); 
    })
}); 

router.get('/:id', (req, res) => {
    Projects.findById(req.params.id)
        .then(response => {
            console.log(response); 
            res.status(200).json({ response }); 
        })
        .catch(error => {
            console.log(error); 
            res.status(500).json({ error }); 
        })
}); 

router.get('/:id/tasks', (req, res) => {
    Projects.findTasks(req.params.id)
        .then(response => {
            console.log(`Router response: ` , response); 
            res.status(200).json({ tasks: response }); 
        })
        .catch(error => {
            console.log(`Router error: ${error}`); 
            res.status(500).json({ error }); 
        })
})

router.post('/', (req, res) => {
    Projects
    .add(req.body)
    .then(response => {
        console.log(response); 
        res.status(200).json({ response }); 
    })
    .catch(error => {
        console.log(error); 
        res.status(500).json({ error })
    })
}); 

module.exports = router; 