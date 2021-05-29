const express = require('express')
const path = require('path');
const WebSocket = require('ws'); // new
const app = express()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const port = 3000
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})
app.post('/auth', function (req, res) {
    // res.send('Got a POST request')
    var data=req.body;
    console.log('Got body:', data);
    var uuId = data.uuid;
 var accessToken = data.access_token;
 var msg = {'op':'authdone','accessToken':accessToken};
 res.send(msg);
    res.end();
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const socketServer = new WebSocket.Server({port: 3030});
socketServer.on('connection', (socketClient) => {
  console.log('connected');
  console.log('client Set length: ', socketServer.clients.size);
  socketClient.on('close', (socketClient) => {
    console.log('closed');
    console.log('Number of clients: ', socketServer.clients.size);
  });
});