import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/MyFlightsStyles';


const MyFlightsTitle = ({title}) => {
  return (
    <View style={styles.titleContainer} testID='view'>
      <Text style={styles.myFlightsTitle} testID='text'>
        {title}
      </Text>
    </View>
  );
};

export default MyFlightsTitle;