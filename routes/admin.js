/**
 * Created by amalyuhin on 07.10.14.
 */

var UserModel = require('../libs/mongoose').UserModel;

module.exports = function(app) {
    app.get('/admin/test', function(req, res) {
        var user = new UserModel({username: 'test'});
        user.cryptPassword('qwerty');

        res.render('admin', { is_valid: user.isValidPassword('qwerty') });
    });

    app.post('/admin/login', function(req, res) {
        UserModel.find({ username: req.body.username || '' }, function(err, user) {
            if (user && user.isValidPassword(req.body.password || '')) {
                res.json({ status: 'success' });
            } else {
                var data = { status: 'error' };
                if (err) {
                    data.message = err.message;
                }

                res.json(data);
            }
        });
    });
};