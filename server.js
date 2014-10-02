/**
 * Module dependencies
 * @type {exports}
 */
var express = require('express'),
    errorHandler = require('error-handler'),
    routes = require('./routes'),
    api = require('./routes/api'),
    swig = require('swig'),
    http = require('http'),
    path = require('path');

var app = module.exports = express();


/**
 * Configuration
 */

app.engine('html', swig.renderFile);

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);

// JSON API
//app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

function handleError (req, res, err) {
    req.log.error({ err: err }, err.stack);

    res.writeHead(500, {'Content-Type': 'text/html'});
    res.end(
        '<html>' +
        '<head><title>Error</title></head>' +
        '<body><p style="white-space: pre">' + err.stack + '</p></body>' +
        '</html>'
    );
}

app.use(function (req, res, next) {
    errorHandler(req, res, handleError);
});

app.listen(app.get('port'));