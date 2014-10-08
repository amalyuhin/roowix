/**
 * Created by amalyuhin on 01.10.14.
 */

var MessageModel = require('../libs/mongoose').MessageModel;
var UserModel = require('../libs/mongoose').UserModel;

module.exports = function(app) {
    app.post('/api/message', function(req, res) {
        var message = new MessageModel({
            username: req.body.username || '',
            email: req.body.email || '',
            text: req.body.text || ''
        });

        message.save(function(err) {
            if (!err) {
                res.json({status: 'success'});
            } else {
                var data = {status: 'error', message: err.message};
                if (err.name === 'ValidationError') {
                    data.errors = err.errors;
                }

                res.json(data);
            }
        });
    });

    app.post('/api/admin/login', function(req, res) {

        //UserModel.find({ username: req.body.username || '' }, function(err, user) {
        //    if (user && user.isValidPassword(req.body.password || '')) {
        //        res.json({ status: 'success' });
        //    } else {
        //        var data = { status: 'error' };
        //        if (err) {
        //            data.message = err.message;
        //        }
        //
        //        res.json(data);
        //    }
        //});
    });
};