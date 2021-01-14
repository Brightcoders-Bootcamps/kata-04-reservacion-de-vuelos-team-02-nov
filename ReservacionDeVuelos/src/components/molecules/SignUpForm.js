import React from 'react';
import {View} from 'react-native';
import {styles} from '../../styles/SignUpStyles';
import {SignUpConstants} from '../../utils/Constants';
import SignUpFormInput from '../atoms/SignUpAtoms/SignUpFormInput';
import SignUpFormCheckBox from '../atoms/SignUpAtoms/SignUpFormCheckBox';
const SignUpForm = () => {
  return (
    <View>
      <SignUpFormInput inputName={SignUpConstants.NameInputTitle} />
      <SignUpFormInput inputName={SignUpConstants.EmailInputTitle} />
      <SignUpFormInput inputName={SignUpConstants.PasswordInputTitle} />
      <View style={styles.checkboxFather}>
        <View style={styles.checkBoxContainer}>
          <SignUpFormCheckBox
            checkboxMessage={SignUpConstants.TermsCheckboxTitle}
          />
        </View>
        <View style={styles.checkBoxContainer}>
          <SignUpFormCheckBox
            checkboxMessage={SignUpConstants.UpdatesCheckboxTitle}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpForm;
