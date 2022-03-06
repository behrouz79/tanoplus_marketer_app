import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CustomButton from './../components/CustomButton';
import * as Yup from 'yup';
import CustomTextInput from '../components/CustomTextInput';
import {login, verify} from '../api/users';
import Toast from 'react-native-tiny-toast';
import {successToast, customToast, LoadingToast} from '../utils/toasts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomForm, CustomFormField, SubmitButton} from '../components/forms';
import Screen from '../components/shared/Screen';

const validationSchema_code = Yup.object().shape({
  user_code: Yup.string()
    .required('این فیلد الزامی است.')
    .trim()
    .min(5, 'کد نمیتواند کمتر 5 کاراکتر باشد.')
    .max(5, 'کد نمیتواند بیشتر 5 کاراکتر باشد.'),
});

const validationSchema_verify_code = Yup.object().shape({
  verify_code: Yup.string()
    .required('این فیلد الزامی است.')
    .trim()
    .min(4, 'کد نمیتواند کمتر 4 کاراکتر باشد.')
    .max(4, 'کد نمیتواند بیشتر 4 کاراکتر باشد.'),
});

const LoginScreen = () => {
  const [userCode, setUserCode] = useState(0);

  const sendCodeHandler = async values => {
    try {
      const data = await login(values);
      Toast.hide();
      if (data.status === 200) {
        setUserCode(values.user_code);
        successToast(data.message);
      } else if (data.status === 409) {
        customToast(data.message);
      } else {
        customToast('خطایی رخ داده است.');
      }
    } catch (err) {
      Toast.hide();
      console.log(err);
    }
  };

  const sendVerifyCodeHandler = async values => {
    try {
      const data = await verify(values);
      Toast.hide();
      if (data.status === 200) {
        successToast(data.message);
        try {
          await AsyncStorage.setItem('user_code', JSON.stringify(userCode));
        } catch (e) {
          // saving error
        }
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
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      {userCode === 0 ? (
        <CustomForm
          initialValues={{user_code: ''}}
          onSubmit={values => {
            LoadingToast('ارسال کد ...');
            sendCodeHandler(values);
          }}
          validationSchema={validationSchema_code}>
          <CustomFormField
            placeholder="کد بازاریابی"
            autoCorrect={false}
            keyboardType="numeric"
            placeholderTextColor="royalblue"
            name="user_code"
          />
          <View style={{width: '60%'}}>
            <SubmitButton title="ارسال کد تایید" />
          </View>
        </CustomForm>
      ) : (
        <>
          <CustomForm
            initialValues={{user_code: userCode, verify_code: ''}}
            onSubmit={values => {
              LoadingToast('درحال تایید ...');
              sendVerifyCodeHandler(values);
            }}
            validationSchema={validationSchema_verify_code}>
            <>
              <CustomTextInput
                placeholder="کد تایید"
                autoCorrect={false}
                keyboardType="numeric"
                placeholderTextColor="royalblue"
                name="verify_code"
              />
              <View style={{width: '60%'}}>
                <SubmitButton title="تایید کد" />
              </View>
            </>
          </CustomForm>
          <View style={{width: '60%'}}>
            <CustomButton
              title="تغییر کد اختصاصی"
              onPress={() => setUserCode(0)}
            />
          </View>
        </>
      )}
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    position: 'absolute',
    top: 10,
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  textInput: {
    width: '80%',
    height: 50,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'Shabnam',
    fontSize: 18,
    marginBottom: 15,
  },
});
