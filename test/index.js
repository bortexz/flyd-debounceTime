var flyd = require('flyd')
var debounceTime = require('../')
var assert = require('assert')

describe('once', function () {
  it('Should push the value after time specified', function (done) {
    var stream$ = flyd.stream()
    var debounce$ = debounceTime(100, stream$)
    stream$(1)
    assert.deepEqual(debounce$(), undefined)
    setTimeout(function () {
      assert.deepEqual(debounce$(), 1)
      done()
    }, 110)

  })

  it('Should only push the last value received after "time" without values', function (done) {
    var stream$ = flyd.stream()
    var debounce$ = debounceTime(100, stream$)
    var results = []

    flyd.on(function (val) {
      results.push(val)
    }, debounce$)

    stream$(1)
    stream$(2)
    stream$(3)

    setTimeout(function () {
      assert.deepEqual(results, [3])
      done()
    }, 150)
  })
})
