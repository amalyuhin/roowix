/**
 * Created by amalyuhin on 07.10.14.
 */

var UserModel = require('../libs/mongoose').UserModel;

module.exports = function(app) {
    app.get('/admin/test-user', function(req, res) {
        var data = {
            username: 'test',
            password: 'test'
        };

        UserModel.findOne({ username: data.username }, function(err, user) {
            if (!err) {
                if (user) {
                    console.log(user);
                    res.end('User already exist.');
                } else {
                    var testUser = new UserModel({username: data.username});
                    testUser.cryptPassword(data.password);

                    testUser.save(function(err, newUser) {
                        if (err) {
                            res.end('Error: ' + err.message);
                        } else {
                            res.end('User ' + newUser.username + ' successfully created.');
                        }
                    });
                }
            } else {
                res.end('Error: ' + err.message);
            }
        });
    });

    app.get('/admin', function(req, res) {
        res.render('admin');
    });
};