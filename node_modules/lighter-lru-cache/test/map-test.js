'use strict'
/* global describe it */
var is = global.is || require('exam-is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.map', function () {
  it('exposes the map of items', function () {
    var cache = new LruCache()
    is.same(cache.map, {})
  })

  it('gets new items', function () {
    var cache = new LruCache()
    cache.set('abc', 123)
    is(cache.map.abc.value, 123)
  })
})
