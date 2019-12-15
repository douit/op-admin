import zh from './zh.js'
import en from './en.js'

const install = (Vue) => {
    Object.defineProperty(Vue.prototype,'$lang',{
        get() {
            return {
                zh,
                en
            } // 可以是一个对象或方法
        }
    })
}

export default install
