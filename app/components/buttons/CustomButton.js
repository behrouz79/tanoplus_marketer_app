import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/colors';

const CustomButton = ({
  title,
  onPress,
  btnColor = Colors.primary,
  textColor = 'white',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: btnColor}]}
      onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '90%',
    marginVertical: 5,
    alignSelf: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  text: {
    fontFamily: 'Shabnam',
    fontSize: 14,
  },
});
