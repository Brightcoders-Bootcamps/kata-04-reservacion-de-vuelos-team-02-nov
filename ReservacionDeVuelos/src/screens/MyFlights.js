import React from 'react';
import {View} from 'react-native';
import FlightsList from '../components/atoms/MyFlightsAtoms/FlightsList';
import MyFlightsTitle from '../components/atoms/MyFlightsAtoms/MyFlightsTitle';
import AddFlightButton from '../components/atoms/MyFlightsAtoms/AddFlightButton';
import {FlightsListConstants} from '../utils/Constants';
import {styles} from '../styles/MyFlightsStyles';
const MyFlights = () => {
  return (
    <View style={styles.screenContainer}>
      <MyFlightsTitle title={FlightsListConstants.myFlightsTitle} />
      <FlightsList flights={FlightsListConstants.flightDataExperimental} />
      <AddFlightButton />
    </View>
  );
};

export default MyFlights;
