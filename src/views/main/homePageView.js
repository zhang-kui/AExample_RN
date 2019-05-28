
import React, {Component} from 'react'
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StatusBar,
} from  'react-native'
import DeviceInfo from 'react-native-device-info';
import Styles from './homePageStyle';

const deviceManufacturer = DeviceInfo.getManufacturer(); // 制造商
export default class HomePageView extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '首页',
      headerLeft: (
        <TouchableOpacity
          style={Styles.btn}
          onPress={() => navigation.openDrawer()}
        >
          <Text style={Styles.btnTxt}>open Drawer</Text>
        </TouchableOpacity>
      ),
    };
  };

  componentWillMount () {
    console.log('HomePageView componentWillMount');
  }

  componentDidMount () {
    console.log('HomePageView componentDidMount');
  }

  componentWillUnmount () {
    console.log('HomePageView componentWillUnmount');
  }

  render() {
    return (
      <ScrollView contentContainerStyle={Styles.container}>
        <Text style={Styles.welcome}>{deviceManufacturer}</Text>
        <Text style={Styles.line}>--------</Text>
        <Text style={Styles.welcome}>Welcome to HomePageView!</Text>
        <Text style={Styles.line}>--------</Text>
        <View style={{width: 372,height: 200,backgroundColor:'#a9a9a9',alignItems:'center',justifyContent:'center'}}>
          <View style={{width: 352,height: 180,backgroundColor:'#c0c0c0',alignItems:'center',justifyContent:'center'}}>
            <View style={{width: 332,height: 160,backgroundColor:'#d6d6d6',alignItems:'center',justifyContent:'center'}}>
              <View style={{width: 312,height: 140,backgroundColor:'#ebebeb',alignItems:'center',justifyContent:'center'}}>
                <View style={{width: 292,height: 120,backgroundColor:'#ffffff',alignItems:'center',justifyContent:'center'}}>
                  <Text style={Styles.instructions}>adapter</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={Styles.line}>--------</Text>
        <Text style={Styles.instructions}>
          于千万人中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧碰上了。等你好久了，你终于来了。我想，这个世上总有人会跨越人海，来到你的身边，不勉强，不凑合，简单舒适，舒心安然，懂你，爱你，如此一生!
        </Text>
        <Text style={Styles.line}>--------</Text>
        <Text style={Styles.instructions} ellipsizeMode="tail" numberOfLines={1}>
          于千万人中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧碰上了。等你好久了，你终于来了。我想，这个世上总有人会跨越人海，来到你的身边，不勉强，不凑合，简单舒适，舒心安然，懂你，爱你，如此一生!
        </Text>
        <Text style={Styles.line}>--------</Text>
        <Text style={Styles.instructions} ellipsizeMode="tail" numberOfLines={3}>
          于千万人中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧碰上了。等你好久了，你终于来了。我想，这个世上总有人会跨越人海，来到你的身边，不勉强，不凑合，简单舒适，舒心安然，懂你，爱你，如此一生!
        </Text>
        <Text style={Styles.line}>--------</Text>
        <View style={Styles.btnView}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.props.navigation.navigate('AFunction', {
              param: 'HomePage',
            })}
          >
            <Text style={Styles.btnTxt}>to AFunction</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.props.navigation.navigate('AFunction', {
              param: 'HomePage',
            })}
          >
            <Text style={Styles.btnTxt}>to AFunction</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.btnView}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.props.navigation.navigate('BFunction', {
              param: 'HomePage',
            })}
          >
            <Text style={Styles.btnTxt}>to BFunction</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.props.navigation.navigate('BFunction', {
              param: 'HomePage',
            })}
          >
            <Text style={Styles.btnTxt}>to BFunction</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.props.navigation.navigate('BFunction', {
              param: 'HomePage',
            })}
          >
            <Text style={Styles.btnTxt}>to BFunction</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
