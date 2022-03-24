import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import CustomText from '../shared/CustomText';
import {Colors} from '../../constants/colors';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import CustomButton from '../buttons/CustomButton';
import {verify} from '../../api/users';
import Toast from 'react-native-tiny-toast';
import {customToast, successToast} from '../../utils/toasts';
import {setToken} from '../../utils/jwt';
import CustomTextBold from '../shared/CustomTextBold';

const VerifyModal = ({userCode, setVisible, navigation}) => {
  const [code, setCode] = useState('');
  const pinInput = React.createRef();

  const checkCode = async code => {
    if (!code.length < 4) {
      try {
        const data = await verify({user_code: userCode, verify_code: code});
        Toast.hide();
        if (data.status === 200) {
          successToast(data.message);
          await setToken(data.state);
          navigation.replace('Index');
        } else if (data.status === 406) {
          customToast(data.message);
        } else if (data.status === 409) {
          customToast(data.message);
        } else {
          customToast('خطایی رخ داده است.');
        }
      } catch (err) {
        Toast.hide();
        console.log(err);
      }
    }
  };
  return (
    <Modal animationType="slide" transparent={true}>
      <View style={{flex: 1, backgroundColor: Colors.opacityMode}} />
      <View style={styles.modalView}>
        <CustomTextBold style={styles.title}>فقط یه قدم دیگه</CustomTextBold>
        <CustomText style={styles.subTitle}>
          کد ارسال شده به تلفن همراه خود را وارد کنید
        </CustomText>
        <View style={styles.numsContainer}>
          <SmoothPinCodeInput
            ref={pinInput}
            value={code}
            onTextChange={code => setCode(code)}
            onFulfill={checkCode}
            placeholder="0"
            cellStyle={{
              borderWidth: 2,
              borderRadius: 8,
              borderColor: Colors.subTitle,
            }}
            cellStyleFocused={{
              borderColor: Colors.primary,
            }}
            textStyle={{
              color: Colors.subTitle,
              fontFamily: 'Shabnam',
            }}
          />
        </View>
        <View style={{flexDirection: 'row', position: 'absolute', bottom: 24}}>
          <View style={{width: '50%'}}>
            <CustomButton
              btnColor="white"
              textColor={Colors.primary}
              title={'تغییر کد بازاریاب'}
              onPress={() => setVisible(0)}
            />
          </View>
          <View style={{width: '50%'}}>
            <CustomButton title={'تایید کد'} onPress={() => checkCode(code)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default VerifyModal;

const styles = StyleSheet.create({
  numsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 26,
  },
  modalView: {
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: '40%',
    borderTopEndRadius: 32,
    borderTopStartRadius: 32,
  },
  title: {
    fontSize: 20,
    marginTop: 24,
    marginLeft: 24,
    color: Colors.title,
  },
  subTitle: {
    color: Colors.subTitle,
    fontSize: 14,
    textAlign: 'left',
    marginHorizontal: 24,
  },
});
