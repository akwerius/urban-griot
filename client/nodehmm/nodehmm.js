<script>
var TONE = 1
var SLAP = 2
var BASS = 3
var states = ['Tone', 'Slap', 'Bass']
var finalState = 'Final'

var Hmm = require('../../nodehmm/index.js')

var letterModel = new Hmm.Model()

letterModel.setStatesSize(states.length)
letterModel.setObservationsSize(4)
letterModel.setStartProbability([0.5, 0.5, 0])
letterModel.setTransitionProbability([
[0.33, 0.33, 0.33],
[0.33, 0.33, 0.33],
[0.33, 0.33, 0.33]
])
letterModel.setEmissionProbability([
[0.5, 0.5, 0.46, 0.23],
[0.5, 0.42, 0.3, 0.23],
[0, 0.08, 0.24, 0.54]
])

var result = Hmm.viterbi(letterModel, [TONE, SLAP, BASS, BASS])
console.log(result)
result = result.map(function (r) { return states[r] })
console.log(result)
</script>
