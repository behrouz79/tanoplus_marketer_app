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

const CustomModal = ({visible, setVisible, onPress, data}) => {
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
                data.data.map(item => (
                  <TouchableOpacity
                    key={item.title}
                    onPress={() => onPress(item.id)}>
                    <Text style={styles.modalText}>{item.title}</Text>
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
              onPress={() => setVisible(!visible)}>
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
  container: {
    backgroundColor: 'lightgray',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: '100%',
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
  buttonOpen: {
    backgroundColor: '#F194FF',
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
  containerImage: {
    flex: 1,
    width: '90%',
    margin: 10,
    alignSelf: 'center',
    backgroundColor: '#04b040',
    borderRadius: 15,
    shadowColor: '#E67E22',
    shadowOpacity: 0.8,
    elevation: 8,
    height: 100,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  job: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 25,
    width: '80%',
    alignSelf: 'center',
  },
});
