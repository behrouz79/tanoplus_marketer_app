import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CardButton = ({style, onPress, title}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
