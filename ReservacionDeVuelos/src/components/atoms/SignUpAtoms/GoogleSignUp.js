import React from 'react';
import { Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import GoogleIcon from '../../../assets/images/google.png';
import {SignUpConstants} from '../../../utils/Constants';
const GoogleSignUp = () => {
  return (
    <TouchableOpacity style={styles.btnSignup} testID='GoogleSignUp'>
      <Image
      testID='GoogleIcon'
        source={GoogleIcon}
        style={[styles.googleIcon, {marginLeft: -75}]}
      />
      <Text style={[styles.btnSignupText, {marginLeft: 50}]} testID='btnTitle'>
        {SignUpConstants.GoogleSignUpButton}
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleSignUp;
