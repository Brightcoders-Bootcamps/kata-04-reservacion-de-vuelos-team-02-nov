import React from 'react';
import {Text, TextInput} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
const SignUpFormInput = (props) => {
  const {inputName} = props;

  return (
    <>
      <Text style={styles.formText}>{inputName}</Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={inputName === 'Password *' ? true : false}
      />
      {inputName === 'Password *' && (
        <Text style={styles.characters}>
          Use 8 or more characters with a mix of letters, numbers, and sumbols
        </Text>
      )}
    </>
  );
};

export default SignUpFormInput;
