import React from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CustomModal = ({
  visible,
  setVisible,
  onPressButton,
  data,
  onPressClose,
}) => {
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
            <ScrollView style={{marginBottom: 20}}>
              {data ? (
                data.map(item => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => onPressButton(item)}>
                    <Text style={styles.modalText}>
                      {item.title ? item.title : item.name}
                    </Text>
                  </TouchableOpacity>
                ))
              ) : (
                <View>
                  <Text>loading</Text>
                </View>
              )}
            </ScrollView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onPressClose}>
              <Text style={styles.textStyle}>بستن دسته بندی</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;

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
    height: '80%',
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
    flex: 1,
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
