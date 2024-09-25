require('dotenv').config()
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');


const server = http.createServer(app);

// configuration of server
app.set('port', process.env.PORT);
app.use(morgan('dev'));

// static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname + '../../client/index.html'));

    } catch (error) {
        res.status(500).json({message : 'Error internal server'})
        console.error('Error');

    }
})

// initializations the server
server.listen(app.get('port'), function () {
    console.log(`Server listening on http://localhost:${app.get('port')}`);
})

// sockets
require('./sockets.js')(server)


