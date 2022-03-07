import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const HomeRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerTitle: 'پنل بازاریاب', headerTitleAlign: 'center'}}
        name="Home"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeRoutes;
