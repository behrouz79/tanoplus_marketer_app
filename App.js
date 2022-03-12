import React, { useEffect } from "react";
import {I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './app/screens/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './app/screens/LoginScreen';
import {QueryClient, QueryClientProvider} from 'react-query';
import IndexRoutes from './app/routes/IndexRoutes';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import Firebase from '@react-native-firebase/app';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  PushNotification.configure({
    onNotification: function (notification) {
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
  useEffect(() => {
    Firebase.initializeApp(App);
  },[])

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Index" component={IndexRoutes} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
