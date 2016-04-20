var synaptic = require('synaptic');

function Perceptron(input, hidden, output)
{
    // create the layers
    var inputLayer = new synaptic.Layer(input);
    var hiddenLayer = new synaptic.Layer(hidden);
    var outputLayer = new synaptic.Layer(output);

    // connect the layers
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    // set the layers
    this.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
}

// extend the prototype chain
Perceptron.prototype = new synaptic.Network();
Perceptron.prototype.constructor = Perceptron;

module.exports = Perceptron;