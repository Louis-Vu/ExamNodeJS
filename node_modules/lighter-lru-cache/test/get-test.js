'use strict'
/* global describe it */
var is = global.is || require('exam-is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.get', function () {
  it('gets a cached item', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    var a = cache.get('a')
    is(a, 1)
  })

  it('returns undefined for a non-cached item', function () {
    var cache = new LruCache()
    var a = cache.get('a')
    is(a, undefined)
  })

  it('moves an item to the head of the loop', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    cache.set('b', 2)
    var a = cache.getValues()
    is.same(a, [2, 1])
  })
})
