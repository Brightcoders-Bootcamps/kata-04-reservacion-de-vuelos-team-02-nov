import React from 'react';
import {TouchableOpacity} from 'react-native';
import PlusIcon from 'react-native-vector-icons/Entypo';
import {styles} from '../../../styles/MyFlightsStyles';
import {colors} from '../../../styles/Colors'
const AddFlightButton = () => {
  return <TouchableOpacity style={styles.circleButton}>
      <PlusIcon name='plus' color={colors.white} size={50}/>
  </TouchableOpacity>;
};

export default AddFlightButton;