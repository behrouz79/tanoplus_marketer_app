import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomText = ({style, children}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Shabnam',
  },
});
