import React from 'react';
import {View, Text} from 'react-native';
import BookingFormDate from '../components/molecules/BookingMolecules/BookingFormDate';
import BookingCalendar from '../components/molecules/BookingMolecules/BookingCalendar';
import {styles} from '../styles/BookingStyles';

const BookingDate = () => {
  return (
    <View style={styles.ScreenContainer}>
      <BookingFormDate />
      <BookingCalendar />
    </View>
  );
};

export default BookingDate;
