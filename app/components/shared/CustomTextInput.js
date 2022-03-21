import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Colors} from '../../constants/colors';

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
    backgroundColor: Colors.lightGray,
    width: '90%',
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Shabnam',
    color: Colors.subTitle,
    textAlign: 'right',
  },
});
