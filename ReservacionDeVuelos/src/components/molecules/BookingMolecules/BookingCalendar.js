import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/BookingStyles'
import Calendar from '../../atoms/BookingAtoms/Calendar';
import BookingButton from '../../atoms/BookingAtoms/BookingButton';

const BookingCalendar = () => {
  return (
    <View style={styles.ContainerForm}>
      <Calendar />
      <BookingButton />
    </View>
  );
};

export default BookingCalendar;
