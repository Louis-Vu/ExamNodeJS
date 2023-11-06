'use strict'
/* global describe it */
var is = global.is || require('exam-is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.getItems', function () {
  it('returns an array of items', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    var items = cache.getItems()
    is.same(items[0].value, 1)
  })

  it('is ordered by last used', function () {
    var cache = new LruCache({max: 2})
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)
    var items = cache.getItems()
    is.same(items[0].value, 3)
    is.same(items[1].value, 2)
  })
})
