import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SuggestionDetailCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.subject}</Text>
      <Text style={styles.text}>{item.seen ? 'خوانده شده' : 'خوانده نشده'}</Text>
    </View>
  );
};

export default SuggestionDetailCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  seen: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  text: {},
});
