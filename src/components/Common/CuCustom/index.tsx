import * as React from 'react';
import { useSelector } from 'react-redux';
import { SETTING_FEATURE_KEY } from '@/store/model/setting';
import { View, Text, navigateBack, reLaunch } from 'remax/one';
import clsx from 'clsx';

export type cuCustomType = {
  bgColor?: string;
  isCustom?: Boolean | string;
  isBack?: Boolean | string;
  bgImage?: String;
  backText?: JSX.Element;
  children: JSX.Element;
  right?: JSX.Element;
};

export default (props: cuCustomType) => {
  const { bgColor, isCustom, isBack, bgImage, backText, children, right } =
    props;
  const { statusBar, customBar } = useSelector(
    (state: any) => state[SETTING_FEATURE_KEY]
  );

  const style = React.useMemo(() => {
    const style = {
      height: `${customBar}PX`,
      paddingTop: `${statusBar}PX`,
    }
    return bgImage ? {
      ...style,
      background: bgImage
    }: style
  }, [customBar, statusBar, bgImage])
  const backPage = () => {
    navigateBack({ delta: 1 });
  };
  const toHome = () => {
    reLaunch({ url: '/pages/index/index' });
  };
  return  process.env.REMAX_PLATFORM !== 'toutiao' ? (<View className="cu-custom" style={{height: customBar + 'PX' }}>
      <View
        className={clsx(
          'cu-bar',
          'fixed',
          { 'none-bg text-white bg-img': bgImage },
          bgColor
        )}
        style={{
          height: `${customBar}PX`,
          paddingTop: `${statusBar}PX`,
          backgroundImage: bgImage ? `url(${bgImage})` : ''
        }}
      >
        {isBack && (
          <View className="action" onTap={backPage}>
            <Text className="cuIcon-back"></Text>
            {backText}
          </View>
        )}

        {isCustom && (
          <View className="action" onTap={backPage}>
            <Text className="cuIcon-back"></Text>
            <Text className="cuIcon-homefill" onTap={toHome}></Text>
          </View>
        )}
        <View className="content" style={{ top: statusBar + 'PX' }}>
          {children}
        </View>
        {right}
      </View>
    </View>
  ) : null
};
