const {
  joinRoomHandler,
  chatHandler,
  leaveRoomHandler,
} = require('./socket.controllers.js');

exports.ioEvents = async (socket, server) => {
  socket.on('joinRoom', async ({ userID, roomID }) => {
    joinRoomHandler(socket, server, userID, roomID);
  });

  socket.on('chat-message', ({ roomID, sender, content, time }) => {
    chatHandler(server, roomID, sender, content, time);
  });

  socket.on('disconnect', () => {
    leaveRoomHandler(socket, server);
  });
};
