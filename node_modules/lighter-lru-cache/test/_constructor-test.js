'use strict'
/* global describe it */
var is = global.is || require('exam-is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache', function () {
  it('constructs a cache without options', function () {
    var cache = new LruCache()
    is.object(cache)
  })

  it('constructs a cache with a max option', function () {
    var cache = new LruCache({max: 2})
    is.object(cache)
    is(cache.max, 2)
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)
    var a = cache.get('a')
    var b = cache.get('b')
    var c = cache.get('c')
    is.undefined(a)
    is(b, 2)
    is(c, 3)
  })

  it('works without a max option', function () {
    var cache = new LruCache({})
    is.object(cache)
    is(cache.max, Infinity)
  })
})
