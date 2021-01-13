import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from '../../styles/SignUpStyles';
import CheckBox from '@react-native-community/checkbox';

const SignUpForm = () => {
  return (
    <View>
      <Text style={styles.formText}>First Name</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.formText}>Email *</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.formText}>Password *</Text>
      <TextInput style={styles.textInput} secureTextEntry={true} />
      <Text style={styles.characters}>
        Use 8 or more characters with a mix of letters, numbers, and sumbols
      </Text>
      <View style={styles.checkboxFather}>
        <View style={styles.checkBoxContainer}>
          <CheckBox />
          <Text>I agree to the Trems and Privacy Policy *</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox />
          <Text>Subscribe for select product updates.</Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpForm;
