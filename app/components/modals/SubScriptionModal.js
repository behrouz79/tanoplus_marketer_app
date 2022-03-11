import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SubScriptionModal = ({visible, setVisible, onPressButton}) => {
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
            <TouchableOpacity
              onPress={() => onPressButton('3 ماهه', 5)}
              style={styles.title}>
              <Text style={styles.modalText}>3 ماهه</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('6 ماهه', 3)}>
              <Text style={styles.modalText}>6 ماهه</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('12 ماهه', 4)}>
              <Text style={styles.modalText}>12 ماهه</Text>
            </TouchableOpacity>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisible(!visible)}>
              <Text style={styles.textStyle}>بستن دسته بندی</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SubScriptionModal;

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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
