const tf = require("@tensorflow/tfjs-node");

function loadModel() {
  return tf.loadGraphModel(
    "https://storage.googleapis.com/saved-model-mlgc/model.json"
  );
}

module.exports = loadModel;
