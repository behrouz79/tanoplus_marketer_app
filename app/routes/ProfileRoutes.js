import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const ProfileRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileHome"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Suggestion"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileRoutes;
