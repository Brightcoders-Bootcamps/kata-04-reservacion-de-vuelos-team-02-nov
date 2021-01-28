import React from 'react';
import {View} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
import {BookingConstants} from '../../../utils/Constants';
import BookingIcon from '../../atoms/BookingAtoms/BookingIcon';
import BookingInformationTwo from '../../atoms/BookingAtoms/BookingInformationTwo';
import BookingTitle from '../../atoms/BookingAtoms/BookingTitle';

const BookingDate = () => {
  return (
    <View style={styles.ContainerFlightInformation}>
      <BookingIcon />
      <BookingInformationTwo />
      <BookingTitle title={BookingConstants.SelectDate} />
    </View>
  );
};

export default BookingDate;
