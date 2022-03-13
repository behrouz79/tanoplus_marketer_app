import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InfoCard = ({item}) => {
  return (
    <View style={styles.gridStyle}>
      <Text style={styles.gridText}>{item.name}</Text>
      <Text style={styles.gridText}>{item.value}</Text>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
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
});
