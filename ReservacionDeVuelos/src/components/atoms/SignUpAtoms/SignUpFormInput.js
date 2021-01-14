import React from 'react';
import {Text, TextInput} from 'react-native';
import {styles} from '../../../styles/SignUpStyles';
import {SignUpConstants} from '../../../utils/Constants';
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
          {SignUpConstants.CharactersMessage}
        </Text>
      )}
    </>
  );
};

export default SignUpFormInput;
