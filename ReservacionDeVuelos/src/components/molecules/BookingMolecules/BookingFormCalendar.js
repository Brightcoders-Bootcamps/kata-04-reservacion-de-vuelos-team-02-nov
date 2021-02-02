import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/BookingStyles'
import BookingCalendar from '../../atoms/BookingAtoms/BookingCalendar';
import BookingButton from '../../atoms/BookingAtoms/BookingButton';

const BookingFormCalendar = () => {
  return (
    <View style={styles.ContainerForm}>
      <BookingCalendar />
      <BookingButton />
    </View>
  );
};

export default BookingFormCalendar;
