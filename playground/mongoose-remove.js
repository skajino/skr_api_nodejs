const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// remove all
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//
//Todo.findOneAndRemove()
Todo.findByIdAndRemove()
Todo.findByIdAndRemove('5b6d47529cf319f0e9e3cff4').then((todo)=>{
  console.log(todo);
});

//Find by skr_api_nodejs

// Todo.findOneAndRemove({_id:'5b6d474b9cf319f0e9e3cff2'}).then((todo)=>{
//   console.log(todo);
// });
