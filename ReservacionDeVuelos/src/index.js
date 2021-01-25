import React, {useEffect} from 'react';
import {GoogleSignin} from '@react-native-community/google-signin';
import {connect} from 'react-redux';
import {AuthConstants} from './utils/Constants';
import {NavigationContainer} from '@react-navigation/native';
import FlightsNavigation from './navigations/FlightsNavigation';
import AuthNavigation from './navigations/AuthNavigation';

const App = ({Auth}) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: AuthConstants.GoogleId,
    });
  }, []);
  return (
    <NavigationContainer>
      {Auth.user ? <FlightsNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  console.log(state.AuthReducer);
  return {
    Auth: state.AuthReducer,
  };
};
export default connect(mapStateToProps, null)(App);
