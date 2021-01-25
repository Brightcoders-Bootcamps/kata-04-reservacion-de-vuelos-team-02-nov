import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyFlights from '../screens/MyFlights';

const Stack = createStackNavigator();

const FlighsNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="MyFlights" component={MyFlights} />
    </Stack.Navigator>
  );
};

export default FlighsNavigation;
