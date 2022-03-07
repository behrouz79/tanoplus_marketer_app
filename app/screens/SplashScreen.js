import React, {useEffect, useState} from 'react';
import MainScreen from '../components/shared/MainScreen';
import {Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user_code').then(value =>
        value === null
          ? navigation.replace('Login')
          : navigation.replace('Home'),
      );
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
