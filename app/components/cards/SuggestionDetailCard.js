import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../shared/CustomText';

const SuggestionDetailCard = ({item}) => {
  return (
    <View style={styles.container}>
      <CustomText>{item.subject}</CustomText>
      <CustomText>{item.seen ? 'خوانده شده' : 'خوانده نشده'}</CustomText>
    </View>
  );
};

export default SuggestionDetailCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  seen: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
