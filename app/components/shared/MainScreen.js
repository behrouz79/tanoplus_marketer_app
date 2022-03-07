import React from 'react';
import {View, StyleSheet} from 'react-native';

const MainScreen = ({children, style}) => {
  return <View style={[styles.screen, style]}>{children}</View>;
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
