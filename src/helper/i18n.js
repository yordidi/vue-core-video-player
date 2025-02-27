import zhCNLocale from '../lang/zh-cn.json'
import enLocale from '../lang/en.json'
import jpLocale from '../lang/jp.json'

const globalLocale = {
  'zh-CN': zhCNLocale,
  'jp': jpLocale,
  'en': enLocale
}
/*
 * 2个作用，一个设置lang，一个根据expression查寻可供替换的lang文件
 **/
const i18n = {
  t: (keyStr, defaultVal) => {
    const keys = keyStr.split('.')
    const length = keys.length
    let last = i18n.locale
    for (let i = 0; i < length; i++) {
      // 判断实例上是否存在某个属性
      if (last.hasOwnProperty(keys[i])) {
        last = last[keys[i]]
      }
    }
    return last || defaultVal
  },
  setLocale: (lang) => {
    if (typeof lang === 'object') {
      i18n.locale = lang
    } else {
      i18n.locale = globalLocale[lang || 'en']
    }
    return i18n.locale
  }
}

export default i18n
