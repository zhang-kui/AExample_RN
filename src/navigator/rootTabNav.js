
import React, {Component} from 'react';

import { createBottomTabNavigator } from 'react-navigation'

import MainStackNav from './mainStackNav';
import MsgCenterStackNav from './msgCenterStackNav';
import UserCenterStackNav from './userCenterStackNav';

import { Icon } from 'native-base';

export class TabBarIcon extends Component {
  render() {
    return(
      <Icon name={this.props.name}
            style={{
              margin: -1,
              fontSize: 28,
              color: this.props.color,
            }}
      />
    )
  }
}

const BottomTabNavigator = createBottomTabNavigator(
  {
    MainStackNav: {
      screen: MainStackNav,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon:({focused}) => (
          <TabBarIcon
            focused={focused}
            name={'home'}
            color={focused ? 'red' : 'white'}
          />
        ),
      }
    },
    MsgCenterStackNav: {
      screen: MsgCenterStackNav,
      navigationOptions: {
        tabBarLabel: '消息',
        tabBarIcon:({focused}) => (
          <TabBarIcon
            focused={focused}
            name={'chatbubbles'}
            color={focused ? 'red' : 'white'}
          />
        )
      }
    },
    UserCenterStackNav: {
      screen: UserCenterStackNav,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon:({focused}) => (
          <TabBarIcon
            focused={focused}
            name={'person'}
            color={focused ? 'red' : 'white'}
          />
        )
      }
    },
  },
  {
    // 第一次加载时初始选项卡路由的 routeName
    initialRouteName: 'MainStackNav',
    // 定义选项卡顺序的 routeNames 数组
    order: ['MainStackNav','MsgCenterStackNav','UserCenterStackNav'],
    // tab bar的位置, 可选值： 'top' or 'bottom'
    tabBarPosition: 'bottom',
    // 是否允许滑动切换tab页
    swipeEnabled: false,
    // 是否在切换tab页时使用动画
    animationEnabled: false,
    // 是否懒加载
    lazy: false,
    // 返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
    backBehavior: 'none',
    tabBarOptions: {
      // 是否显示 Tab 的图标,默认不显示
      showIcon: true,
      // 是否显示tab bar的文本，默认是true
      showLabel: true,
      // 是否将文本转换为大小，默认是true
      upperCaseLabel: false,
      // 标签和图标选中颜色
      activeTintColor: 'red',
      // 导航选中背景色
      activeBackgroundColor: 'white',
      // 标签和图标未选中颜色
      inactiveTintColor: 'white',
      // 导航未选中背景色
      inactiveBackgroundColor: 'black',
      // 选项卡栏的样式对象
      style: {
        backgroundColor: 'black',
        height: 49,
        justifyContent: 'center',
      },
      //tab bar的文本样式
      labelStyle: {
        fontSize: 14,
        margin: 1
      },
      // tabStyle 选项卡的样式对象
    },
  }
);

export default BottomTabNavigator;
