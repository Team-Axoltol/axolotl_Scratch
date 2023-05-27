const express = require('express');

const homePageController = require('../controllers/controllers.js')

const router = express.Router();

router.get('/homepage/getPosts', homePageController.getPosts, (req, res) => {
    res.status(200).json(res.locals.posts)
})

router.get('/homepage/getComments', homePageController.getComments, (req, res) => {
    res.status(200).json(res.locals.comments)
})

router.post('/homepage/createPost', homePageController.createPosts, (req, res) => {
    res.status(200).json(res.locals.posts)
})

router.post('/homepage/createComment', homePageController.createComments, (req, res) => {
    res.status(200).json(res.locals.comments)
})

module.exports = router;