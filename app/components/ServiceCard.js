import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ServiceCard = ({item, modalVisible, setModalVisible, setSelected}) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSelected(item.id);
          setModalVisible(!modalVisible);
        }}>
        <Text>خرید اشتراک</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
