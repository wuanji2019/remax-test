import * as React from 'react';
import { View, Image, Navigator, Text } from 'remax/one';
import ScrollView from '@/components/CrossPlat/ScrollView';
import clsx from 'clsx';

export default () => { 
  	const elements = [
		{
			title: '布局',
			name: 'layout',
			color: 'cyan',
			cuIcon: 'newsfill'
		},
		{
			title: '背景',
			name: 'background',
			color: 'blue',
			cuIcon: 'colorlens'
		},
		{
			title: '文本',
			name: 'text',
			color: 'purple',
			cuIcon: 'font'
		},
		{
			title: '图标 ',
			name: 'icon',
			color: 'mauve',
			cuIcon: 'cuIcon'
		},
		{
			title: '按钮',
			name: 'button',
			color: 'pink',
			cuIcon: 'btn'
		},
		{
			title: '标签',
			name: 'tag',
			color: 'brown',
			cuIcon: 'tagfill'
		},
		{
			title: '头像',
			name: 'avatar',
			color: 'red',
			cuIcon: 'myfill'
		},
		{
			title: '进度条',
			name: 'progress',
			color: 'orange',
			cuIcon: 'icloading'
		},
		{
			title: '边框阴影',
			name: 'shadow',
			color: 'olive',
			cuIcon: 'copy'
		},
		{
			title: '加载',
			name: 'loading',
			color: 'green',
			cuIcon: 'loading2'
		}
	]

  return (
	<>
    <View> 
		<ScrollView scroll-y className="page">
			<Image 
				src="https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358228-assets/web-upload/e256b4ce-d9a4-488b-8da2-032747213982.png"
			 	mode="widthFix" className="response"></Image>
			<View className="nav-list">
				{ elements.map((item, index) => (
					<Navigator
						hover-class="none"
						key={index}
						wechat-navigateTo={true}
						url={'/pages/basics/' + item.name}
						className={clsx('nav-li', 'bg-' + item.color)}
						style={{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }} action={'navigate'}
					>
						<View className="nav-title">{item.title}</View>
						<View className="nav-name">{item.name}</View>
						<Text className={'cuIcon-' + item.cuIcon}></Text>
					</Navigator>
				)) } 
			</View>
			<View className="cu-tabbar-height"></View>
		</ScrollView>
    </View>
	</>
  );
};
