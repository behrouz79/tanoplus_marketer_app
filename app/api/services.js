import http from './';
import {getToken} from '../utils/jwt';

let token = async () => {
  return await getToken();
};

export const createServiceApi = async body => {
  try {
    const {data} = await http.post(`${http.url}/service/marketer/add/`, body, {
      headers: {
        Authorization: `Bearer ${await token()}`,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCategory = async () => {
  try {
    return await http.get(`${http.url}/marketer/category/`);
  } catch (e) {
    console.log(e);
  }
};

export const getSubCategory = async id => {
  try {
    return await http.get(`${http.url}/marketer/subcategory/${id}/`);
  } catch (e) {
    console.log(e);
  }
};

export const getProvince = async () => {
  try {
    return await http.get(`${http.url}/service/province/`);
  } catch (e) {
    console.log(e);
  }
};

export const getCity = async id => {
  try {
    return await http.get(`${http.url}/service/city/${id}/`);
  } catch (e) {
    console.log(e);
  }
};

export const getServices = async () => {
  try {
    return await http.get(`${http.url}/marketer/services/`, {
      headers: {
        Authorization: `Bearer ${await token()}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const buySubscription = async (service_id, subscription_id) => {
  try {
    return await http.post(
      `${http.url}/marketer/service/buy/`,
      {service_id: service_id, subscription_id: subscription_id},
      {
        headers: {
          Authorization: `Bearer ${await token()}`,
        },
      },
    );
  } catch (e) {
    console.log(e);
  }
};
