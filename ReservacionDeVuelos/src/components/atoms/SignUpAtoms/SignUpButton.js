import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../styles/Colors';
import {styles} from '../../../styles/SignUpStyles';
import {SignUpConstants} from '../../../utils/Constants';

const SignUpButton = ({isButtonEnabled, formValues, signUpSubmit}) => {
  return (
    <TouchableOpacity
      testID="SignUpBtn"
      style={[
        styles.btnSignup,
        {backgroundColor: isButtonEnabled ? colors.Purple : colors.ligthGray},
      ]}
      onPress={() => {
        isButtonEnabled
          ? signUpSubmit(formValues)
          : alert('Invalid Credentials');
      }}>
      <Text testID="btnTitle" style={styles.btnSignupText}>
        {SignUpConstants.SignUpButton}
      </Text>
    </TouchableOpacity>
  );
};

export default SignUpButton;
