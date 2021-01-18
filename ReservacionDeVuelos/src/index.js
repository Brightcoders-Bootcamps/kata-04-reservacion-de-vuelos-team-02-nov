import React, {useEffect} from 'react';
import {Text, Button, TextInput} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import SignUp from './screens/SignUp';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '555459120478-5dvb5sj1o0996s86gg8bk69ogm7vdiu4.apps.googleusercontent.com',
    });
  }, []);
  return (
    <>
      <SignUp />
    </>
  );
};

export default App;
