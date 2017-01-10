var flyd = require('flyd')
var debounceTime = require('../')
var assert = require('assert')

describe('once', function () {
  it('Should only be executed after debounceTime without new values', function (done) {
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
  })
})
