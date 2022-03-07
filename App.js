import React from 'react';
import {I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './app/screens/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './app/screens/LoginScreen';
import HomeRoutes from './app/routes/Home';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
