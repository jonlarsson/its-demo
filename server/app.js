/**
 * Module dependencies.
 */

var express = require('express')
    , restauranger = require('./resources/restauranger')
    , http = require('http')
    , path = require('path')
    , sugar = require('sugar');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '../client')));
    app.use("/lib", express.static(path.join(__dirname, "../bower_components")));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/api/restauranger', restauranger.list);
app.get('/api/restauranger/:id', restauranger.get);
app.put('/api/restauranger/:id', restauranger.update);
app.delete('/api/restauranger/:id', restauranger.remove);
app.post('/api/restauranger', restauranger.create);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
