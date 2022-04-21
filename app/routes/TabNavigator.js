import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndexRoutes from './IndexRoutes';
import MoreInfoScreen from '../screens/MoreInfoScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Index') {
            iconName = focused ? 'calendar-alt' : 'calendar-alt';
          } else if (route.name === 'MoreInfoScreen') {
            iconName = focused ? 'clipboard-list' : 'clipboard-list';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.subTitle,
        headerShown: false,
      })}>
      <Tab.Screen
        name="Index"
        options={{title: 'نخست'}}
        component={IndexRoutes}
      />
      <Tab.Screen
        name="MoreInfo"
        options={{title: 'بیشتر'}}
        component={MoreInfoScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
