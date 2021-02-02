import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
import {colors} from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons'; 

const BookingInformationTwo = () => {
  return (
    <View style={styles.BookingInformation}>
      <View>
        <Text style={styles.InformationFlightsTitle}>BEG</Text>
        <Text style={styles.InformationFlightsSubtitle}>Serbia</Text>
      </View>
      <Icon
        style={styles.plane}
        name="md-airplane-sharp"
        color={colors.Purple}
        size={25}></Icon>
      <View>
        <Text style={styles.InformationFlightsTitle}>AMS</Text>
        <Text style={styles.InformationFlightsSubtitle}>Netherlands</Text>
      </View> 
    </View>
  );
};

export default BookingInformationTwo;
