import {getToken} from '../utils/jwt';
import http from './';

let token = async () => {
  return await getToken();
};

export const magiketProductList = async id => {
  try {
    const {data} = await http.get(`${http.url}/magiket/product/list/`);
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

export const magiketOrderList = async () => {
  try {
    const {data} = await http.get(`${http.url}/magiket/order/list/`, {
      headers: {
        Authorization: `Bearer ${await token()}`,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
