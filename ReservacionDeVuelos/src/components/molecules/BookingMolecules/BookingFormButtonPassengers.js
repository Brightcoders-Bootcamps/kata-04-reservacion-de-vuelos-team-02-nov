import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
import {BookingConstants} from '../../../utils/Constants';
import BookingScrollPicker from '../../atoms/BookingAtoms/BookingScrollPicker';
import BookingButton from '../../atoms/BookingAtoms/BookingButton'

const BookingFormButtonPassengers = () => {
  return (
    <View style={styles.ContainerForm}>
      <BookingScrollPicker />
      <BookingButton />
    </View>
  );
};

export default BookingFormButtonPassengers;
