import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import MagiketOrderScreen from '../screens/MagiketOrderScreen';
import MoreInfoScreen from '../screens/MoreInfoScreen';
import SubsetsScreen from '../screens/SubsetsScreen';

const Stack = createStackNavigator();

const IndexRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: styles.headerStyle,
      }}>
      <Stack.Screen
        options={{headerTitle: 'پنل بازاریاب'}}
        name="Home"
        component={MoreInfoScreen}
      />
      <Stack.Screen
        options={{headerTitle: 'وضعیت سفارشات مجیکت'}}
        name="MagiketOrders"
        component={MagiketOrderScreen}
      />
      <Stack.Screen
        options={{headerTitle: 'زیر مجموعه ها'}}
        name="MarketerSubsets"
        component={SubsetsScreen}
      />
    </Stack.Navigator>
  );
};

export default IndexRoutes;

const styles = StyleSheet.create({
  headerStyle: {
    fontFamily: 'Shabnam',
    color: Colors.title,
  },
});
