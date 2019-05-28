
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from  'react-native';
import Styles from './userCenterStyle';

export default class UserCenterView extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '我的',
      tabBarVisible: true,
      headerLeft: null,
      headerRight: (
        <TouchableOpacity
          style={Styles.btn}
          onPress={() => navigation.navigate('CFunction', {
            param: 'UserCenter',
          })}
        >
          <Text style={Styles.btnTxt}>to CFunction</Text>
        </TouchableOpacity>
      ),
    };
  };
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>Welcome to UserCenterView!</Text>
        <Text style={Styles.line}>--------</Text>
        <View style={{width: 372,height: 200,backgroundColor:'#d6d6d6'}} />
        <Text style={Styles.line}>--------</Text>
        <View style={Styles.btnView}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.props.navigation.navigate('CFunction', {
              param: 'UserCenter',
            })}
          >
            <Text style={Styles.btnTxt}>to CFunction</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
