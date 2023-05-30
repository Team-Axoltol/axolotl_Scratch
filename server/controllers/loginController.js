const db = require('../sqlConfig');
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');
const Users = require('../models/user');


const loginController = {};

loginController.checkNewUser = async (req, res, next) => {
  const { email } = req.body;
  // console.log(req.body);
  //check if user already exists
  console.log('checking whether email has existing account');
  try {
    const results = await db.query(
      `SELECT * FROM users
      WHERE email = $1`,
      [email]
    );
    // console.log(results.rows) // list of users that matches passed in email
    if (results.rows.length > 0) {
      console.log('email has existing account');
      return res.status(400).json('email already has account'); // email already has account
    }
    console.log('email does not have an existing account');
    return next();
  } catch (err) {
    return next({
      log: 'error in controller.checkNewUser',
      message: { err: err },
    });
  }
};

loginController.createNewUser = async (req, res, next) => {
  console.log('creating new user');
  const { name, email, password } = req.body;
  if (!name || !email || !password) return next({log: 'name/email/password cannot be null}', message: {err: 'name/email/password is null'}});
  try {
    console.log('hashing password');
    const hashedPassword = await bcrypt.hash(password, 10);
    const results = await db.query(
      `INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, email`,
      [name, email, hashedPassword]);
    console.log('added new user to sql database');
    res.locals.createdUser = results.rows[0];

    const nsqlUser = await Users.create({name, email});
    //////////////////
    /////for websocket
      fetch('http://localhost:8081/storeInput', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: res.locals.createdUser,
        }),
      })
        .then(res => {
            console.log('Name sent back to server!');
            return;
        })
        .catch(err => {
            console.log('Name sent back to server failed......');
            return;
        });
    /////for websocket
    //////////////////
    // console.log(res.locals.createdUser);
    return next();
  }
  catch(err) {
    return next({
      log: 'error in controller.createNewUser',
      message: {err: err},
    });
  };
};

loginController.verifyUser = async (req, res, next) => {
  console.log('starting to verify user');
  const { email, password } = req.body;
  try {
    const foundUsers = await db.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);

    if (foundUsers.rows.length === 0) {
      return next({ 
        log: 'no users found with that email',
        message: {err: 'no users found with that email'},
      });
    }
    console.log('user found, checking password');
    const foundUser = foundUsers.rows[0];
    const pwCheck = await bcrypt.compare(password, foundUser.password);
    if (!pwCheck) {
      console.log('wrong password');
      return next({
        log: 'incorrect password',
        message: {err: 'wrong password'}
      });
    }
    console.log(foundUser);
    //////////////////
    /////for websocket
    fetch('http://localhost:3000/storeInput', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          name: foundUser.name
      }),
    })
      .then(res => {
          console.log('Name sent back to server!');
          return;
      })
      .catch(err => {
          console.log('Name sent back to server failed......');
          return;
      });
    /////for websocket
    //////////////////
    res.locals.id = foundUser.id;
    res.locals.email = foundUser.email;
    console.log('verified user/password');
    return next();
    // const user = await Users.find({ pwValue, accValue });
    // res.locals.user = user;
    // return next();
  } catch (err) {
    return next({
      log: 'error caught in controller.verifyUser',
      message: {err: err},
    });
  }
};

loginController.setSSIDCookie = async (req, res, next) => {
  try {
    console.log('setting ssidcookie');
    await res.cookie('ssid', res.locals.id, { httpOnly: true });
    console.log('setted ssidcookie');
    return next();
  }
  catch (err) {
    return next({
      log: 'error caught in controller.setSSSIDCookie',
      message: {err: err},
    });
  };
};

loginController.startSession = async (req, res, next) => {
  console.log('starting session');
  try {
    const result = await db.query(
      `INSERT INTO sessions (cookieId, sessionid)
      VALUES ($1, $2)`,
      [res.locals.id, res.locals.id + Date.now()]
    );
    console.log('session created');
    return next();
  }
  catch (err) {
    return next({
      log: 'error caught in controller.startSession',
      message: {err: err},
    });
  };
};

loginController.logout = async (req, res, next) => {
  try {
    console.log('ending session');
    console.log(req.cookies);
    console.log(req.cookies['ssid']);
    await db.query(`DELETE FROM sessions WHERE cookieId=$1`, [
      req.cookies['ssid'],
    ]);
    console.log('clearing cookie');
    await res.clearCookie('ssid');
    return next();
  }
  catch (err) {
    return next({
      log: 'error caught in controller.logout',
      message: {err: err},
    });
  };
};

loginController.isLoggedIn = async (res, req, next) => {
  try {
    const foundSession = await db.query(
      `SELECT * FROM sessions WHERE cookieId=$1`,
      [req.cookies.ssid]
    );
    if (foundSession.rows.length === 0)
      return res.status(400).json('session timed out');
    return next();
  }
  catch (err) {
    return next({
      log: 'error caught in controller.isLoggedIn',
      message: {err: err},
    });
  };
};


module.exports = loginController;
