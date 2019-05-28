
import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from  'react-native';
import Styles from './aFunctionStyle';

export default class AFunctionView extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'A功能页面',
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
      <View style={Styles.container}>
        <ImageBackground source={require('../../../res/bg_001.png')} style={[Styles.container, Styles.containerBg]}>
          <Text style={Styles.welcome}>Welcome to AFunctionView!</Text>
          <Text style={Styles.line}>--------</Text>
          <Text style={Styles.instructions}>Come from {param || '*'}</Text>
          <Text style={Styles.line}>--------</Text>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.props.navigation.navigate('BFunction', {
              param: 'AFunction',
            })}
          >
            <Text style={Styles.btnTxt}>to BFunction</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
