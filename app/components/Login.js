import React from 'react';
import {CustomForm, CustomFormField, SubmitButton} from '../components/forms';
import {StyleSheet, View} from 'react-native';
import {login} from '../api/users';
import Toast from 'react-native-tiny-toast';
import {successToast, customToast, LoadingToast} from '../utils/toasts';
import * as Yup from 'yup';
import {Colors} from '../constants/colors';
import CustomText from './shared/CustomText';
import MainScreen from './shared/MainScreen';
import CustomTextBold from './shared/CustomTextBold';

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
    <MainScreen style={styles.container}>
      <CustomTextBold style={styles.title}>سلام رفیق</CustomTextBold>
      <CustomText style={styles.subTitle}>
        برای وارد شدن لطفا کد بازاریابی خود را وارد کن
      </CustomText>
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
          name="user_code"
        />
        <View style={styles.submitBtn}>
          <SubmitButton title="ورود" />
        </View>
      </CustomForm>
    </MainScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
  },
  subTitle: {
    color: Colors.subTitle,
    fontSize: 14,
    textAlign: 'left',
    marginHorizontal: 24,
  },
  title: {
    color: Colors.title,
    fontSize: 20,
    textAlign: 'left',
    marginHorizontal: 24,
  },
  submitBtn: {
    marginHorizontal: 114,
  },
});
