'use strict'
/* global describe it */
var is = global.is || require('exam-is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.forEach', function () {
  it('iterates over items', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    cache.set('b', 2)
    var s = ''
    var n = 0
    cache.forEach(function (value, key, object) {
      is(object, cache)
      s += key
      n += value
    })
    is(s, 'ba')
    is(n, 3)
  })
})
