'use strict'
/* global describe it */
var is = global.is || require('exam-is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.set', function () {
  it('sets a cached item', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    var a = cache.get('a')
    is(a, 1)
  })

  it('resets cached items', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)
    cache.set('a', 4)
    var o = cache.getMap()
    is.same(o, {a: 4, c: 3, b: 2})
  })
})
