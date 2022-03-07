import React from 'react';
import {StyleSheet, Text} from 'react-native';
import MainScreen from '../components/shared/MainScreen';

const HomeScreen = () => {
  return (
    <MainScreen style={styles.container}>
      <Text>wigjweoirgol</Text>
    </MainScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});
