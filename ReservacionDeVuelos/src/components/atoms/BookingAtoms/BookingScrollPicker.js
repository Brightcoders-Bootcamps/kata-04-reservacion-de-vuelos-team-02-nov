import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Touchable} from 'react-native';
import {colors} from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

const DATA = [
  {
    id: 1,
    title: '1',
  },
  {
    id: 2,
    title: '2',
  },
  {
    id: 3,
    title: '3',
  },
  {
    id: 4,
    title: '4',
  },
  {
    id: 5,
    title: '5',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const BookingScrollPicker = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={styles.FlatList}>
      <Icon name="caretright" color={colors.Purple} size={20}></Icon>
      <TouchableOpacity>
          
      </TouchableOpacity>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Icon name="caretleft" color={colors.Purple} size={20}></Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlatList: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginLeft: 70,
    marginHorizontal: 16,
    width: 200,
    height: 50,
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
  },
});

export default BookingScrollPicker;
