var express = require('express');
var app = express();
var server4 = require('http').createServer(app);
var server3 = require('http').createServer(app);
var server2 = require('http').createServer(app);
var server1 = require('http').createServer(app);
var server = require('http').createServer(app);

var io = require('socket.io').listen(server);
var io1 = require('socket.io').listen(server1);
var io2 = require('socket.io').listen(server2);
var io3 = require('socket.io').listen(server3);
var io4 = require('socket.io').listen(server4);

users = [];
connections = [];

server.listen(process.env.PORT || 3000);
server1.listen(process.env.PORT || 3001);
server2.listen(process.env.PORT || 3002);
server3.listen(process.env.PORT || 3003);
server4.listen(process.env.PORT || 3004);

console.log('Server Running...');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', function(data) {
        users.splice(users.indexOf(socket.username), 1);
        updateUsername();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected %s sockets connected', connections.length);
    });

    // Send Message
    socket.on('send message', function(data) {
        io.sockets.emit('new message', { msg: data, user: socket.username });

    });

    //New User
    socket.on('new user', function(data, callback) {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsername();
    });

    function updateUsername() {
        io.sockets.emit('get users', users);
    }
});

io1.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', function(data) {
        users.splice(users.indexOf(socket.username), 1);
        updateUsername();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected %s sockets connected', connections.length);
    });

    // Send Message
    socket.on('send message', function(data) {
        io1.sockets.emit('new message', { msg: data, user: socket.username });

    });

    //New User
    socket.on('new user', function(data, callback) {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsername();
    });

    function updateUsername() {
        io1.sockets.emit('get users', users);
    }
});

io2.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', function(data) {
        users.splice(users.indexOf(socket.username), 1);
        updateUsername();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected %s sockets connected', connections.length);
    });

    // Send Message
    socket.on('send message', function(data) {
        io2.sockets.emit('new message', { msg: data, user: socket.username });

    });

    //New User
    socket.on('new user', function(data, callback) {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsername();
    });

    function updateUsername() {
        io2.sockets.emit('get users', users);
    }
});


io3.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', function(data) {
        users.splice(users.indexOf(socket.username), 1);
        updateUsername();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected %s sockets connected', connections.length);
    });

    // Send Message
    socket.on('send message', function(data) {
        io3.sockets.emit('new message', { msg: data, user: socket.username });

    });

    //New User
    socket.on('new user', function(data, callback) {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsername();
    });

    function updateUsername() {
        io3.sockets.emit('get users', users);
    }
});



io4.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', function(data) {
        users.splice(users.indexOf(socket.username), 1);
        updateUsername();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected %s sockets connected', connections.length);
    });

    // Send Message
    socket.on('send message', function(data) {
        io4.sockets.emit('new message', { msg: data, user: socket.username });

    });

    //New User
    socket.on('new user', function(data, callback) {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsername();
    });

    function updateUsername() {
        io4.sockets.emit('get users', users);
    }
});