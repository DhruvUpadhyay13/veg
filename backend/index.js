const path = require('path');
require('./models/db');
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
// var FileStore = require('session-file-store')(session);


var cookieParser = require('cookie-parser');
var session = require('express-session');





const router = require('./routes/routes');
const port = ((process.env.PORT || 8000))
const local = ((process.env.LOCALADDRESS || '0.0.0.0'))

const app = express();
app.use(bodyparser.json({ limit: '50mb' }));
app.use(cors({
    credentials: true,
    origin: true,
    host: "http://localhost:5000"

}));
//


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));
}



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:4200');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(cookieParser());

app.use('/api/dashboard', router);
app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'public/index.html'))
})

app.set('view engine', 'ejs');

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
});















app.listen(port, local, function() {
    console.log('server started at port' + port);
})