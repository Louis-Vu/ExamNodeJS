'use strict'
/* global describe it */
var is = global.is || require('exam-is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.size', function () {
  it('starts at zero', function () {
    var cache = new LruCache()
    is(cache.size, 0)
  })

  it('increments for new items', function () {
    var cache = new LruCache()
    cache.set('a', 0)
    is(cache.size, 1)
    cache.set('a', 0)
    is(cache.size, 1)
    cache.set('b', 0)
    is(cache.size, 2)
  })

  it('supports the optional length function', function () {
    var cache = new LruCache({
      length: function (o) {
        return o.value.length
      },
      max: 10
    })
    is(cache.size, 0)
    cache.set('a', 'Hello')
    is(cache.size, 5)
    cache.set('b', 'World')
    is(cache.size, 10)
    cache.set('b', 'You')
    is(cache.size, 8)
    cache.set('c', 'Fantastic')
    is(cache.size, 9)
    cache.remove('c')
    is(cache.size, 0)
  })
})
