import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateService from '../components/CreateService';
import SubScription from '../components/SubScription';

const Stack = createStackNavigator();

const IndexRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeHome"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerTitle: 'ساخت سرویس', headerTitleAlign: 'center'}}
        name="CreateService"
        component={CreateService}
      />
      <Stack.Screen
        options={{headerTitle: 'اشتراک', headerTitleAlign: 'center'}}
        name="SubScription"
        component={SubScription}
      />
    </Stack.Navigator>
  );
};

export default IndexRoutes;
