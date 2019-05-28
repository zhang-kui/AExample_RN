
import React, {Component, PureComponent} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SectionList,
} from  'react-native';
import Styles from './msgCenterStyle';

export default class MsgCenterView extends PureComponent<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
      title: '消息',
    };
  };

  flatListData = [
    { key: 0, name: 'AAA', action: null },
    { key: 1, name: 'BBB', action: null },
    { key: 2, name: 'CCC', action: null },
    { key: 3, name: 'DDD', action: null },
    { key: 4, name: 'EEE', action: null },
    { key: 5, name: 'FFF', action: null },
    { key: 6, name: 'GGG', action: null },
    { key: 7, name: 'HHH', action: null },
    { key: 8, name: 'III', action: null },
    { key: 9, name: 'JJJ', action: null },
    { key: 10, name: 'KKK', action: null }
    ];

  sectionListData = [
    { key: "A", data: [{ title: "A-1" }, { title: "A-2" }, { title: "A-3" }] },
    { key: "B", data: [{ title: "B-1" }, { title: "B-2" }, { title: "B-3" }] },
    { key: "C", data: [{ title: "C-1" }, { title: "C-2" }, { title: "C-3" }] },
    { key: "D", data: [{ title: "D-1" }, { title: "D-2" }, { title: "D-3" }] },
    { key: "E", data: [{ title: "E-1" }, { title: "E-2" }, { title: "E-3" }] },
    { key: "F", data: [{ title: "F-1" }, { title: "F-2" }, { title: "F-3" }] }
    ];

  _renderItemSeparator = () => (
    <View style={Styles.itemLine} />
  );

  _renderFlatHeader= () => (
    <View style={Styles.listHeader}>
      <Text style={Styles.welcome}>FlatList</Text>
    </View>
  );

  _renderFlatFooter= () => (
    <View style={Styles.listFooter}>
      <Text style={Styles.welcome}>Thank you for coming</Text>
    </View>
  );

  _renderFlatItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => alert(item.key)}>
      <View style={Styles.flatItem}>
        <Text style={Styles.itemName}>{item.name}</Text>
        <Image source={require('../../../res/arrow_right.png')} style={Styles.itemImg} />
      </View>
    </TouchableOpacity>
  );


  _renderListHeader = () => (
    <View style={Styles.listHeader}>
      <Text style={Styles.welcome}>SectionList</Text>
    </View>
  );

  _renderListFooter = () => (
    <View style={Styles.listFooter}>
      <Text style={Styles.welcome}>Thank you for coming</Text>
    </View>
  );

  _renderSectionHeader = ({section}) => (
    <View style={Styles.sectionHeader}>
      <Text style={Styles.itemName}>{section.key}</Text>
    </View>
  );

  _renderSectionFooter = () => null;

  _renderSectionItem = ({ item, index, section }) => (
    <TouchableOpacity onPress={() => alert(item.key)}>
      <View style={Styles.sectionItem}>
        <Text style={Styles.itemName}>{item.title}</Text>
        <Image source={require('../../../res/arrow_right.png')} style={Styles.itemImg} />
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.flatListView}>
          <FlatList
            contentContainer={Styles.flatList}
            horizontal={false} // 是否水平布局
            refreshing // 在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号
            keyExtractor={(item, index) => item + index}
            data={this.flatListData}
            initialNumToRender={5}
            ListHeaderComponent={this._renderFlatHeader}
            renderItem={this._renderFlatItem}
            ItemSeparatorComponent={this._renderItemSeparator}
            ListFooterComponent={this._renderFlatFooter}
          />
        </View>
        <View style={Styles.space} />
        <View style={Styles.sectionListView}>
          <SectionList
            contentContainer={Styles.SectionList}
            sections={this.sectionListData}
            keyExtractor={(item, index) => item + index}
            initialNumToRender={5}
            ListHeaderComponent={this._renderListHeader}
            renderSectionHeader={this._renderSectionHeader}
            renderItem={this._renderSectionItem}
            renderSectionFooter={this._renderSectionFooter}
            ItemSeparatorComponent={this._renderItemSeparator}
            ListFooterComponent={this._renderListFooter}
          />
        </View>
      </View>
     );
  }
}
