import React from 'react';
import {View, Text} from 'react-native';
import BookingForm from '../components/molecules/BookingMolecules/BookingForm';
import BookingFlightInformation from '../components/molecules/BookingMolecules/BookingFlightInformation';
import {styles} from '../styles/BookingStyles';

const BookingTo = () => {
  return (
    <View style={styles.ScreenContainer}>
      <BookingFlightInformation />
      <BookingForm />
    </View>
  );
};

export default BookingTo;
