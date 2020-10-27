import axios from 'axios';
import baseURL from './base';
// import 'babel-polyfill';

const StudentApi = {
  getAllStudents: async () => {
    const response = await axios.get(`${baseURL}/all`);
    return response.data;
  },
};

export default StudentApi;
