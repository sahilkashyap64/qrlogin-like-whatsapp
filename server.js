const express = require('express')

const app = express()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
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