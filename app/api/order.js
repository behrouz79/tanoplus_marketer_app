import {getToken} from '../utils/jwt';
import http from './';

let token = async () => {
  return await getToken();
};

export const orderStatus = async id => {
  try {
    const {data} = await http.get(`${http.url}/order/${id}/`, {
      headers: {
        Authorization: `Bearer ${await token()}`,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
