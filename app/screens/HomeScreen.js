import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import MainScreen from '../components/shared/MainScreen';
import CardButton from '../components/buttons/CardButton';

const HomeScreen = () => {
  return (
    <MainScreen style={styles.container}>
      <ScrollView>
        <CardButton onPress={() => {}} title="ساخت سرویس" />
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
