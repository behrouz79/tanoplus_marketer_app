import React, {useState} from 'react';
import MainScreen from '../components/shared/MainScreen';
import ImageButton from '../components/buttons/ImageButton';
import {useQuery} from 'react-query';
import {
  ScrollView,
  StyleSheet,
  Modal,
  Text,
  Button,
  View,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import CustomButton from '../components/buttons/CustomButton';
import {getCategory} from '../api/services';

const CreateService = () => {
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const {isLoading, error, data} = useQuery('category', getCategory());
  return (
    <MainScreen style={styles.container}>
      {data && console.log(data)}
      {/*<ScrollView>*/}
      {/*  <ImageButton title="لوگو" setImage={setLogo} image={logo} />*/}
      {/*  <ImageButton title="بنر" setImage={setBanner} image={banner} />*/}
      {/*  <CustomButton*/}
      {/*    title="انتخاب دسته بندی"*/}
      {/*    onPress={() => setModalVisible(true)}*/}
      {/*  />*/}
      {/*</ScrollView>*/}

      {/*<View style={styles.centeredView}>*/}
      {/*  <Modal*/}
      {/*    animationType="slide"*/}
      {/*    transparent={true}*/}
      {/*    visible={modalVisible}*/}
      {/*    onRequestClose={() => {*/}
      {/*      console.log(data);*/}
      {/*      setModalVisible(!modalVisible);*/}
      {/*    }}>*/}
      {/*    <View style={styles.centeredView}>*/}
      {/*      <View style={styles.modalView}>*/}
      {/*        <Text style={styles.modalText}>Hello World!</Text>*/}
      {/*        <Pressable*/}
      {/*          style={[styles.button, styles.buttonClose]}*/}
      {/*          onPress={() => setModalVisible(!modalVisible)}>*/}
      {/*          <Text style={styles.textStyle}>Hide Modal</Text>*/}
      {/*        </Pressable>*/}
      {/*      </View>*/}
      {/*    </View>*/}
      {/*  </Modal>*/}
      {/*</View>*/}
    </MainScreen>
  );
};

export default CreateService;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    marginBottom: 15,
    textAlign: 'center',
  },
});
