import React, {useEffect} from 'react';
import {Text, Button} from 'react-native';

import {GoogleSignin} from '@react-native-community/google-signin';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '555459120478-5dvb5sj1o0996s86gg8bk69ogm7vdiu4.apps.googleusercontent.com',
    });
  }, []);
  return (
    <>
      <Text>Reservación de Vuelos</Text>
    </>
  );
};

export default App;
