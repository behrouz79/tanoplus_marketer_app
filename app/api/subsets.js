import {getToken} from '../utils/jwt';
import http from './';

let token = async () => {
  return await getToken();
};

export const getSubsets = async () => {
  try {
    const {data} = await http.get(`${http.url}/marketer/subsets/`, {
      headers: {
        Authorization: `Bearer ${await token()}`,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const magiketOrderCreate = async values => {
  try {
    const {data} = await http.post(
      `${http.url}/magiket/order/create/`,
      JSON.stringify(values),
      {
        headers: {
          Authorization: `Bearer ${await token()}`,
        },
      },
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
