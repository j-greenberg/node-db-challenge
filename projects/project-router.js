const express = require('express'); 
const router = express.Router(); 
const db = require('./project-model.js'); 

router.get('/', (req, res) => {
    db.get()
    .then(response => {
        console.log(response); 
        res.status(200).json({ response }); 
    })
    .catch(error => {
        console.log(error); 
        res.status(404).json({ error }); 
    })
}); 

router.post('/', (req, res) => {

}); 







module.exports = router; 