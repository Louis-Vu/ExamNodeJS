'use strict'
/* global describe it */
var is = global.is || require('exam-is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.peek', function () {
  it('gets a cached item', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    var a = cache.peek('a')
    is(a, 1)
  })

  it('returns undefined for a non-cached item', function () {
    var cache = new LruCache()
    var a = cache.peek('a')
    is(a, undefined)
  })
})
