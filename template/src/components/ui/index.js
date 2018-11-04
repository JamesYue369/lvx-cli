
import Breadcrumb from './breadcrumb/index.js';
import BreadcrumbItem from './breadcrumb-item/index.js';
import Select from './select/index.js';
import Option from './option/index.js';
import Button from './button/index.js';
import Loading from './loading/index.js';
import Pagination from './pagination/index.js';
import PopoverConfirm from './popover-confirm/index.js';
const components = [
  Breadcrumb,
  BreadcrumbItem,
  Select,
  Option,
  Button,
  Pagination,
  PopoverConfirm
];
const install = function(Vue, options) {
  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$createLoading = ()=>{
    window._lvx['loading'] = Loading.service({spinnerHtml: `<img src="/static/img/loading.gif"/>`});
  };
  Vue.prototype.$closeLoading = ()=>{
    window._lvx['loading'].close();
  }
};
export default {
  version: '1.0.0',
  install,
  Breadcrumb,
  BreadcrumbItem,
  Select,
  Option,
  Button,
  Pagination,
  PopoverConfirm
}

