const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

console.log("Wouldn't you like to be a Pepper, too?");

app.use(express.static(__dirname + "/public"));


function onConnection(inSocket)
{
    console.log("Howdy, Socket: " + inSocket.id);

    inSocket.on('drawing', (data) => inSocket.broadcast.emit('drawing', data));

}

io.on('connectio', onConnection);

http.listen(3000, () => console.log("I am alive..."))