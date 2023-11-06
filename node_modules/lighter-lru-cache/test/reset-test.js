'use strict'
/* global describe it */
var is = global.is || require('exam-is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.reset', function () {
  it('removes all cached items', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    var a = cache.get('a')
    cache.reset()
    a = cache.get('a')
    is.undefined(a)
  })

  it('resets the size to zero', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    cache.reset()
    is(cache.size, 0)
  })
})
