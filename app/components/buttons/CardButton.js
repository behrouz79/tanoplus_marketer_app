import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import CustomText from '../CustomText';

const CardButton = ({style, onPress, title, children}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {children}
      <CustomText style={styles.title}>{title}</CustomText>
    </TouchableOpacity>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
    width: '50%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
