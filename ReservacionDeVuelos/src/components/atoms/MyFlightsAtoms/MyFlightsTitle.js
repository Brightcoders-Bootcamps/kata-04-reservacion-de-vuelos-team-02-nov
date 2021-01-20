import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/MyFlightsStyles';
import {FlightsListConstants} from '../../../utils/Constants';

const MyFlightsTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.myFlightsTitle}>
        {FlightsListConstants.myFlightsTitle}
      </Text>
    </View>
  );
};

export default MyFlightsTitle;