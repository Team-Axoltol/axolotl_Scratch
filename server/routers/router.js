const express = require("express");

const controller = require("../controllers/controllers.js");
const loginController = require("../controllers/loginController.js");

const router = express.Router();

router.post(
  "/users/register",
  loginController.checkNewUser,
  loginController.createNewUser,
  (req, res) => {
    console.log("new user created");
    res.status(200).json("new user created");
  }
);

router.post(
  "/users/login",
  loginController.verifyUser,
  loginController.setSSIDCookie,
  loginController.startSession,
  (req, res) => {
    console.log("completed login");
    res.status(200).json(res.locals.email);
  }
);

router.post("/users/logout", loginController.logout, (req, res) => {
  console.log("completed logout");
  res.status(200).json("logged out");
});

router.get("/homepage/getPosts/:industry", controller.getPosts, (req, res) => {
  console.log("successfully got posts in router");
  // console.log('res.locals.posts:', res.locals.posts)
  res.status(200).json(res.locals.posts);
});

router.post("/homepage/createPost", controller.createPost, (req, res) => {
  //   console.log("createPost is working");
  //console.log(res.locals.newPost);
  res.status(200).json(res.locals.newPost);
});

router.post("/homepage/likePost", controller.likePost, (req, res) => {
  console.log("post liked");
  res.status(200).json(res.locals.newCount);
});

router.post("/newJobApp", controller.newJobApp, (req, res) => {
  console.log("new job app added");
  res.status(200).json("New job added to log");
});

router.get("/getJobApps", controller.getJobApps, (req, res) => {
  console.log("fetched all job apps");
  res.status(200).json(res.locals.jobs);
});

router.get("/deleteJobApp", controller.deleteJobApp, (req, res) => {
  console.log("deleting job app");
  res.status(200).json("job app deleted");
});

router.get("/updateJobStatus", controller.changeStatus, (req, res) => {
  console.log("updated job status to", res.locals.newStatus);
  res.status(200).json(res.locals.newStatus);
});

router.post("/newJobListing", controller.newJobListing, (req, res) => {
  console.log("new job listed");
  res.status(200).json(res.locals.newJob);
});

router.get("/getJobListings", controller.getJobListings, (req, res) => {
  console.log("fetched all job listings");
  res.status(200).json(res.locals.jobs);
});

// router.post('/homepage/createComment', controller.createComment, controller.addComment, (req, res) => {
//     res.status(200).json(res.locals.comments)
// })

module.exports = router;
