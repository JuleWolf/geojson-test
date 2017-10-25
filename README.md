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
and comparable object to an epsilon and returns a promise with assert

**Parameters**

- objects of type Feature|FeatureCollection
- options of type Object

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
```

# .responseAreaEpsilon(reference)

Takes a reference object to compare the area difference between its area
and the area of the response body object of a HTTP request to an epsilon and returns a promise with assert

**Parameters**

- object of type Feature|FeatureCollection
- options of type Object

**Examples**

```javascript
// example mocha test
var reference = <anyFeature>;
describe('example test: ', function () {
  it('delta between reference and target area should not be greater than epsilon', function () {
    return request(app)
    .get('/pathToGetTarget')
    .set('Accept', 'application/json')
    .expect(200)
    .then(responseAreaEpsilon(reference));
  }); // end of it
});
```

# geojson-test
