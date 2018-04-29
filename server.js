import http from 'http';
import config from './config';
import express from 'express';
import apiRouter from './api';
//import fs from 'fs';


// Can be used both as a server and as a client

//https.get('https://www.lynda.com', res => {
//    console.log(res);
//})


//var server = http.createServer();

//server.listen(8080,(res) => {
//    console.log('server is listening on localhost 8080: ')
//});

//server.on('request',(req,res) => {
//    res.write('Hello Welcome to Node');
//    res.end('okay');
//});
//

var server = express();
server.set('view engine','ejs');
server.listen(config.port, () => {
     console.log('listening on port ',config.port);
});

server.get('/',(req,res) => {
    res.render('index',{
      'content': 'Hello from <em>ejs</em>!!'
    });
});

server.use('/api',apiRouter);
server.use(express.static('public'));

//server.get('/about.html', (req,res) => {
//    fs.readFile('./about.html',(err,data) => {
//       res.send(data.toString());
//    });
//});
