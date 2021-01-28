import React from 'react';
import {View} from 'react-native'; 
import BookingForm from '../components/molecules/BookingMolecules/BookingForm';
import BookingFormInformation from '../components/molecules/BookingMolecules/BookingFormInformation';
import {styles} from '../styles/BookingStyles';

const BookingNow = () => {
  return (
    <View style={styles.ScreenContainer}>
      <BookingFormInformation /> 
      <BookingForm />
    </View>
  );
};

export default BookingNow;
