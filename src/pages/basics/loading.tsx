import * as React from 'react';
import CuCustom from '@/components/Common/CuCustom';
import { View, Text, Button } from 'remax/one';
import { useDispatch } from 'react-redux'
import { setStatusLoadProgress } from '@/store/model/status'
import Switch from '@/components/CrossPlat/Switch';
import clsx from 'clsx';
export default () => {
    const dispatch = useDispatch()
    const [isLoad, setIsLoad] = React.useState(false)
    const handleSetIsLoad = React.useCallback(
      (e) => {
        setIsLoad(e.detail.value)
      },
      [isLoad],
    ) 
    

    const handleSetLoadProgress = () => {
      dispatch(setStatusLoadProgress(true))
      setTimeout(() => {
        dispatch(setStatusLoadProgress(false))
      }, 2000)
    }
 

    const backText = (<View>返回</View>)
    const children = (<View>加载</View>)
    const right = (
    <View className="action">
        <View className={clsx("cu-load load-icon", !isLoad ? 'loading':'over')}></View>
    </View>)
  return (
    <View>
      <CuCustom
        bgColor="bg-gradual-blue"
        isBack={true}
        bgImage={undefined}
        backText={backText}
        children={children}
        right={right}
      />
      <View className="cu-bar bg-white">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>背景
        </View>
      </View>
      <View
          className={clsx("cu-load bg-blue", !isLoad ? 'loading':'over')}
      ></View>
      <View className="cu-bar bg-white margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>加载状态
        </View>
        <View className="action">
          <Switch onChange={handleSetIsLoad} className={clsx('sm', isLoad ? 'checked':'')} ></Switch>
        </View>
      </View>
      <View
          className={clsx("cu-load bg-grey", !isLoad ? 'loading':'over')}
      ></View>
      
      <View className="cu-bar bg-white margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>进度条加载
        </View>
        <View className="action">
          <Button className="cu-btn bg-green shadow" onTap={handleSetLoadProgress}>
            点我
          </Button>
        </View>
      </View>
    </View>
  );
};
