const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err,salt) =>{
  bcrypt.hash(password, salt, (err,hash) =>{
    console.log(hash);
  })
})

var hashedPassword = '$2a$10$rWrfO7.bTl6mlFsubqiEk.JTiX8ou0K4vr4qJ1zGmIY5sT2UCZzXq';

bcrypt.compare(password, hashedPassword, (err,res) =>{
  console.log(res);
})

// var data = {
//   id:10
// };
//
// var token = jwt.sign(data,'123aaaa');
//
// console.log(token);
//
// var decoded =jwt.verify(token,'123aaaa');
//
// console.log('decoded ', decoded);
// // var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message ${message}`);
// console.log(`hash ${hash}`);
//
// var data = {
//   id: 4
// };
//
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somescrtet').toString()
// }
// var resultHash = SHA256(JSON.stringify(token.data)+ 'somescrtet').toString();
