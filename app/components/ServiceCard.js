import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from './CustomText';

const ServiceCard = ({item, modalVisible, setModalVisible, setSelected}) => {
  return (
    <View style={styles.container}>
      <CustomText>{item.name}</CustomText>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSelected(item.id);
          setModalVisible(!modalVisible);
        }}>
        <CustomText>خرید اشتراک</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
