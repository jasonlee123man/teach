// 引入基础组件
import React,{Component} from 'react';
import {View,Text} from 'react-native'

// 引入路由组件
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";

// 引入icon组件
import Icon from 'react-native-vector-icons/Ionicons'; 

// 引入业务组价
import Home  from './component/home';
import Cate  from './component/cate';
import Desc  from './component/desc';

// 引入个人中心组建
import User from './component/user'




// 创建谜语路由组
 const HomeNavigator = createStackNavigator({
     HomeRouter:Home, 
     CateRouter:Cate,
     DescRouter:Desc,
 })

// 创建个人中心路由组
 const UserNavigator = createStackNavigator({
     UserRouter:User
 })



// 导出包含路由的app容器
export default createAppContainer(createBottomTabNavigator(
	{
		//   菜单名：路由组名字
		Home:HomeNavigator,
		User:UserNavigator
	},
	{
		initialRouteName: 'Home',   //默认路由的名字 一般为首页
		//主要配置选项卡图标
		defaultNavigationOptions: ({ navigation }) => ({
			// tabBarVisible: true, // true或false用于显示或隐藏标签栏，如果未设置，则默认为true
			// 在谜语分类页面(index :1)和谜语详情页面(index:2)不展示tabbar
			tabBarVisible: navigation.state.index == 1 || navigation.state.index ==2 ? false : true, // true或false用于显示或隐藏标签栏，如果未设置，则默认为true
				//选项卡 自定义图标
				tabBarIcon: ({ focused }) => {
				// console.log(navigation.state)
				const { routeName } = navigation.state; //获取选项卡名称
				// console.log(focused); // 是否处于活动状态,是为true
				// 设置icon默认名称
				let iconName="";
				if(routeName == 'Home'){
					iconName = 'ios-home'
				}else{
					iconName = 'ios-contact'
				}
				return <Icon name={iconName} size={30} color={focused ? '#f00' : '#DDD'}  />
			}
		}),
		//配置选项卡栏
		tabBarOptions: {
			//当前选中的tabbar的文本颜色
			activeTintColor: '#f00',
			//当前未选中的tab bar的文本颜色
			inactiveTintColor: '#DDD',
			// 活动标签的背景颜色。
			// activeBackgroundColor:'yellow',
			//  非活动标签的背景颜色。
			// inactiveBackgroundColor :'white',
			//是否显示tabbar的图标，默认是false
			showIcon:true,
			//是否显示tab bar的文本 ，默认是true
			showLabel:true,
			
			//设置tab上字体大小(选项卡标签文本的默认样式)
			labelStyle: {
				fontSize: 10,
			},
			//选项卡的默认样式
			tabStyle: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}, 
			//选项卡栏的默认样式
			style: {
				backgroundColor:'white',//注意此选项和活动标签背景色只能配置一个
				borderTopWidth:1,
				borderColor:'#2196F3',
				height:50,
			}
		},
	}
  ));
  