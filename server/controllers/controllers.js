const Post = require("../models/post");
const Comment = require("../models/comment");
const Users = require("../models/user");
const db = require('../sqlConfig')
const bcrypt = require('bcrypt');


const controller = {};

controller.checkNewUser = async (req, res, next) => {
  const {name, email, password, password2 } = req.body;
  // console.log(req.body);
  //check if user already exists
  console.log('checking whether email has existing account');
  db.query(
    `SELECT * FROM users
    WHERE email = $1`, [email], (err, results) => {
      if (err) {
        console.log('failed at query');
        return next(err);
      }
      // console.log(results.rows) // list of users that matches passed in email
      if (results.rows.length > 0) {
        console.log('email has existing account');
        return res.status(400).json('email already has account'); // email already has account
      }
      console.log('email does not have an existing account')
      return next();
    }
  )
  res.locals.registerInfo = {name, email, password, password2};
}

controller.createNewUser = async (req, res, next) => {
  console.log('creating new user');
  const {name, email, password, password2 } = req.body;
  console.log('hashing password');
  const hashedPassword = await bcrypt.hash(password, 10);
  // console.log(hashedPassword);
  db.query(
    `INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id, password`, [name, email, hashedPassword], (err, results) => {
      if (err) {
        return next(err);
      }
      // console.log(results.rows);
      console.log('added new user to database');
      res.locals.createdUser = results.rows[0];
      return next();
    }
  )
}

controller.verifyUser = async (req, res, next) => {
  console.log('starting to verify user');
  const { email, password } = req.body;
  try{
    const foundUsers = await db.query(
      `SELECT * FROM users WHERE email = $1`, [email]
    )

    if (foundUsers.rows.length === 0) {
      return next({err: 'no users found'})
    }
    console.log('user found, checking password')
    const foundUser = foundUsers.rows[0];
    const pwCheck = await bcrypt.compare(password, foundUser.password)
    if (!pwCheck) {
      console.log('wrong password');
      return next(err);
    }
    res.locals.id = foundUser.id;
    console.log('verified user/password');
      return next();
    // const user = await Users.find({ pwValue, accValue });
    // res.locals.user = user;
    // return next();
  }
  catch(err){
    console.log('Error in login', err);
    return next(err);
  }
}

controller.getPosts = async (req, res, next) => {
  // console.log('req.body of getpost request',req.body);
  const { industry } = req.params;
  console.log({ industry });
  try {
    console.log("getting posts in controller.getposts");
    let results;
    if (industry) {
      results = await Post.find({ industry: industry });
    } else {
      results = await Post.find();
    }
    // console.log(results);
    res.locals.posts = results;
    return next();
  } catch (err) {
    console.log("Error in getPosts", err);
    return next(err);
  }
};

controller.createPost = async (req, res, next) => {
  console.log("creating post in controller.createPost");
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

controller.setSSIDCookie = async (req, res, next) => {
  try{
    console.log('setting ssidcookie');
    await res.cookie('ssid', res.locals.id, {httpOnly: true});
    console.log('setted ssidcookie');
    return next();
  }
  catch(err){
    return next(err);
  }
}


controller.startSession = (req, res, next) => {
  console.log('starting session')
  db.query(
    `INSERT INTO sessions (cookieId)
    VALUES ($1)`, [res.locals.id], (err, results) => {
      if (err) {
        return next(err);
      }
      console.log('session created');
      return next();
    }
  )
}

controller.logout = async (req, res, next) => {
  try {
    console.log('ending session');
    console.log(req.cookies);
    console.log(req.cookies['ssid']);
    await db.query(
      `DELETE FROM sessions WHERE cookieId=$1`, [req.cookies['ssid']]
    )
    console.log('clearing cookie'); 
    await res.clearCookie('ssid');
    return next();
  }
  catch(err) {
    return next(err);
  }

}

controller.isLoggedIn = async (res, req, next) => {
  try {
    const foundSession = await db.query(
      `SELECT * FROM sessions WHERE cookieId=$1`, [req.cookies.ssid]
    );
    if (foundSession.rows.length === 0) return res.status(400).json('session timed out');
    return next();
  }
  catch(err) {
    return next(err);
  }
}



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
