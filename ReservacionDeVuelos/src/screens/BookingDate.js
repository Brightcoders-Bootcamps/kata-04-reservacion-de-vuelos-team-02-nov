import React from 'react';
import {View, Text} from 'react-native';
import BookingFormDate from '../components/molecules/BookingMolecules/BookingFormDate';
import BookingFormCalendar from '../components/molecules/BookingMolecules/BookingFormCalendar';
import {styles} from '../styles/BookingStyles';

const BookingDate = () => {
  return (
    <View style={styles.ScreenContainer}>
      <BookingFormDate />
      <BookingFormCalendar />
    </View>
  );
};

export default BookingDate;
