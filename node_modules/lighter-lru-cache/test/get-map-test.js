'use strict'
/* global describe it */
var is = global.is || require('exam-is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.getMap', function () {
  it('returns a key-value map', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    var map = cache.getMap()
    is.same(map, {a: 1})
  })

  it('is ordered by last used', function () {
    var cache = new LruCache({max: 2})
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)
    var map = cache.getMap()
    is.same(map, {c: 3, b: 2})
  })
})
