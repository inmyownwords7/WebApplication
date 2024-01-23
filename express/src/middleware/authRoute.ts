// import express from 'express';
// import passport from 'passport';
// import * as LocalStrategy from "passport-local";
// import * as crypto from "crypto";
// import {Database} from "sqlite3"
// const db = new Database('db.sqlite')
// const strategy = new LocalStrategy(function verify(username, password, cb) {
//   db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, user) {
//     if (err) { return cb(err); }
//     if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }
  
//     crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
//       if (err) { return cb(err); }
//       if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
//         return cb(null, false, { message: 'Incorrect username or password.' });
//       }
//       return cb(null, user)
// });
//   })
// })
// // import express from 'express';
// import crypto from 'crypto';
// // import db from '../db'; // Adjust the import path based on your project structure
// const authRoute = express.Router();

// authRoute.get('/login', function(req, res, next) {
//   res.render('login');
// });

// authRoute.post('/logout', function(req, res, next) {
//   req.logout(function(err) {
//     if (err) { return next(err); }
//     res.redirect('/');
//   });
// });

// authRoute.get('/signup', function(req, res, next) {
  
// });

// export const signupUser = async (username: string, password: string): Promise<number> => {
//   return new Promise((resolve, reject) => {
//     const salt = crypto.randomBytes(16);
//     crypto.pbkdf2(password, salt, 310000, 32, 'sha256', (err, hashedPassword) => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       db.run('INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)', [
//         username,
//         hashedPassword,
//         salt,
//       ], function (err) {
//         if (err) {
//           reject(err);
//           return;
//         }

//         resolve(this.lastID);
//       });
//     });
//   });
// };

// export default authRoute