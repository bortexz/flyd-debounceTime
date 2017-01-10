# flyd-debounceTime
[![Build Status](https://travis-ci.org/bertofer/flyd-once.svg?branch=master)](https://travis-ci.org/bertofer/flyd-once)

debounceTime implementation for flyd streams. Similar to [flyd-aftersilence](https://github.com/paldepind/flyd/tree/master/module/aftersilence), but it only emits the last value received.

## Usage
```javascript
var stream$ = flyd.stream()
var once$ = once(stream$)
var result = []
flyd.on(function (val) {
  result.push(val)
}, once$)

stream$(1)
stream$(2)

assert.deepEqual(result.length, 1)
assert.deepEqual(result, [1])
```