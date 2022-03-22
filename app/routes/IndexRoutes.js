import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import CreateService from '../components/CreateService';
import SubScription from '../components/SubScription';
import HomeScreen from '../screens/HomeScreen';
import Suggestion from '../components/Suggestion';
import SuggestionDetails from '../components/SuggestionDetails';

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
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerTitle: 'ساخت سرویس'}}
        name="CreateService"
        component={CreateService}
      />
      <Stack.Screen
        options={{headerTitle: 'اشتراک'}}
        name="SubScription"
        component={SubScription}
      />
      <Stack.Screen
        options={{headerTitle: 'ارسال پیشنهاد'}}
        name="Suggestion"
        component={Suggestion}
      />
      <Stack.Screen
        options={{headerTitle: 'وضعیت پیشنهادات'}}
        name="SuggestionDetails"
        component={SuggestionDetails}
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
