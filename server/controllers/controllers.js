const models = require('../models/models');

const homepageController = {};


homepageController.getPosts = async (req, res, next) => {
  const { industry } = req.body;
  try{
    const results = await models.Post.findAll({industry: industry});
    console.log(results);
    res.locals.posts = results;
    return next();
  }
  catch(err){
    console.log('Error in getPosts', err)
    return next(err);
  }
}

homepageController.createPosts = async ( req, res, next ) => {

  const { user_id, title, topic, city, industry, body, date } = req.body;
  try{
  const results = await models.Post.create(user_id, industry, title, topic, body, date, city)
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
module.exports = homepageController;