var mongoose = require('mongoose');

//mongoose config
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//ES6 new object literal notation
module.exports = {mongoose};
