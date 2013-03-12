/**
 * Module dependencies.
 */

var express = require('express')
    , todos = require('./resources/todos')
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
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/api/todos', todos.list);
app.get('/api/todos/:id', todos.get);
app.put('/api/todos/:id', todos.update);
app.delete('/api/todos/:id', todos.remove);
app.post('/api/todos', todos.create);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
