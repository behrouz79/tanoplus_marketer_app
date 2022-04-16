import React from 'react';
import {Modal, Pressable, StyleSheet, View} from 'react-native';
import CustomText from '../shared/CustomText';

const ShowPhoneModal = ({visible, setVisible, phone}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomText style={styles.modalText}>{phone}</CustomText>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisible(!visible)}>
              <CustomText style={styles.textStyle}>X</CustomText>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ShowPhoneModal;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  modalText: {
    backgroundColor: 'lightgray',
    marginBottom: 3,
    textAlign: 'center',
    padding: 10,
    minWidth: '100%',
    borderRadius: 15,
    fontSize: 15,
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
  },
});
