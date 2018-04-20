var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/user', {
  useMongoClient: true
});
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  user: String,
  password: String
});

var User = mongoose.model('User', userSchema);

var allUsers = function(callback) {
  User.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, User);
    }
  });
};

var saveUsers = function (data){
  User.create(data)
};

module.exports.allUsers = allUsers;
module.exports.saveUsers = saveUsers