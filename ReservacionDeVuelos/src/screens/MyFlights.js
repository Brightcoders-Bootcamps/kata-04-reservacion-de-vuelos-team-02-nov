import React from 'react';
import {View} from 'react-native';
import FlightsList from '../components/atoms/MyFlightsAtoms/FlightsList';
import MyFlightsTitle from '../components/atoms/MyFlightsAtoms/MyFlightsTitle';
import AddFlightButton from '../components/atoms/MyFlightsAtoms/AddFlightButton';
import {styles} from '../styles/MyFlightsStyles'
const MyFlights = () => {
  return (
    <View style={styles.screenContainer}>
      <MyFlightsTitle />
      <FlightsList />
      <AddFlightButton />
    </View>
  );
};

export default MyFlights;
