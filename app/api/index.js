import axios from 'axios';

const url = 'https://api.tanoplus.com';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
  get: axios.get,
  post: axios.post,
  url,
};

// axios.interceptors.request.use(request => {
//   console.log('Starting Request', JSON.stringify(request, null, 2));
//   return request;
// });

// axios.interceptors.response.use(response => {
//   console.log('Response:', JSON.stringify(response, null, 2));
//   return response;
// });
