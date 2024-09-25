const io = require('socket.io');

module.exports = function (server) {

    var sockets = io.listen(server);
    sockets.on('connection', async function (socket) {
        console.log('new client connected!');

        socket.on('client', async function (data) {
            sockets.emit('server', data)

        })
    })
}

