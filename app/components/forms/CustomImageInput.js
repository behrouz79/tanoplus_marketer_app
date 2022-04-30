import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import {useFormikContext} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomText from '../shared/CustomText';
import {Colors} from '../../constants/colors';
const CustomImageInput = ({title, setImage, image, style, ...otherProps}) => {
  const {setFieldValue} = useFormikContext();

  const picker = async () => {
    if (image === '') {
      let new_image = await ImagePicker.openPicker({
        cropping: true,
        compressImageQuality: 0.5,
        includeBase64: true,
      });
      setFieldValue(title, new_image);
      setImage(new_image.path);
    } else {
      setFieldValue(title, '');
      setImage('');
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={picker}
      {...otherProps}>
      <ImageBackground
        style={styles.bg}
        source={
          image === ''
            ? {
                uri: 'https://tanoplus.s3.ir-thr-at1.arvanstorage.com/noimage.jpg?AWSAccessKeyId=3e86eb8c-debf-43ad-8119-38ba993b8831&Signature=IYq%2FFct%2BF%2FQtxeM3e37QoAMbHZo%3D&Expires=1646845707',
              }
            : {uri: image}
        }>
        <Icon
          name="edit"
          size={30}
          color={Colors.primary}
          style={styles.title}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CustomImageInput;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
    margin: 10,
    alignSelf: 'center',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
  },
});
