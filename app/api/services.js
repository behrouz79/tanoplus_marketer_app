import http from './';

export const getCategory = async () => {
  return await http.get('/marketer/category/');
};
