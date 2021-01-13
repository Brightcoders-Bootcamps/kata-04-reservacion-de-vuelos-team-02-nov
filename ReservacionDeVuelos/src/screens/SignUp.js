import React from 'react';
import {View} from 'react-native';
import {styles} from '../styles/SignUpStyles';
import Form from '../components/molecules/SignUpForm';
import SignUpTitle from '../components/atoms/SignUpAtoms/SignUpTitle';
import SignUpButtons from '../components/atoms/SignUpAtoms/SignUpButtons';
const SignUp = () => {
  return (
    <View style={styles.SignUpContainer}>
      <SignUpTitle />
      <Form />
      <SignUpButtons />
    </View>
  );
};

export default SignUp;
