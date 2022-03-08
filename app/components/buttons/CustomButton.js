import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({title, onPress, color = 'tomato'}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'tomato',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '90%',
    marginVertical: 5,
    alignSelf: 'center'
  },
  text: {
    color: 'white',
    fontFamily: 'Shabnam',
    fontSize: 18,
  },
});
