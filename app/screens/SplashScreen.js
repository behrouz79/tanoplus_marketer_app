import React, {useEffect} from 'react';
import MainScreen from '../components/shared/MainScreen';
import {Alert, BackHandler, Image, StyleSheet} from 'react-native';
import {checkToken} from '../utils/jwt';
import NetInfo from '@react-native-community/netinfo';

const confirmationAlert = () => {
  return Alert.alert(
    'دسترسی به اینترنت',
    'برای استفاده از برنامه باید به اینترنت متصل باشید.',
    [
      {
        text: 'باشه',
        onPress: BackHandler.exitApp,
      },
      {cancelable: false},
    ],
  );
};

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          checkToken().then(value => {
            value ? navigation.replace('Index') : navigation.replace('Login');
          });
        } else {
          confirmationAlert();
        }
      });
    }, 2000);
  }, []);

  return (
    <MainScreen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/splash-logo.png')}
      />
    </MainScreen>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: '50%',
    resizeMode: 'center',
  },
});
