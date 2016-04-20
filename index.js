var synaptic = require('synaptic');
var assert = require('assert');
var binary = require('./binary');
var trainingSet = require('./trainingSet');
var Perceptron = require('./perceptron');

var myPerceptron = new Perceptron(8, 64, 8);
var myTrainer = new synaptic.Trainer(myPerceptron);

myTrainer.train(trainingSet, {
    rate: .1,
    iterations: 100000,
    shuffle: true,
    cost: synaptic.Trainer.cost.CROSS_ENTROPY,
    log: 100
});

assert.equal(binary.parse(myPerceptron.activate(binary.fromNumber(7, 4).concat(binary.fromNumber(12, 4)))), 19);
assert.equal(binary.parse(myPerceptron.activate(binary.fromNumber(9, 4).concat(binary.fromNumber(4, 4)))), 13);
assert.equal(binary.parse(myPerceptron.activate(binary.fromNumber(1, 4).concat(binary.fromNumber(15, 4)))), 16);
assert.equal(binary.parse(myPerceptron.activate(binary.fromNumber(2, 4).concat(binary.fromNumber(0, 4)))), 2);
assert.equal(binary.parse(myPerceptron.activate(binary.fromNumber(15, 4).concat(binary.fromNumber(15, 4)))), 30);
