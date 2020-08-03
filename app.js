const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 8081;
const bodyParser = require('body-parser');
const cors = require('cors');
var cookieParser = require('cookie-parser')

const multipart = require('connect-multiparty');
//require('./src/database/mongo');
app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(cookieParser())
app.get('/', function (req, res,next) {
  // Cookies that have not been signed 1
  console.log('Cookies: ', req.cookies);
  next();
})  

app.use(multipart());
app.use(bodyParser.json({ extended: true, limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.get('/',async(req,res) => {
  return res.status(200).json({
    success: true
  })
})
app.get('/test-jenkins',async(req,res) => {
  var randomNumber=Math.random().toString();
  randomNumber=randomNumber.substring(2,randomNumber.length);
  return res.status(200).cookie('PRATEEK',randomNumber).json({
    success: true
  })
})
http.listen(port, () => {
  console.log(`Dialer Login api on port: ${port}`); // eslint-disable-line
});
