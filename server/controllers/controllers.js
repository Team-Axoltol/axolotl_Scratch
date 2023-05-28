const Post = require("../models/post");
const Comment = require("../models/comment");
const Users = require("../models/user");

const controller = {};

controller.getPosts = async (req, res, next) => {
  console.log('req.body of getpost request',req.body);
  const { industry } = req.params;
  try {
    console.log('getting posts in controller.getposts');
    let results;
    if (industry) {
      results = await Post.find({industry: industry});
    }
    else {
      results = await Post.find();
    }
    console.log(results);
    res.locals.posts = results;
    return next();
  } catch (err) {
    console.log("Error in getPosts", err);
    return next(err);
  }
};

controller.createPost = async ( req, res, next ) => {
  console.log('creating post in controller.createPost');
  const { industry, body, company, date } = req.body;
  try {
    const results = await Post.create({ industry, body, date, company });
    res.locals.newPost = results;
    // console.log('im working');
    return next();
  } catch (err) {
    console.log("Error in createPost", err);
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
