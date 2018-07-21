
import Breadcrumb from './breadcrumb/index.js';
import BreadcrumbItem from './breadcrumb-item/index.js';
import Select from './select/index.js';
import Option from './option/index.js';
import Button from './button/index.js';
import Loading from './loading/index.js';
const components = [
  Breadcrumb,
  BreadcrumbItem,
  Select,
  Option,
  Button
];
const install = function(Vue, options) {
  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$createLoading = Loading.service
};
export default {
  version: '1.0.0',
  install,
  Breadcrumb,
  BreadcrumbItem,
  Select,
  Option,
  Button
}

