import '@/assets/css/index';
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppGlobal from '@/components/Layout/AppGlobal';

const App = ({ children }: {children: React.ReactElement}) => {
  return <Provider store={store}><AppGlobal children={children} /></Provider>;
};

export default App;
