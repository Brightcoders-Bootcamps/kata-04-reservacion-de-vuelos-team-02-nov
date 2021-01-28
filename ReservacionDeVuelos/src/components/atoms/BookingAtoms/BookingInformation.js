import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
import {colors} from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const BookingInformation = () => {
  return (
    <View style={styles.BookingInformation}>
      <View style={styles.left}>
        <Text style={styles.InformationFlightsTitle}>BEG</Text>
        <Text style={styles.InformationFlightsSubtitle}>Serbia</Text>
      </View>
        <Icon style={styles.plane} name="md-airplane-sharp" color={colors.Purple} size={25}></Icon>     
    </View>
  );
};

export default BookingInformation;
