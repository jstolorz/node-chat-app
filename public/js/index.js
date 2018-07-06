let socket = io();

socket.on('connect', () => {
    console.log('Connect to server')

    socket.emit('createEmail',{
        to: 'olo@example.com',
        text: 'Hey'
    });
});

socket.on('disconnect', () => {
    console.log('Deisconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('New Email comming: ', email);
})
