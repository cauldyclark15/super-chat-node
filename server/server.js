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
  console.log(`new user connected: ${socket}`);

  socket.on('disconnect', () => {
    console.log('disconnected from client');
  })
})

app.use(express.static(publicPath));
server.listen(port, () => {
  console.log(`server running at port: ${port}`);
})