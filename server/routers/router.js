const express = require('express');

const controller = require('../controllers/controllers.js');


const router = express.Router();


// router.get('/homepage/getComments', controller.getComments, (req, res) => {
//     res.status(200).json(res.locals.comments)
// })

router.post('/homepage/createPost', controller.createPost, (req, res) => {
    console.log('createPost is working');
    console.log(res.locals.newPost);
    res.status(200).json(res.locals.newPost);
})

// router.post('/homepage/createComment', controller.createComments, (req, res) => {
//     res.status(200).json(res.locals.comments)
// })

module.exports = router;