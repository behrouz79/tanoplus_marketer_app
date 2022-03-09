import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import MainScreen from '../components/shared/MainScreen';
import Login from '../components/Login';
import Verify from '../components/Verify';

const LoginScreen = ({navigation}) => {
  const [userCode, setUserCode] = useState(0);

  return (
    <MainScreen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      {userCode === 0 ? (
        <Login setUserCode={setUserCode} />
      ) : (
        <Verify
          userCode={userCode}
          setUserCode={setUserCode}
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
