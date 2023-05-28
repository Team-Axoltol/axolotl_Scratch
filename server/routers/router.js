const express = require("express");

const controller = require("../controllers/controllers.js");

const router = express.Router();

router.get("/homepage/getPosts/:industry", controller.getPosts, (req, res) => {
   console.log('successfully got posts in router');
  // console.log('res.locals.posts:', res.locals.posts)
  res.status(200).json(res.locals.posts);
});

router.post("/homepage/createPost", controller.createPost, (req, res) => {
  //   console.log("createPost is working");
  //console.log(res.locals.newPost);
  res.status(200).json(res.locals.newPost);
});

// router.post('/homepage/createComment', controller.createComment, controller.addComment, (req, res) => {
//     res.status(200).json(res.locals.comments)
// })

module.exports = router;
