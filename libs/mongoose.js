
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

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


var UserSchema = new Schema({
    username: { type: String, require: true, index: { unique: true } },
    password: { type: String, require: true }
});

UserSchema.methods.cryptPassword = function(password) {
    if (password.length > 0) {
        var cryptedPassword = '';
        try {
            cryptedPassword = bcrypt.hashSync(password);
        } catch (err) {
            console.log(err);
        }

        if (cryptedPassword.length > 0) {
            this.password = cryptedPassword;
        }
    }
};

UserSchema.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var UserModel = mongoose.model('User', UserSchema);


module.exports.MessageModel = MessageModel;
module.exports.UserModel = UserModel;