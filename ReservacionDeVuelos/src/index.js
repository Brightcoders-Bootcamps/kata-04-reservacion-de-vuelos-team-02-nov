import React, {useEffect} from 'react';
import {GoogleSignin} from '@react-native-community/google-signin';
import MyFlights from './screens/MyFlights';
import BookingNow from './screens/BookingNow';
import BookingTo from './screens/BookingTo';
import BookingDate from './screens/BookingDate';
import BookingPassengers from './screens/BookingPassengers'; 

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '555459120478-5dvb5sj1o0996s86gg8bk69ogm7vdiu4.apps.googleusercontent.com',
    });
  }, []);
  return (
    <>
      <BookingPassengers />
    </>
  );
};

export default App;
