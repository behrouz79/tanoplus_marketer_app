import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeRoutes from './HomeRoutes';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProfileRoutes from './ProfileRoutes';

const Tab = createBottomTabNavigator();

const IndexRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Services') {
            iconName = 'grip-horizontal';
          } else if (route.name === 'Profile') {
            iconName = 'user-alt';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        options={{
          headerTitle: 'پنل بازاریاب',
          headerTitleAlign: 'center',
          tabBarLabel: 'خدمات',
        }}
        name="Services"
        component={HomeRoutes}
      />
      <Tab.Screen
        options={{
          headerTitle: 'پروفایل',
          headerTitleAlign: 'center',
          tabBarLabel: 'کاربری',
        }}
        name="Profile"
        component={ProfileRoutes}
      />
    </Tab.Navigator>
  );
};

export default IndexRoutes;
