import React, {useEffect} from 'react';
import MainScreen from '../components/shared/MainScreen';
import {Alert, BackHandler, Image, StyleSheet} from 'react-native';
import {checkToken} from '../utils/jwt';
import NetInfo from '@react-native-community/netinfo';
import {getUserState} from '../api/Profile';

const confirmationAlert = message => {
  return Alert.alert('مشکلی پیش آمده!', message, [
    {
      text: 'باشه',
      onPress: BackHandler.exitApp,
    },
    {cancelable: false},
  ]);
};

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getUserState().then(r => {
        !r.result === 'no' &&
          confirmationAlert(
            'حساب کاربری شما غیرفعال شده است.برای اطلاع بیشتر با پشتیبانی تماس بگیرید.',
          );
      });
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          checkToken().then(value => {
            value ? navigation.replace('Home') : navigation.replace('Login');
          });
        } else {
          confirmationAlert(
            'برای استفاده از برنامه باید به اینترنت متصل باشید.',
          );
        }
      });
    }, 2000);
  }, []);

  return (
    <MainScreen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/splash-logo.png')}
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
