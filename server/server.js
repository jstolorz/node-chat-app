const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPatch = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPatch));

io.on('connection', (socket) => {
    console.log('New User connected');

    socket.emit('newEmail', {
        from: 'mike@example.com',
        text: 'Hey. What is going on ? ',
        createdAt: 6072018
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail: ', newEmail);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

});



server.listen(port, () => {
    console.log(`Server is up on port: ${port} `);
});

