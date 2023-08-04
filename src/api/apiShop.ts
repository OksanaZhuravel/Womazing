import axios from 'axios';
export const API_URL = `https://api.escuelajs.co/api/v1/`;
const instance = axios.create({
  baseURL: API_URL,
});
class Api {
  getInstance() {
    return instance;
  }
  async getAll() {
    try {
      const response = await instance.get('products?offset=0&limit=3');
	//   console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
    async getProductId(id:number) {
    try {
      const response = await instance.get(`/products/${id}`);
	//   console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

const api = new Api();
export default api;