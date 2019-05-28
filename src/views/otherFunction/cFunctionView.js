
import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
} from  'react-native';
import Styles from './cFunctionStyle';

export default class CFunctionView extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'C功能页面',
    };
  };

  componentWillMount () {
    console.log('AFunctionView componentWillMount');
  }

  componentDidMount () {
    console.log('AFunctionView componentDidMount');
  }

  componentWillUnmount () {
    console.log('AFunctionView componentWillUnmount');
  }

  render() {
    const { navigation } = this.props;
    const param = navigation.getParam('param');
    return (
      <ScrollView contentContainerStyle={Styles.container}>
        <ImageBackground source={require('../../../res/bg_003.png')} style={[Styles.container, Styles.containerBg]}>
          <Text style={Styles.welcome}>Welcome to AFunctionView!</Text>
          <Text style={Styles.line}>--------</Text>
          <Text style={Styles.instructions}>Come from {param || '*'}</Text>
          <Text style={Styles.line}>--------</Text>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.props.navigation.navigate('CFunction', {
              param: 'CFunction',
            })}
          >
            <Text style={Styles.btnTxt}>to CFunction</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.props.navigation.navigate('UserCenter', {
              param: 'CFunction',
            })}
          >
            <Text style={Styles.btnTxt}>to UserCenter</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    );
  }
}
