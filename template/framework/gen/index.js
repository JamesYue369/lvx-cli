
import isGeneratorFunction from 'is-generator-function'
import convert from './convert'


export default  class Application {
  /**
   * Initialize a new `Application`.
   *
   * @api public
   */

  constructor() {
    this.middleware = [];
  }
  /**
   * Use the given middleware `fn`.
   *
   * Old-style middleware will be converted.
   *
   * @param {Function} fn
   * @return {Application} self
   * @api public
   */

  use(fn) {
    if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');
    if (!isGeneratorFunction(fn)) {
      fn = convert(fn);
    }
    this.middleware.push(fn);
    return this;
  }
};
