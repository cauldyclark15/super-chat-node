const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 1515;
const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log(`new user connected`);

  socket.on('createMessage', (newMessage) => {
    io.emit('newMessage', {
      from: newMessage.from,
      text: newMessage.text,
      sent: new Date().toISOString()
    });

    // console.log('createEmail', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('disconnected from client');
  });
})

app.use(express.static(publicPath));
server.listen(port, () => {
  console.log(`server running at port: ${port}`);
})