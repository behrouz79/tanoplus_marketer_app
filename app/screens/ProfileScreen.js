import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import MainScreen from '../components/shared/MainScreen';
import CardButton from '../components/buttons/CardButton';

const HomeScreen = ({navigation}) => {
  return (
    <MainScreen style={styles.container}>
      <ScrollView>
        <CardButton
          onPress={() => {
            navigation.navigate('Suggestion');
          }}
          title="ارسال پیشنهاد"
        />
        <CardButton
          onPress={() => {
            navigation.navigate('SuggestionDetails');
          }}
          title="وضعیت پشنهادات"
        />
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
