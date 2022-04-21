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
