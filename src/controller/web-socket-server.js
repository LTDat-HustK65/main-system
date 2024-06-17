const socketIo = require('socket.io');

let io = null;

function initWebSocketServer(app) {
    io = socketIo(app);

    // Khi có kết nối mới
    io.on('connection', (socket) => {
        console.log('Client connected');

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
}

function notifyClients(message, data) {
    io.emit(message, data);
}

module.exports = {
    initWebSocketServer,
    notifyClients
}