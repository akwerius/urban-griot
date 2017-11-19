<template>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Urban Griots!'
    }
  }
}
</script>
<script>
var Hmm = require('../../hmm-master/lib/hmm.js')
var letterModel = new Hmm()

var TONE = 1
var SLAP = 2
var BASS = 3

var A = [TONE, SLAP, BASS, BASS]
var B = [SLAP, TONE, TONE, TONE]
var C = [SLAP, TONE, SLAP, TONE]
var D = [SLAP, TONE, TONE, BASS]
var E = [TONE, BASS, BASS, BASS]
var F = [TONE, TONE, SLAP, TONE]
var G = [SLAP, SLAP, TONE, BASS]
var H = [TONE, TONE, TONE, TONE]
var I = [TONE, TONE, BASS, BASS]
var J = [TONE, SLAP, SLAP, SLAP]
var K = [SLAP, TONE, SLAP, BASS]
var L = [TONE, SLAP, TONE, TONE]
var M = [SLAP, SLAP, BASS, BASS]
var N = [SLAP, TONE, BASS, BASS]
var O = [SLAP, SLAP, SLAP, BASS]
var P = [TONE, SLAP, TONE, SLAP]
var Q = [SLAP, SLAP, TONE, SLAP]
var R = [TONE, SLAP, TONE, BASS]
var S = [TONE, TONE, TONE, BASS]
var T = [SLAP, BASS, BASS, BASS]
var U = [TONE, TONE, SLAP, BASS]
var V = [TONE, TONE, TONE, SLAP]
var W = [TONE, SLAP, SLAP, BASS]
var X = [SLAP, TONE, TONE, SLAP]
var Y = [SLAP, TONE, SLAP, SLAP]
var Z = [SLAP, SLAP, TONE, TONE]
var something = [TONE, BASS, BASS, BASS]

letterModel.initialize([A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z], 4)
letterModel.print()
var result = (letterModel.generationProbability(something) * 100)
console.log(result + '%')
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
