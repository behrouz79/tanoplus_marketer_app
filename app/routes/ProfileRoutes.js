import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import Suggestion from '../components/Suggestion';
import SuggestionDetails from '../components/SuggestionDetails';

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
        options={{headerTitle: 'ارسال پیشنهاد', headerTitleAlign: 'center'}}
        name="Suggestion"
        component={Suggestion}
      />
      <Stack.Screen
        options={{headerTitle: 'وضعیت پیشنهادات', headerTitleAlign: 'center'}}
        name="SuggestionDetails"
        component={SuggestionDetails}
      />
    </Stack.Navigator>
  );
};

export default ProfileRoutes;
