import {getToken} from '../utils/jwt';
import http from './';

let token = async () => {
  return await getToken();
};

export const sendSuggestion = async body => {
  try {
    const {data} = await http.post(`${http.url}/marketer/suggestion/`, body, {
      headers: {
        Authorization: `Bearer ${await token()}`,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getSuggestions = async () => {
  try {
    const {data} = await http.get(`${http.url}/marketer/suggestion/`, {
      headers: {
        Authorization: `Bearer ${await token()}`,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getProfileDta = async () => {
  try {
    const {data} = await http.get(`${http.url}/marketer/info/`, {
      headers: {
        Authorization: `Bearer ${await token()}`,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
