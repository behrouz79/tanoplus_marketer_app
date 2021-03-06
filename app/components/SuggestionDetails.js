import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MainScreen from './shared/MainScreen';
import {useQuery} from 'react-query';
import {getSuggestions} from '../api/Profile';
import SuggestionDetailCard from './cards/SuggestionDetailCard';
import CustomText from './shared/CustomText';

const SuggestionDetails = () => {
  const {isLoading, error, data} = useQuery(
    'SuggestionDetails',
    getSuggestions,
  );

  return (
    <MainScreen>
      {isLoading && (
        <View>
          <CustomText style={styles.text}>درحال بارگزاری</CustomText>
        </View>
      )}
      {error && (
        <View>
          <Text style={styles.text}>دریافت اطلاعات با خطا مواجه شد.</Text>
        </View>
      )}
      {data ? (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={SuggestionDetailCard}
        />
      ) : (
        <View>
          <Text style={styles.text}>سرویسی ثبت نشده.</Text>
        </View>
      )}
    </MainScreen>
  );
};

export default SuggestionDetails;

const styles = StyleSheet.create({
  container: {},
  text: {
    marginTop: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
  },
});
