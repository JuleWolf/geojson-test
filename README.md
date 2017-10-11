# geojson-test

# .areaDifference(input1, input2)

Takes two objects of type Feature|FeatureCollection, calculates each area and returns their absolute difference

**Example**

```javascript
var area1 = turfHelpers.polygon([[
        [10.883,48.350],
        [10.918,48.350],
        [10.918,48.375],
        [10.883,48.375],
        [10.883,48.350]]]
);
var area2 = turfHelpers.polygon([[
        [10.892,48.358],
        [10.907,48.358],
        [10.907,48.368],
        [10.892,48.368],
        [10.892,48.358]]]
);
var diff = areaDifference(area1, area2);

// returns <Number>
```

# .areaEpsilon(reference)

Takes a reference object to compare the area difference between the reference
and the response.body of a HTTP request, passed via callback, to an epsilon
and returns a promise with assert

**Parameters**

- object of type Feature|FeatureCollection

**Examples**

```javascript
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
    });
```

# geojson-test
