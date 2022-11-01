import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AliAppConfig } from 'remax/ali';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';

const pages = [
  'pages/index/index',
  'pages/checkbox/index',
  'pages/component/index',
  'pages/plugin/index',
  'pages/basics/home',
  'pages/basics/loading'
];
const title = '愿景娱乐';

export const ali: AliAppConfig = {
  pages,
  window: {
    defaultTitle: title,
    titleBarColor: '#282c34'
  }
};

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: '#39b54a',
    navigationStyle: 'custom',
    navigationBarTextStyle: 'white'
  }
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: '#39b54a',
    navigationStyle: 'custom',
    navigationBarTextStyle: 'white'
  }
};
