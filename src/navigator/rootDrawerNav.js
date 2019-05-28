import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from  'react-native';
import { createDrawerNavigator, NavigationActions } from 'react-navigation'

import RootTabNav from './rootTabNav'
import AFunction from '../views/otherFunction/aFunctionView'

class DrawerPage extends Component<Props> {
  shouldComponentUpdate() {
    return false
  }

  navigateToScreen = (route,params) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {...params},
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.closeDrawer();
  };

  cancleDrawer = () => {
    this.props.navigation.closeDrawer();
  };

  render () {
    return (
      <View style={style.rootContainer}>

        <View style={style.head}>
          <Image source={require('../../res/starry.gif')} style={{resizeMode:'contain'}} />
        </View>

        <ScrollView>
          <View>

            <TouchableOpacity onPress={this.navigateToScreen('HomePage')}>
              <View style={style.menuItem}>
                <Image source={require('../../res/icon.png')} style={style.icon}/>
                <Text style={style.textStyle}>
                  HomePage
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.navigateToScreen('AFunction', {
              param: 'DrawerPage',
            })}>
              <View style={style.menuItem}>
                <Image source={require('../../res/icon.png')} style={style.icon}/>
                <Text style={style.textStyle}>
                  AFunction
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.navigateToScreen('BFunction', {
              param: 'DrawerPage',
            })}>
              <View style={style.menuItem}>
                <Image source={require('../../res/icon.png')} style={style.icon}/>
                <Text style={style.textStyle}>
                  BFunction
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.navigateToScreen('CFunction', {
              param: 'DrawerPage',
            })}>
              <View style={style.menuItem}>
                <Image source={require('../../res/icon.png')} style={style.icon}/>
                <Text style={style.textStyle}>
                  CFunction
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.cancleDrawer()}>
              <View style={style.menuItem}>
                <Image source={require('../../res/icon.png')} style={style.icon}/>
                <Text style={style.textStyle}>
                  关闭
                </Text>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerPage.propTypes = {
  navigation: PropTypes.object
};

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  head: {
    marginTop: 44,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 15,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

const DrawerNavigator = createDrawerNavigator({
  RootTabNav,
}, {
  // 初始路由的routeName。
  initialRouteName: 'RootTabNav',
  // 设置是否响应手势
  //'unlocked'   可以通过手势和代码 打开关闭抽屉
  //'locked-closed' 抽屉关闭状态  不能通过手势打开  只能通过代码实现
  //'locked-open'  抽屉打开状态  不能通过手势关闭  只能通过代码实现
  drawerLockMode: 'locked-closed',
  // 抽屉的宽度
  drawerWidth: 300,
  // 选项是left或right。默认是left位置。
  drawerPosition: 'left',
  //启用原生动画。默认是true。
  useNativeAnimations: true,
  //使用抽屉背景获取某种颜色。默认是white。
  drawerBackgroundColor: 'black',
  contentOptions: {
    activeTintColor: 'red',
  },
  style:{
    backgroundColor: 'black',
  },
  //用于自定义
  contentComponent: DrawerPage,
});

export default DrawerNavigator;
