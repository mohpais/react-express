const http = require('http');

const app = require('./app');
const config = require('./conf');
const port = config.port;

const server = http.createServer(app);
server.listen(port)

console.log('Server is running on:' + port);