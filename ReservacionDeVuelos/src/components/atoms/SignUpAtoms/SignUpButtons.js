import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import GoogleIcon from '../../../assets/images/google.png';
import {SignUpConstants} from '../../../utils/Constants';
const SignUpButtons = () => {
  return (
    <View style={styles.btnSignupContainer}>
      <TouchableOpacity style={styles.btnSignup}>
        <Text style={styles.btnSignupText}>{SignUpConstants.SignUpButton}</Text>
      </TouchableOpacity>
      <Text style={styles.or}>or</Text>
      <TouchableOpacity style={styles.btnSignup}>
        <Image
          source={GoogleIcon}
          style={[styles.googleIcon, {marginLeft: -75}]}
        />
        <Text style={[styles.btnSignupText, {marginLeft: 50}]}>
          {SignUpConstants.GoogleSignUpButton}
        </Text>
      </TouchableOpacity>
      <View style={styles.loginTextContainer}>
        <Text>{SignUpConstants.HasAnAccount}</Text>
        <TouchableOpacity>
          <Text style={styles.LogInText}>{SignUpConstants.LogIn}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpButtons;
