import React, {useEffect} from 'react';
import MainScreen from '../components/shared/MainScreen';
import {Image, StyleSheet} from 'react-native';
import {checkToken} from '../utils/jwt';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      checkToken().then(value => {
        value ? navigation.replace('Index') : navigation.replace('Login');
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
