import React from 'react';
import {CustomForm, CustomFormField, SubmitButton} from '../components/forms';
import {View} from 'react-native';
import {login} from '../api/users';
import Toast from 'react-native-tiny-toast';
import {successToast, customToast, LoadingToast} from '../utils/toasts';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({
  user_code: Yup.string()
    .required('این فیلد الزامی است.')
    .trim()
    .min(5, 'کد نمیتواند کمتر 5 کاراکتر باشد.')
    .max(5, 'کد نمیتواند بیشتر 5 کاراکتر باشد.'),
});

const Login = ({setUserCode}) => {
  const sendCodeHandler = async values => {
    try {
      const data = await login(values);
      Toast.hide();
      if (data.status === 200) {
        setUserCode(values.user_code);
        successToast(data.message);
        try {
          await AsyncStorage.setItem('user_code', values.user_code);
        } catch (e) {
          // saving error
        }
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
    <CustomForm
      initialValues={{user_code: ''}}
      onSubmit={values => {
        LoadingToast('ارسال کد ...');
        sendCodeHandler(values);
      }}
      validationSchema={validationSchema}>
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
  );
};

export default Login;
