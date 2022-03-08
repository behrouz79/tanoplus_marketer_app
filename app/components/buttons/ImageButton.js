import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';

const ImageButton = ({title, setImage, image}) => {
  const picker = async () => {
    if (image == null) {
      let image = await ImagePicker.openPicker({
        cropping: true,
        compressImageQuality: 0.5,
      });
      console.log(image.path);
      setImage(image.path);
    } else {
      setImage(null);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={picker}>
      <ImageBackground
        style={styles.bg}
        source={
          image == null
            ? {
                uri: 'https://tanoplus.s3.ir-thr-at1.arvanstorage.com/noimage.jpg?AWSAccessKeyId=3e86eb8c-debf-43ad-8119-38ba993b8831&Signature=IYq%2FFct%2BF%2FQtxeM3e37QoAMbHZo%3D&Expires=1646845707',
              }
            : {uri: image}
        }>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ImageButton;

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
    fontWeight: 'bold',
  },
});
