import Vue from 'vue';
const service = function ({background = 'rgba(255,255,255,0)', spinnerText} = {}) {
  	let loadOptions = {
  		background: background,
  	}
  	if (spinnerText) {
  		loadOptions = Object.assign(loadOptions, {
  			lock: true,
			spinnerHtml: `
				<span>${spinnerText}</span>
				<div class="one spinner-cell"></div>
				<div class="two spinner-cell"></div>
				<div class="three spinner-cell"></div>
			`,
			spinnerClass: 'sas-loading-spinner',
			background: 'rgba(198, 198, 198, 0.3)'
  		})
  	}
    return Vue.prototype.$loading(loadOptions)
}
export default service;