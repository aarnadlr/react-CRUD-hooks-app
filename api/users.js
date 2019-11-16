import mongoose from 'mongoose';
require('dotenv').config();
const db = process.env.MONGODB_CRUD_URI;


const User = require('../src/models/User');


module.exports = (req, res) => {

  //MONGO 2: Connect to db w mongoose
  mongoose
    .connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(() => console.log('SUCCESS! CONNECTED!'))
    .catch(e => console.error('WHOOPS! ERROR!: ', e));

  User.find()
    //Sort the items
    // .sort({ date: -1 })
    //Send the items in the response, converted to JSON,
    .then(users => res.status(200).json({users}));
  // console.log('LOGGED REQ!', req.headers)
  // res.setHeader('CUSTOM', "HEADER!");
  // res.json({
  // 	success: true,
  // 	// success2: "true2",
  // 	// theHeader: res.headers
  //   // body: req.body,
  //   // cookies: req.cookies,
  //   // query: req.query,
  // 	// theName:'Asher!',
  // })
};

// ***  req.body
// ***  req.cookies
// ***  req.query (Only if User VISITS that route!
// ///----
//      res.status(201)
//      res.send(body)
//      res.json(obj)
//      res.end("value")
//      res.setHeader('Accept-Ranges', 'items')
//      res.setHeader('Content-Range', 'items 0-10/100')
