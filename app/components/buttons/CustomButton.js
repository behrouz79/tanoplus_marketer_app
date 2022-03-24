import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/colors';
import CustomText from '../shared/CustomText';

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
      <CustomText style={[styles.text, {color: textColor}]}>{title}</CustomText>
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
    fontSize: 14,
  },
});
