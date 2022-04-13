import jwt from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkToken = async () => {
  let token = await getToken();
  if (token) {
    const data = jwt(token);
    return data.exp * 1000 >= Date.now();
  } else {
    return false;
  }
};

export const getUserId = async () => {
  let token = await getToken();
  if (token) {
    const data = jwt(token);
    return data.user_id;
  } else {
    return 0;
  }
};

export const getToken = async () => {
  return await AsyncStorage.getItem('token');
};

export const setToken = async token => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (e) {
    // saving error
  }
};
