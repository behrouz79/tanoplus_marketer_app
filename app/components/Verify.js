import React from 'react';
import {CustomForm, CustomFormField, SubmitButton} from '../components/forms';
import * as Yup from 'yup';
import {View} from 'react-native';
import {verify} from '../api/users';
import Toast from 'react-native-tiny-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {successToast, customToast, LoadingToast} from '../utils/toasts';
import CustomButton from './buttons/CustomButton';
import { setToken } from "../utils/jwt";

const validationSchema = Yup.object().shape({
  verify_code: Yup.string()
    .required('این فیلد الزامی است.')
    .trim()
    .min(4, 'کد نمیتواند کمتر 4 کاراکتر باشد.')
    .max(4, 'کد نمیتواند بیشتر 4 کاراکتر باشد.'),
});

const Verify = ({userCode, setUserCode, navigation}) => {
  const sendVerifyCodeHandler = async values => {
    try {
      const data = await verify(values);
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
  };

  return (
    <>
      <CustomForm
        initialValues={{user_code: userCode, verify_code: ''}}
        onSubmit={values => {
          LoadingToast('درحال تایید ...');
          sendVerifyCodeHandler(values);
        }}
        validationSchema={validationSchema}>
        <CustomFormField
          placeholder="کد تایید"
          autoCorrect={false}
          keyboardType="numeric"
          placeholderTextColor="royalblue"
          name="verify_code"
        />
        <View style={{width: '60%'}}>
          <SubmitButton title="تایید کد" />
        </View>
      </CustomForm>
      <View style={{width: '60%'}}>
        <CustomButton title="تغییر کد اختصاصی" onPress={() => setUserCode(0)} />
      </View>
    </>
  );
};

export default Verify;
