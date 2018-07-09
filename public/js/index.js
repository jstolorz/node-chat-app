let socket = io();

socket.on('connect', () => {
    console.log('Connect to server')


});

socket.on('disconnect', () => {
    console.log('Deisconnected from server');
});

socket.on('newMessage', function (message) {
   console.log(message);
});

