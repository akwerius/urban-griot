const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

var hmm = require( './hmm.js' );
var milk = new hmm();
var something = [ 'white', 'bottle' ];
milk.initialize( [ something ], 2 );
console.log( 'The probability that something green in a bottle is milk is ' +  ( milk.generationProbability( something ) * 100 ) + '%.' );


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
