require('dotenv').config();
const http = require('node:http');
const path = require('node:path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const { default: rateLimit } = require('express-rate-limit');


const server = http.createServer(app);

// configuration of server
app.set('port', process.env.PORT);
app.use(morgan('dev'));

// static files
app.use(express.static(path.join(__dirname, '..' ,'public')));
app.use(express.static(path.join(__dirname, '..' ,'client')));

// middlewares 
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute 
    max: 150, // limit each ip to 150 request
    message: 'Request limit exceeded'
});

app.use(limiter);

app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname , '..','..','client/index.html'));

    } catch (error) {
        return res.status(500).json({ message: 'Error internal server, error show page' });

    }
})

// initializations the server
server.listen(app.get('port'), function () {
    console.log(`Server listening on http://localhost:${app.get('port')}`);
})

// sockets
require('./sockets.js')(server);


