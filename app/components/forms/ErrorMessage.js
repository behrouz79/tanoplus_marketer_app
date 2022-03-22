import React from 'react';
import {StyleSheet} from 'react-native';
import CustomText from '../CustomText';

const ErrorMessage = ({error, visible}) => {
  if (!visible || !error) {
    return null;
  }
  return <CustomText style={styles.error}>{error}</CustomText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});
