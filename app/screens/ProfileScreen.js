import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import MainScreen from '../components/shared/MainScreen';

const HomeScreen = ({navigation}) => {
  return (
    <MainScreen style={styles.container}>
      <ScrollView>
      </ScrollView>
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
