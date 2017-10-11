var turfArea = require('turf-area');

var areaDifference = function (polygon1, polygon2) {
  var a = turfArea(polygon1);
  var b = turfArea(polygon2);
  return Math.abs(a - b);
};

module.exports = areaDifference;
