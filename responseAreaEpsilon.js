var turfArea = require('turf-area');
var assert = require('assert');
var areaDifference = require('./areaDifference');

var responseAreaEpsilon = function (reference, options) {
  options = options || {};
  options.statusCode = options.statusCode || 200;
  options.epsilonPercentage = options.epsilonPercentage || 0.01;
  options.epsilon = options.epsilon || turfArea(reference) * options.epsilonPercentage;

  return function (res) {
    var diff = areaDifference(reference, res.body);
    var expected = diff < options.epsilon;

    assert.equal(res.status, options.statusCode);
    return assert.equal(expected, true, 'Difference is too high');
  };
};

module.exports = responseAreaEpsilon;
