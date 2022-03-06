import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const CustomTextInput = ({...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text} {...otherProps} />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: 'lightgray',
    width: '90%',
    borderRadius: 15,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Shabnam',
    textAlign: 'center',
  },
});
