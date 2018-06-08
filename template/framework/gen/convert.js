const co = require('co')
function convert (mw) {
  if (typeof mw !== 'function') {
    throw new TypeError('middleware must be a function')
  }
  if (mw.constructor.name == 'GeneratorFunction') {
    return mw
  }
  const converted = function (ctx, next) {
    return co.call(ctx, mw.call(this, ctx, createGenerator(next)))
  }
  converted._name = mw._name || mw.name
  return converted
}

function * createGenerator (next) {
  return yield next()
}
export default convert