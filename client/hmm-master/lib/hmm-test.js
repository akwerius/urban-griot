var hmm = require( './lib/hmm.js' );
var milk = new hmm();
var something = [ 'white', 'bottle' ];
milk.initialize( [ something ], 2 );
console.log( 'The probability that something white in a bottle is milk is ' +  ( milk.generationProbability( something ) * 100 ) + '%.' );