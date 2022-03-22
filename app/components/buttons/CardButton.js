import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const CardButton = ({style, onPress, title, icon, description, children}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {children}
      {console.log(children)}
      <Text style={styles.title}>{title}</Text>
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
