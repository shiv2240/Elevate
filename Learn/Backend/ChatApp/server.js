const WebSocket = require('ws');
const express = require('express');

const app = express();

const server = app.listen(8080, () => {
  console.log('Server started on port 8080');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send('Hello! Message From Server!!');
});
