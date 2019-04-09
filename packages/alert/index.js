/*
  说明：
    alert组件就是一个简单的提示弹窗，
    仅有文字内容，显示指定时间后自动消失
*/

import Vue from 'vue';
import alert from './app';

let timer;
let instance;

const initInstance = () => {
  instance = new (Vue.extend(alert))({
    el: document.createElement('div')
  });

  document.body.appendChild(instance.$el);
};
//支持只传msg这个字符串的情况
const parseOptions = message => {
  if(typeof message !== 'object' && message !== null) {
    return { message }
  }else {
    return message
  }
}

const defaultOptions = {
  value: true,
  message: '',//[String, Number]//要显示的文案
  duration: 2000//Number 显示的时长 ms
}

const Alert = (options = {}) => {
  //处理返回数据格式
  options = parseOptions(options);
  //合并覆盖 默认参数
  options = Object.assign(defaultOptions, options);
  //判定是否初始化实例
  if (!instance) {
    initInstance();
  }
  //合并options
  Object.assign(instance, options);

  clearTimeout(timer);

  if (options.duration > 0) {
    timer = setTimeout(Alert.clear, options.duration);
  }

  return instance;
};

Alert.clear = () => {
  if (instance) {
    instance.value = false;
  }
};

Alert.install = () => {
  Vue.use(alert);
};

Vue.prototype.$alert = Alert;

export default Alert;
