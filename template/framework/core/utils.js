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
export {asyncLoadJsFile, asyncLoadCssFile, sleep}
