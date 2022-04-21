import React, {useState} from 'react';
import {Modal, Pressable, View, StyleSheet, TextInput} from 'react-native';
import CustomText from '../shared/CustomText';
import {Colors} from '../../constants/colors';
import RowView from '../shared/RowView';
import {magiketOrderCreate} from '../../api/magiket';
import {
  customToast,
  successToast,
  LoadingToast,
  customToastBottom,
} from '../../utils/toasts';
import Toast from 'react-native-tiny-toast';

const MagiketDesModal = ({visible, setVisible, product_id}) => {
  const [description, setDescription] = useState('');

  const sendOrderHandler = async () => {
    if (description.length < 5) {
      return 'توضیحات نمیتواند کمتر از 5 کاراکتر باشد.';
    } else {
      return await magiketOrderCreate({
        product: product_id,
        description: description,
      });
    }
  };

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
            <TextInput
              multiline={true}
              numberOfLines={5}
              placeholder="توضیحات سفارش..."
              placeholderTextColor={Colors.title}
              textAlign="right"
              onChangeText={value => setDescription(value)}
              style={{
                minWidth: '100%',
                color: Colors.title,
              }}
            />
            <RowView>
              <Pressable
                style={[styles.button, styles.buttonClose, {flex: 1}]}
                onPress={() => setVisible(!visible)}>
                <CustomText style={styles.textStyle}>بستن</CustomText>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose, {flex: 3}]}
                onPress={() => {
                  LoadingToast('ثبت سفارش ...');
                  sendOrderHandler().then(res => {
                    if (res.status === 201) {
                      successToast(res.message);
                      setVisible(!visible);
                    } else if (res.status === 400) {
                      customToast(res.message);
                    } else {
                      customToastBottom(res);
                    }
                  });
                  Toast.hide();
                }}>
                <CustomText style={styles.textStyle}>ثبت سفارش</CustomText>
              </Pressable>
            </RowView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MagiketDesModal;

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
});
