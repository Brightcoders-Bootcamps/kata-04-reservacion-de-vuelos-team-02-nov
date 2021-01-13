import React from 'react';
import {View} from 'react-native';
import {styles} from '../../styles/SignUpStyles';
import SignUpFormInput from '../atoms/SignUpAtoms/SignUpFormInput';
import SignUpFormCheckBox from '../atoms/SignUpAtoms/SignUpFormCheckBox';
const SignUpForm = () => {
  return (
    <View>
      <SignUpFormInput inputName="First Name" />
      <SignUpFormInput inputName="Email *" />
      <SignUpFormInput inputName="Password *" />
      <View style={styles.checkboxFather}>
        <View style={styles.checkBoxContainer}>
          <SignUpFormCheckBox checkboxMessage="I agree to the Terms and Privacy Policy." />
        </View>
        <View style={styles.checkBoxContainer}>
          <SignUpFormCheckBox checkboxMessage="Subscribe for select product updates." />
        </View>
      </View>
    </View>
  );
};

export default SignUpForm;
