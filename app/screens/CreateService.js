import React from "react";
import ImagePicker from 'react-native-image-picker';
import MainScreen from "../components/shared/MainScreen";


const CreateService = () => {
  ImagePicker.showImagePicker(options, res => {

    console.log('Response = ', res);

    if (res.didCancel) {

      console.log('User cancelled image picker');

    } else if (res.error) {

      console.log('ImagePicker Error: ', res.error);

    } else if (res.customButton) {

      console.log('User tapped custom button: ', res.customButton);

      alert(res.customButton);

    } else {

      let source = res;

      this.setState({

        resourcePath: source,

      });

    }

  });

};

  return(
    <MainScreen>

    </MainScreen>
  )
}

export default CreateService;
