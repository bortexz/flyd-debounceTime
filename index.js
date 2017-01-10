var flyd = require('flyd')

module.exports = flyd.curryN(2, function (time, source$) {
  var timeout
  return flyd.combine(function (s$, self) {
    if (timeout) {
      clearTimeout(timeout)
    }
    setTimeout(function () {
      self(s$())
    }, time)
  }, [source$])
})
