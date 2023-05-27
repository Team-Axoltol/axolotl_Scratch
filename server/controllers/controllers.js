const Post = require('../models/post');
const Comment = require('../models/comment');
const Users = require('../models/user');

const controller = {};


controller.getPosts = async (req, res, next) => {
  const { industry } = req.body;
  try{
    const results = await Post.findAll({industry: industry});
    console.log(results);
    res.locals.posts = results;
    return next();
  }
  catch(err){
    console.log('Error in getPosts', err)
    return next(err);
  }
}

controller.createPosts = async ( req, res, next ) => {

  const { industry, body, company, date } = req.body;
  try{
    const results = await Post.create({ industry, body, date, company })
    res.locals.newPost = results;
    return next()
  }
  catch(err){
    console.log('Error in createPosts', err);
    next(err);
  }
} 



// homepageController.getComments = async (req, res, next) =>{
//   const { }
// }
module.exports = controller;