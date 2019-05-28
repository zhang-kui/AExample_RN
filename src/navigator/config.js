
import React from 'react';
import { StyleSheet, Platform } from 'react-native';

const defaultNavigationOptions = {
  // 定义渲染和转换的样式.
  // 1,card:使用标准的 iOS 和 Android 屏幕转换，这是默认设置;
  // 2,modal:iOS独有的使屏幕从底部画出，在 Android 上无效
  mode: 'card',
  // 返回上级页面时动画效果
  // 1,float:呈现一个位于顶部的单个页眉, 并在屏幕被更改时进行动画显示， 这是 iOS 上常见的模式
  // 2,screen:每个屏幕都有一个标头, 并且页眉随屏幕一起淡入和淡出， 这是 Android 的常见模式
  // 3,none:无动画
  headerMode: 'none',

  //  以下是用于导航器内部页面的navigationOptions:

  headerStyle: {
    backgroundColor: 'black',
    ...Platform.select({
      ios: {
        height: 44,
      },
      android: {
        height: 20 + 44,
        paddingTop: 20,
      },
    }),
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf:'center'
  },
  headerBackTitle: null,
  headerBackImage: null,
  // 是否可以使用手势关闭此页面，iOS默认支持，安卓默认关闭
  gesturesEnabled: true,

  // // 可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null
  // header: null,
  // // 设置导航栏标题
  // headerTitle: '',
  // // 在标题的后退按钮中显示自定义图片
  // headerBackImage: null,
  // // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
  // headerBackTitle: null,
  // // 设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"
  // headerTruncatedBackTitle: '返回',
  // // 在标题栏右侧展示的 React 组件
  // headerRight: null,
  // // 在标题栏左侧展示的 React 组件
  // headerLeft: null,
  // // 设置导航条的样式。背景色，宽高等
  // headerStyle: {
  //   // backgroundColor: '#f4511e',
  // },
  // // 设置导航栏文字样式
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // },
  // // 设置导航栏‘返回’文字样式
  // headerBackTitleStyle: {
  //   fontWeight: 'bold',
  // },
  // // 自定义 headerLeft 组件容器的样式，例如，增加 padding
  // headerLeftContainerStyle: {
  //   // backgroundColor: '#f4511e',
  // },
  // // 自定义 headerRight 组件容器的样式，例如，增加 padding
  // headerRightContainerStyle: {
  //   // backgroundColor: '#f4511e',
  // },
  //   // 自定义 headerTitle 组件容器的样式，例如，增加 padding
  // headerTitleContainerStyle: {
  //   // backgroundColor: '#f4511e',
  // },
  // // 设置导航栏颜色
  // headerTintColor: '#f4511e',
  // // 安卓独有的设置颜色纹理，需要安卓版本大于5.0
  // // headerPressColorAndroid: null,
  // // 标头背景是否透明
  // headerTransparent: true,
  // // 将其与 headerTransparent 一起使用, 以提供要在标头背景下呈现的组件
  // // headerBackground: null,
  // // 是否可以使用手势关闭此页面，iOS默认支持，安卓默认关闭
  // gesturesEnabled: false,
};

export {
  defaultNavigationOptions,
};
