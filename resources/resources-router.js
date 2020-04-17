const express = require('express'); 
const router = express.Router(); 
const Resources = require('./resources-model.js'); 

router.get('/', (req, res) => {
    Resources.find()
    .then(resources => {
        console.log(resources); 
        res.status(200).json({ resources }); 
    })
    .catch(error => {
        console.log(error); 
        res.status(404).json({ error }); 
    })
}); 

router.get('/:id', (req, res) => {
    Resources.findById(req.params.id)
        .then(resource => {
            console.log(resource); 
            res.status(200).json({ resource }); 
        })
        .catch(error => {
            console.log(error); 
            res.status(500).json({ error }); 
        })
}); 

router.post('/', (req, res) => {
    Resources
    .add(req.body)
    .then(response => {
        console.log("Router response: ", response); 
        res.status(200).json({ response }); 
    })
    .catch(error => {
        console.log(error); 
        res.status(500).json({ error })
    })
}); 

module.exports = router; 