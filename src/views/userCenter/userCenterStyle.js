
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
  },
  containerBg: {
    resizeMode:'contain',
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
  line: {
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  btnView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#d4fb79',
    padding: 10,
  },
  btn: {
    margin: 10,
    height: 28,
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  btnTxt: {
    margin: 5,
    fontSize: 16,
    color: 'white',
  }
});

export default styles;
