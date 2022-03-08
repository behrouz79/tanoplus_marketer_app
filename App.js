import React from 'react';
import {I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './app/screens/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import CreateService from './app/screens/CreateService';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CreateService />
    </QueryClientProvider>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}>
    //     <Stack.Screen name="Splash" component={SplashScreen} />
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen options={{headerShown: true, headerTitleAlign: 'center', headerTitle: 'پنل بازاریاب'}} name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
