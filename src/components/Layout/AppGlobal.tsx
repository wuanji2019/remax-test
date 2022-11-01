import * as React from 'react';
import { useAppEvent } from 'remax/macro';
import useCuCustom from '@/hooks/useCuCustom';
import second from '@/components/Common/LoadProgress'

export default ({ children }: {children: React.ReactElement}) => {
    const { setGlobalData } = useCuCustom()
  useAppEvent('onLaunch', () => {
    console.log('App Launch');
    setGlobalData();
  });

  useAppEvent('onShow', () => {
    console.log('App Show');
  });
  useAppEvent('onHide', () => {
    console.log('App Hide');
  });

  useAppEvent('onError', () => {
    console.log('App Error');
  });
  return (
    <>
    { children }
    </>
  );
};
