import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import {SignUpConstants} from '../../../utils/Constants';
const LoginMessage = () => {
  return (
    <View style={styles.loginTextContainer} testID='view'>
      <Text testID='account'>{SignUpConstants.HasAnAccount}</Text>
      <TouchableOpacity>
        <Text testID='logIn' style={styles.LogInText}>{SignUpConstants.LogIn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginMessage;
