import http from './';

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
