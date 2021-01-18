import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import CheckBox from '@react-native-community/checkbox';
const SignUpFormCheckBox = (props) => {
  const {checkboxMessage} = props;
  return (
    <View style={styles.checkBoxContainer}>
      <CheckBox />
      <Text>{checkboxMessage}</Text>
    </View>
  );
};

export default SignUpFormCheckBox;
