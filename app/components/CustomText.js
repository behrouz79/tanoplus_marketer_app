import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';

const CustomText = ({style, children}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Shabnam',
    color: Colors.title,
  },
});
