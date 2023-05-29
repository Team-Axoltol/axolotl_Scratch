const express = require("express");

const controller = require("../controllers/controllers.js");
const loginController = require("../controllers/loginController.js");


const router = express.Router();


router.post('/users/register', loginController.checkNewUser, loginController.createNewUser, (req, res) => {
  console.log('new user created')
  res.status(200).json('new user created');
});

router.post('/users/login', loginController.verifyUser, loginController.setSSIDCookie, loginController.startSession, (req, res) => {
  console.log('completed login');
  res.status(200).json(res.locals.email);
});

router.post('/users/logout', loginController.logout, (req, res) => {
  console.log('completed logout');
  res.status(200).json('logged out');
});


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

router.post('/AppliedJobLog', controller.createJobPost, (req, res) => {
  console.log('Inside AppliedJobLog router. Response is:', res.locals.newJob);
  res.status(200).json(res.locals.newJob);
})

router.get('/AppliedJobLog', controller.getJobPosts, (req, res) => {
  console.log('Inside AppliedJobLog router. Response is:', res.locals.jobs);
  res.status(200).json(res.locals.jobs);
})

// router.post('/homepage/createComment', controller.createComment, controller.addComment, (req, res) => {
//     res.status(200).json(res.locals.comments)
// })

module.exports = router;
