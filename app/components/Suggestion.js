import React from 'react';
import {CustomForm, CustomFormField, SubmitButton} from './forms';
import {customToast, LoadingToast, successToast} from '../utils/toasts';
import {View, StyleSheet, ScrollView} from 'react-native';
import MainScreen from './shared/MainScreen';
import * as Yup from 'yup';
import {sendSuggestion} from '../api/Profile';
import Toast from 'react-native-tiny-toast';

const validationSchema = Yup.object().shape({
  subject: Yup.string()
    .required('این فیلد الزامی است.')
    .trim()
    .min(5, 'موضوع نمیتواند کمتر 5 کاراکتر باشد.')
    .max(149, 'موضوع نمیتواند بیشتر 149 کاراکتر باشد.'),
  message: Yup.string()
    .required('این فیلد الزامی است.')
    .trim()
    .min(5, 'پیغام نمیتواند کمتر 5 کاراکتر باشد.'),
});

const Suggestion = ({navigation}) => {
  const sendMessage = async values => {
    try {
      LoadingToast('ارسال ...');
      const res = await sendSuggestion(values);
      Toast.hide();
      if (res?.status) {
        successToast(res.message);
        navigation.goBack();
      } else {
        customToast('ارسال با خطا مواجه شد.');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView>
      <MainScreen style={styles.container}>
        <CustomForm
          initialValues={{subject: '', message: ''}}
          onSubmit={values => sendMessage(values)}
          validationSchema={validationSchema}>
          <CustomFormField
            placeholder="موضوع"
            autoCorrect={false}
            placeholderTextColor="royalblue"
            name="subject"
          />
          <CustomFormField
            placeholder="متن پیغام"
            autoCorrect={false}
            placeholderTextColor="royalblue"
            name="message"
            multiline={true}
            numberOfLines={10}
          />
          <View style={{width: '60%'}}>
            <SubmitButton title="ارسال" />
          </View>
        </CustomForm>
      </MainScreen>
    </ScrollView>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
