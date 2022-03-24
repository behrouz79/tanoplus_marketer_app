import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../shared/CustomText';

const InfoCard = ({item}) => {
  return (
    <View style={styles.gridStyle}>
      <CustomText style={styles.gridText}>{item.name}</CustomText>
      <CustomText style={styles.gridText}>{item.value}</CustomText>
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
