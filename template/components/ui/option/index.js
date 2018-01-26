import SasOption from '../select/src/option';

/* istanbul ignore next */
SasOption.install = function(Vue) {
  Vue.component(SasOption.name, SasOption);
};

export default SasOption;
