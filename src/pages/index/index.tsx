import styles from './index.less';
import * as React from 'react';
import Basics from '../basics/home'
import Casics from '../component'
import Pasics from '../plugin'

import clsx from 'clsx';
import { View, Image } from 'remax/one';
import { usePageEvent } from 'remax/macro';
export default () => {
  usePageEvent('onLoad', () => {
  }); 

  const [pageCur, setPageCur] = React.useState('basics')
  const handleSetPageCur = React.useCallback(
    (v) => {
      setPageCur(v)
    },
    [],
  )
  
  return (
    <>
    { pageCur === 'basics' && <Basics></Basics> }
    { pageCur === 'component' && <Casics></Casics> }
    { pageCur === 'plugin' && <Pasics></Pasics> }
    <View className={clsx('cu-bar', 'tabbar', 'bg-white', 'shadow', 'foot')}> 
      <View className='action' data-cur="basics" onTap={() => handleSetPageCur("basics")}>
        <View className='cuIcon-cu-image' >
          <Image src={pageCur === 'basics' ? '/images/tabbar/basics_cur.png' : '/images/tabbar/basics.png'}></Image>
        </View>
        <View  className={pageCur === 'basics'?'text-green':'text-gray'}>元素</View>
      </View>
      <View className='action' data-cur="component" onTap={() => handleSetPageCur("component")}>
        <View className='cuIcon-cu-image'>
          <Image src={pageCur === 'component' ? '/images/tabbar/component_cur.png' : '/images/tabbar/component.png' }></Image>
        </View>
        <View  className={pageCur === 'component'?'text-green':'text-gray'}>组件</View>
      </View>
      <View className='action' data-cur="plugin" onTap={() => handleSetPageCur("plugin")}>
        <View className='cuIcon-cu-image'>
          <Image src={pageCur === 'plugin' ? '/images/tabbar/plugin_cur.png' : '/images/tabbar/plugin.png'}></Image>
        </View>
        <View  className={pageCur=='plugin'?'text-green':'text-gray'}>扩展</View>
      </View>
    </View>
    </>
  );
};
