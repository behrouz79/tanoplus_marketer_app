import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native';
import CustomText from '../shared/CustomText';
import ShowPhoneModal from '../modals/ShowPhoneModal';

const ServiceCard = ({item, modalVisible, setModalVisible, setSelected}) => {
  const [phoneVisible, setPhoneVisible] = useState(false);
  return (
    <>
      <ShowPhoneModal
        visible={phoneVisible}
        setVisible={setPhoneVisible}
        phone={item.phone}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelected(item.id);
            setPhoneVisible(!phoneVisible);
          }}>
          <CustomText>{item.name}</CustomText>
        </TouchableOpacity>
        <CustomText>انقضا: {item.expire_time / 86400} روز</CustomText>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelected(item.id);
            setModalVisible(!modalVisible);
          }}>
          <CustomText>خرید اشتراک</CustomText>
        </TouchableOpacity>
      </View>
    </>
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
