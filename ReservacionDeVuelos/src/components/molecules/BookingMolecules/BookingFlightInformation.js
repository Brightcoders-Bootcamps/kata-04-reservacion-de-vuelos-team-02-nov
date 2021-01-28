import React from 'react';
import {View} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
import {BookingConstants} from '../../../utils/Constants';
import BookingIcon from '../../atoms/BookingAtoms/BookingIcon';
import BookingInformation from '../../atoms/BookingAtoms/BookingInformation';
import BookingTitle from '../../atoms/BookingAtoms/BookingTitle';

const BookingFlightInformation = () => {
  return (
    <View style={styles.ContainerFlightInformation}>
      <BookingIcon />
      <BookingInformation />
      <BookingTitle title={BookingConstants.TitleDestination} />
    </View>
  );
};

export default BookingFlightInformation;
