import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: ()=>null}}>
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
