import PopoverConfirm from './src/confirm';

/* istanbul ignore next */
PopoverConfirm.install = function(Vue) {
  Vue.component(PopoverConfirm.name, PopoverConfirm);
};

export default PopoverConfirm;
