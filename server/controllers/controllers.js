const Post = require("../models/post");
const Comment = require("../models/comment");
const Users = require("../models/user");
const Jobs = require("../models/Jobs");
const AppliedJobs = require("../models/appliedjob");
// const AppliedJobs = require ('../models/appliedjobs');

const controller = {};

controller.getPosts = async (req, res, next) => {
  // console.log('req.body of getpost request',req.body);
  const { industry } = req.params;
  console.log("fetching posts from the industry:", industry);
  try {
    console.log("getting posts in controller.getposts");
    let results;
    if (industry) {
      results = await Post.find({ industry: industry });
    } else {
      results = await Post.find();
    }
    // console.log(results);
    res.locals.posts = results.reverse();
    return next();
  } catch (err) {
    return next({
      log: "error caught in controller.getPosts",
      message: { err: err },
    });
  }
};

controller.createPost = async (req, res, next) => {
  console.log("creating post in controller.createPost");
  console.log("creatpostreq", req.body);
  const { industry, body, company } = req.body;
  try {
    const results = await Post.create({ industry, body, company });
    const newArr = await Post.find({ industry: industry });
    res.locals.newPost = newArr.reverse();
    // console.log('im working');
    return next();
  } catch (err) {
    return next({
      log: "error caught in controller.createPost",
      message: { err: err },
    });
  }
};

controller.likePost = async (req, res, next) => {
  console.log("liking post");
  const { _id } = req.body;
  try {
    const likedPost = await Post.findOneAndUpdate(
      { _id: _id },
      { $inc: { likeCount: 1 } },
      { new: true }
    );
    console.log("post found");
    res.locals.newCount = likedPost.likeCount;
    return next();
  } catch (err) {
    return next({
      log: "error caught in controller.likePost",
      message: { err: err },
    });
  }
};

controller.newJobApp = async (req, res, next) => {
  const { email, industry, salary, company, jobTitle, status } = req.body;
  try {
    const newJob = await AppliedJobs.create({
      industry,
      company,
      salary,
      jobTitle,
      status,
    });
    const User = await Users.findOne({ email: email });
    User.jobLog.push(newJob._id);
    await User.save();
    return next();
  } catch (err) {
    console.log("Error in newJobApp controller", err);
    return next(err);
  }
};

controller.getJobApps = async (req, res, next) => {
  try {
    console.log("looking for user");
    const { email } = req.body;
    const queryingUser = await Users.findOne({ email: email });
    res.locals.jobs = queryingUser.jobLog;
    return next();
  } catch (err) {
    console.log("Error in getJobApps controller", err);
    return next(err);
  }
};

controller.deleteJobApp = async (req, res, next) => {
  try {
    console.log("deleting job app");
    const { _id } = req.body;
    await AppliedJobs.deleteOne({ _id: _id });
    return next();
  } catch (err) {
    console.log("Error in deleteJobApp controller", err);
    return next(err);
  }
};

controller.changeStatus = async (req, res, next) => {
  console.log("changing post status");
  const { _id, newStatus } = req.body;
  try {
    const changedPost = await AppliedJobs.findOneAndUpdate(
      { _id: _id },
      { status: newStatus },
      { new: true }
    );
    console.log("post found");
    res.locals.newStatus = changedPost.status;
    return next();
  } catch (err) {
    return next({
      log: "error caught in controller.changeStatus",
      message: { err: err },
    });
  }
};

controller.newJobListing = async (req, res, next) => {
  console.log(req.body);
  const { industry, company, jobTitle, salary, status } = req.body;
  try {
    const job = await Jobs.create({
      industry,
      company,
      jobTitle,
      salary,
      status,
    });
    res.locals.newJob = job;
    return next();
  } catch (err) {
    console.log("Error in newJobListing controller", err);
    return next(err);
  }
};

controller.getJobListings = async (req, res, next) => {
  try {
    const jobs = await Jobs.find(); // Use a different variable name, e.g., 'jobs' instead of 'Jobs'
    res.locals.jobs = jobs;
    return next();
  } catch (err) {
    console.log("Error in getJobListings controller", err);
    return next(err);
  }
};

// controller.createComment = async (req, res, next) =>{
//   const

//   try{
//     const comment = await Comment.create({user_id: user_id, parent: parent, body: body, date: date});
//     res.locals.newComment = comment;
//     return next();
//   }
//   catch(err){
//     console.log('Error in createComments', err);
//   }

// }

// controller.addComment = async (req, res, next) => {
//   const { _id, comments } = req.body.post;  {_id: _id, comments: comments}
//   const newComment = res.locals.newComment;
//   try {
//     const parentPost = await Post.findOneAndUpdate({ _id: _id }, {comments: comments.concat([newComment])}, {new: true});
//     res.locals.updatedParent;
//     return next();
//   }
//   catch(err) {
//     return next(err);
//   }
// }

// controller.getComments = async (req, res, next) => {
//   const {comments} = req.body; // req.body holds parent post of comments
//   try {
//     const foundComments = await Post.findOne
//   }
// }

module.exports = controller;
