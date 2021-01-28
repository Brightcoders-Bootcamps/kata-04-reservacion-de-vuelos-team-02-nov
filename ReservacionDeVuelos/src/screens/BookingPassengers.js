import React from 'react';
import {View} from 'react-native';
import {styles} from '../styles/BookingStyles';
import BookingFormPassengers from '../components/molecules/BookingMolecules/BookingFormPassengers';
import BookingFormButtonPassengers from '../components/molecules/BookingMolecules/BookingFormButtonPassengers';

const BookingPassengers = () => {
  return (
    <View style={styles.ScreenContainer}>
      <BookingFormPassengers /> 
      <BookingFormButtonPassengers />
    </View>
  );
};

export default BookingPassengers;
