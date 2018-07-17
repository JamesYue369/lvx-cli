import {detect} from 'detect-browser'
const  asyncLoadJsFile = function (url) {
    const promise = new Promise((resolve, reject) => {
        let file = document.createElement('script')
        if (file.readyState) { //ie
            file.onreadystatechange = function(){
               
                if (file.readyState === 'loaded' || file.readyState === 'complete') {
                    file.onreadystatechange = null
                    resolve()
                } 
            };
        } else { //others broswer
            file.onload = function () {
                resolve()
            }
            file.onerror = function () {
                reject('load failed')
            }
        }
        file.src = url
        let s = document.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(file, s)
    });
    return promise
}
const  asyncLoadCssFile = function (url) {
    (function (document) {
        let file = document.createElement('link')
        file.href = url
        file.type = 'text/css'
        file.rel = 'stylesheet'
        let s = document.getElementsByTagName('style')[0]
        s.parentNode.insertBefore(file, s)
    })(window.document)
}
const sleep = function (numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}
const isNotBrowser = function () {
    const [browser, browserDic] = [detect(), {
        'chrome': 31,
        'firefox':15,
        'ie': 9
    }]
    return parseInt(browser.version, 10) <= browserDic[browser.name]
}
/*
返回值：
    类型: object
    值：{
    name: 'chrome',
    version: '50.0.1',
    os: 'windows'
    }
*/
const getBrowserObject = function () {
    return detect();
}
const getBrowserVisiableSize = function () {
  return {
    wdith: document.documentElement.clientWidth || document.body.clientWidth,
    height: document.documentElement.clientHeight || document.body.clientHeight
  }
}

export {asyncLoadJsFile, asyncLoadCssFile, sleep, isNotBrowser, getBrowserObject, getBrowserVisiableSize }
