
import isGeneratorFunction from 'is-generator-function'
import convert from './convert'
export default  class {
  constructor() {
    this.middleware = [];
  }
  use(fn) {
    if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');
    if (!isGeneratorFunction(fn)) {
      fn = convert(fn);
    }
    this.middleware.push(fn);
    return this;
  }
};
