import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import MainScreen from '../components/shared/MainScreen';
import Login from '../components/Login';
import VerifyModal from '../components/modals/VerifyModal';

const LoginScreen = ({navigation}) => {
  const [userCode, setUserCode] = useState(0);

  return (
    <MainScreen style={styles.container}>
      <Login setUserCode={setUserCode} />
      {userCode !== 0 && (
        <VerifyModal
          userCode={userCode}
          setVisible={setUserCode}
          navigation={navigation}
        />
      )}
    </MainScreen>
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
