import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
import {colors} from '../../../styles/Colors'
import Icon from 'react-native-vector-icons/AntDesign'; 

const BookingIcon = () => {
  return (
    <View>
      <TouchableOpacity>
        <Icon name='left' color={colors.Purple} size={30}></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default BookingIcon;
