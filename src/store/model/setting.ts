import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export type colorListType = {
    title: string;
    name: string;
    color: string
}

export interface settingState {
    colorList: colorListType[];
    statusBar: number;
    custom: any;
    customBar: number;
}

const initialState: settingState = {
    colorList: [{
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#39b54a'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      },
    ],
    statusBar: 0,
    custom: {},
    customBar: 0
};

export const SETTING_FEATURE_KEY = 'setting';

const { reducer: settingReducer, actions } = createSlice({
  name: SETTING_FEATURE_KEY,
  initialState,
  reducers: {
    setStatusBar(state, action: PayloadAction<number>) {
        state.statusBar = action.payload;
    },
    setCustom(state, action: PayloadAction<any>) {
        state.custom = action.payload;
    },
    setCustomBar(state, action: PayloadAction<number>) {
        state.customBar = action.payload;
    }
  }
});

export const { setStatusBar, setCustom, setCustomBar } = actions;

export default settingReducer;
