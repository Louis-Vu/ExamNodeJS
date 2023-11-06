global.bench = global.bench || function () {}
global.is = global.is || require('exam/package/is')

var packages = module.exports = {
  'lighter-lru-cache': require('../lighter-lru-cache'),
  'lru-cache': require('lru-cache'),
  'simple-lru-cache': require('simple-lru-cache')
}

Object.defineProperty(packages, 'forEach', {
  enumerable: false,
  value: function (fn) {
    for (var name in packages) {
      fn(name, packages[name])
    }
  }
})
