import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import PlaneIcon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../../styles/Colors';
import {styles} from '../../../styles/MyFlightsStyles';
const DATA = [
  {
    id: '1',
    originCountry: 'BEG',
    destinyCountry: 'AMS',
    originCity: 'Serbia',
    destinyCity: 'Netherlands',
    date: 'September 3, 2021',
    passengers: 5,
  },
  {
    id: '2',
    originCountry: 'BEG',
    destinyCountry: 'AMS',
    originCity: 'dsfsf',
    destinyCity: 'fdgdg',
    date: 'September 3, 2021',
    passengers: 5,
  },
  {
    id: '3',
    originCountry: 'BEG',
    destinyCountry: 'AMS',
    originCity: 'dsfsf',
    destinyCity: 'fdgdg',
    date: 'September 3, 2021',
    passengers: 5,
  },
  {
    id: '4',
    originCountry: 'BEG',
    destinyCountry: 'AMS',
    originCity: 'dsfsf',
    destinyCity: 'fdgdg',
    date: 'September 3, 2021',
    passengers: 5,
  },
  {
    id: '5',
    originCountry: 'BEG',
    destinyCountry: 'AMS',
    originCity: 'dsfsf',
    destinyCity: 'fdgdg',
    date: 'September 3, 2021',
    passengers: 5,
  },
  {
    id: '6',
    originCountry: 'BEG',
    destinyCountry: 'AMS',
    originCity: 'dsfsf',
    destinyCity: 'fdgdg',
    date: 'September 3, 2021',
    passengers: 5,
  },
  {
    id: '7',
    originCountry: 'BEG',
    destinyCountry: 'AMS',
    originCity: 'dsfsf',
    destinyCity: 'fdgdg',
    date: 'September 3, 2021',
    passengers: 5,
  },
];

const Item = ({item}) => (
  <View style={styles.fatherContainer}>
    <View style={styles.TopContainer}>
      <Text style={styles.country}>{item.originCountry}</Text>
      <PlaneIcon name="plane" color={colors.Purple} size={25} />
      <Text style={styles.country}>{item.destinyCountry}</Text>
    </View>
    <View style={styles.middleContainer}>
      <Text style={styles.city}>{item.originCity}</Text>
      <Text style={styles.city}>{item.destinyCity}</Text>
    </View>
    <View style={styles.bottomContainer}>
      <Text style={styles.dateTitle}>{item.date}</Text>
      <Text style={styles.passengersTitle}>{item.passengers} passengers</Text>
    </View>
    <View style={styles.border} />
  </View>
);

const FlightsList = () => {
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View style={styles.ListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={(flight) => flight.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FlightsList;
