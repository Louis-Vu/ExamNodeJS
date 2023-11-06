'use strict'
/* global describe it is */
var rel = '../lighter-lru-cache'
var shared = require(rel).shared

describe('LruCache.shared', function () {
  it('exists', function () {
    is(process._lighterSharedLruCache, shared)
  })

  it('persists', function () {
    shared.set('a', 1)
    var path = require.resolve(rel)
    delete require.cache[path]
    shared = require(rel).shared
    var a = shared.get('a')
    is(a, 1)
  })
})
