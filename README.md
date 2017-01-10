# flyd-debounceTime
[![Build Status](https://travis-ci.org/bertofer/flyd-once.svg?branch=master)](https://travis-ci.org/bertofer/flyd-once)

debounceTime implementation for flyd streams. Similar to [flyd-aftersilence](https://github.com/paldepind/flyd/tree/master/module/aftersilence), but it only emits the last value received.

## Usage
```javascript
var stream$ = flyd.stream()
var debounce$ = debounceTime(500, stream$)

stream$(1)
assert.deepEqual(debounce$(), undefined)
stream$(2)
stream$(3)
assert.deepEqual(debounce$(), undefined)

setTimeout(function () {
  assert.deepEqual(debounce$(), 3)
  done()
}, 550)
```