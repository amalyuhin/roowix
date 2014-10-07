/**
 * Created by amalyuhin on 01.10.14.
 */

var MessageModel = require('../libs/mongoose').MessageModel;

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
};