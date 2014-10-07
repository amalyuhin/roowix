
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/roowix');

var db = mongoose.connection;
var Schema = mongoose.Schema;

var validatorNotEmpty = function(string) {
    return (string.length > 0);
};

var validatorEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

var MessageSchema = new Schema({
    username: { type: String, validate: [validatorNotEmpty, 'Required.'] },
    email: { type: String, validate: [validatorEmail, 'Enter correct email.'] },
    text: { type: String, validate: [validatorNotEmpty, 'Required.'] }
});

var MessageModel = mongoose.model('Message', MessageSchema);


module.exports.MessageModel = MessageModel;