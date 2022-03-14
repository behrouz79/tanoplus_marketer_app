import React from 'react';
import {StyleSheet, ScrollView, View, Text, FlatList} from 'react-native';
import MainScreen from '../components/shared/MainScreen';
import CardButton from '../components/buttons/CardButton';
import {useQuery} from 'react-query';
import {getProfileDta} from '../api/Profile';
import InfoCard from '../components/cards/InfoCard';

const HomeScreen = ({navigation}) => {
  const {isLoading, error, data} = useQuery('ProfileData', getProfileDta);

  return (
    <MainScreen style={styles.container}>
      <Text style={styles.header}>خدمات</Text>
      <ScrollView style={{flex: 1}}>
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
      <View style={{flex: 2}}>
        <Text style={styles.header}>اطلاعات</Text>
        {error && (
          <View>
            <Text>خطا در دریافت اطلاعات</Text>
          </View>
        )}
        {isLoading && (
          <View>
            <Text style={{alignSelf: 'center'}}>دریافت اطلاعات</Text>
          </View>
        )}
        {data && (
          <FlatList
            data={data}
            renderItem={InfoCard}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        )}
      </View>
    </MainScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  gridStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    margin: 2,
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  gridText: {
    fontSize: 18,
    color: 'white',
  },
  header: {
    alignSelf: 'center',
    fontSize: 25,
    backgroundColor: 'lightgray',
    borderRadius: 15,
    marginTop: 5,
    marginHorizontal: 5,
    width: '100%',
    textAlign: 'center',
  },
});
