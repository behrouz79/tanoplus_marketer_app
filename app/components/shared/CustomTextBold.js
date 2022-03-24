import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const CustomTextBold = ({style, children}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default CustomTextBold;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Shabnam-Bold',
    color: Colors.title,
  },
});
