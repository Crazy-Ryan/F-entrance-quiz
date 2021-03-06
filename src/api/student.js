import axios from 'axios';
import baseURL from './base';

const StudentApi = {
  getAllStudents: async () => {
    const response = await axios.get(`${baseURL}/all`);
    return response.data;
  },

  getStudentGroups: async () => {
    const response = await axios.get(`${baseURL}/groups`);
    return response.data;
  },
};

export default StudentApi;
