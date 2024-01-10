import axios from 'axios';
export const API_URL = `https://api.escuelajs.co/api/v1/`;

// https://dummyjson.com/products/1

const instance = axios.create({
  baseURL: API_URL,
});

class Api {
  getInstance() {
    return instance;
  }
  // async getPromo(limit: number = 3) {
  //   try {
  //     const categoryID = 1;
  //     const params = {
  //       offset: 0,
  //       limit: limit,
  //       // updatedAt: {
  //       //   gte: updatedAtFilter,
  //       // },
  //     };
  //     const apiUrl = `categories/${categoryID}/products`;
  //     const response = await instance.get(apiUrl, { params: params });
  //     // console.log(response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async getProductId(id: string) {
    try {
      const response = await instance.get(`/products/${id}`);
      //   console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProduct() {
    try {
      const categoryID = 1;

      const apiUrl = `categories/${categoryID}/products`;
      const response = await instance.get(apiUrl);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

const api = new Api();
export default api;
