import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import GoogleIcon from '../../../assets/images/google.png';
const SignUpButtons = () => {
  return (
    <View style={styles.btnSignupContainer}>
      <TouchableOpacity style={styles.btnSignup}>
        <Text style={styles.btnSignupText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.or}>or</Text>
      <TouchableOpacity style={styles.btnSignup}>
        <Image
          source={GoogleIcon}
          style={[styles.googleIcon, {marginLeft: -75}]}
        />
        <Text style={[styles.btnSignupText, {marginLeft: 50}]}>
          Sign Up with Google
        </Text>
      </TouchableOpacity>
      <View style={styles.loginTextContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.LogInText}> Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpButtons;
