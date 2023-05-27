const express = require('express');

const controller = require('../controllers/controllers.js');


const router = express.Router();

router.get('/homepage/getPosts', controller.getPosts, (req, res) => {
    res.status(200).json(res.locals.posts)
})

router.get('/homepage/getComments', controller.getComments, (req, res) => {
    res.status(200).json(res.locals.comments)
})

router.post('/homepage/createPosts', controller.createPosts, (req, res) => {
    res.status(200).json(res.locals.posts)
})

router.post('/homepage/createComment', controller.createComments, (req, res) => {
    res.status(200).json(res.locals.comments)
})

module.exports = router;