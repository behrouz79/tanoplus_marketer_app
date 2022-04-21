import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import CreateService from '../components/CreateService';
import SubScription from '../components/SubScription';
import HomeScreen from '../screens/HomeScreen';
import Suggestion from '../components/Suggestion';
import SuggestionDetails from '../components/SuggestionDetails';
import MagiketOrderScreen from '../screens/MagiketOrderScreen';
import MoreInfoScreen from "../screens/MoreInfoScreen";

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
