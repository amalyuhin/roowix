/**
 * Created by amalyuhin on 01.10.14.
 */

//exports.index = function(req, res) {
//    res.render('index', { user: "World" });
//};

module.exports = function(app) {
    var index = function(req, res) {
        res.render('index', { user: "World" });
    };

    app.get('/', index);
};