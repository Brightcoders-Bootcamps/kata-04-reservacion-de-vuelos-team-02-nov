import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../../../styles/MyFlightsStyles';
const MyFlightsTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.myFlightsTitle}>My flights</Text>
    </View>
  );
};

export default MyFlightsTitle;
