/* global it, describe */

var turfHelpers = require('turf-helpers');
var assert = require('assert');
var areaDifference = require('../index').areaDifference;
var areaEpsilon = require('../index').areaEpsilon;

describe('geojson-test functions', function () {
  describe('.areaDifference', function () {
    it('should calculate the area difference of two polygons in square meters', function () {
      var area1 = turfHelpers.polygon([[
        [10.883, 48.350],
        [10.918, 48.350],
        [10.918, 48.375],
        [10.883, 48.375],
        [10.883, 48.350]]]
      );
      var area2 = turfHelpers.polygon([[
        [10.892, 48.358],
        [10.907, 48.358],
        [10.907, 48.368],
        [10.892, 48.368],
        [10.892, 48.358]]]
      );
      var diff = areaDifference(area1, area2);

      assert.equal(diff, 5969267.814694065);
    }); // end of it
  });

  describe('.areaEpsilon', function () {
    it('should compare the area difference to a passed epsilon', function () {
      var reference = turfHelpers.polygon([[
        [10.884,48.353],
        [10.915,48.353],
        [10.915,48.373],
        [10.884,48.373],
        [10.884,48.353]]]
      );
      var compare = turfHelpers.polygon([[
        [10.885,48.353],
        [10.915,48.353],
        [10.915,48.373],
        [10.885,48.373],
        [10.885,48.353]]]
      );
      var options = {
        epsilon: 170000
      };

      return areaEpsilon(reference, compare, options);
    }); // end of it

    it('should compare the area difference to passed epsilonPercentage * area(reference)', function () {
      var reference = turfHelpers.polygon([[
        [10.884,48.353],
        [10.915,48.353],
        [10.915,48.373],
        [10.884,48.373],
        [10.884,48.353]]]
      );
      var compare = turfHelpers.polygon([[
        [10.885,48.353],
        [10.915,48.353],
        [10.915,48.373],
        [10.885,48.373],
        [10.885,48.353]]]
      );
      var options = {
        epsilonPercentage: 0.05
      };

      return areaEpsilon(reference, compare, options);
    }); // end of it
  });
});
