
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
  flatListView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#d4fb79',
  },
  flatList: {
    width: '100%',
  },
  itemName: {
    fontSize: 18,
    color: '#5e5e5e',
  },
  itemImg: {
    width: 22,
    height: 22,
  },
  listHeader: {
    height: 44,
    alignItems: 'flex-start',
    backgroundColor: '#d6d6d6',
  },
  listFooter: {
    height: 44,
    alignItems: 'flex-start',
    backgroundColor: '#d6d6d6',
  },
  flatItem: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  space: {
    width: '100%',
    height: 10,
    backgroundColor: 'red',
  },
  sectionListView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffd479',
  },
  SectionList: {
    width: '100%',
  },
  sectionHeader: {
    height: 44,
    paddingLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
  sectionItem: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  itemLine: {
    width: '90%',
    height: 1,
    borderRadius: 1,
    backgroundColor: '#a9a9a9',
    marginLeft: '5%',
  },
});

export default styles;
