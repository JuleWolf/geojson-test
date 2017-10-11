var turfArea = require('turf-area');
var assert = require('assert');
var areaDifference = require('./areaDifference');

var areaEpsilon = function (reference, compare, options) {
  options = options || {};
  options.statusCode = options.statusCode || 200;
  options.epsilonPercentage = options.epsilonPercentage || 0.01;
  options.epsilon = options.epsilon || turfArea(reference) * options.epsilonPercentage;

  var diff = areaDifference(reference, compare);
  var expected = diff < options.epsilon;

  return assert.equal(expected, true, 'Difference is too high');
};

module.exports = areaEpsilon;
