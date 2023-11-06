'use strict'
/* global describe it */
var is = global.is || require('exam-is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.getValues', function () {
  it('returns an array of values', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    var keys = cache.getValues()
    is.same(keys, [1])
  })

  it('is ordered by last used', function () {
    var cache = new LruCache({max: 2})
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)
    var keys = cache.getValues()
    is.same(keys, [3, 2])
  })
})
