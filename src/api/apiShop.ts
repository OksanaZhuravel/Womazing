
import axios from 'axios';
import { CategoryData, ColorData, SizeData, ImageData, CouponsData, formDataProps } from '../types/types';
import { defaultCoupon } from './defolt';
export const API_URL = `https://womazing-server.onrender.com/`;
// export const API_URL = `http://localhost:1337`;

const instance = axios.create({
  baseURL: API_URL,
});

class Api {
  getInstance() {
    return instance;
  }
  async getAllProduct() {
    try {
      const response = await instance.get(`/api/products`, {
        params: {
          populate: ["images", "categories", "sizes", "colors", "news"],
        }
      });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async getAllCategories() {
    try {
      const response = await instance.get(`/api/categories`, {
        params: {
          populate: '*',
        }
      });
      if (!Array.isArray(response.data.data)) {
        throw new Error('Response data is not an array');
      }
      const categories = response.data.data.map(({ id, attributes }: CategoryData) => ({
        id,
        name: attributes.name
      }));
      return categories;
    } catch (error) {
      console.log(error);
    }
  }
  async getProductId(id: number) {
    try {
      const response = await instance.get(`/api/products/${id}`, {
        params: {
          populate: ["images", "categories", "sizes", "colors", "news"],
        }
      });
      const { attributes: { title, diccort, price, description, quantity } } = response.data.data;
      const categories = response.data.data.attributes.categories.data.map((category: CategoryData) => category.attributes.name);
      const colors = response.data.data.attributes.colors.data.map((color: ColorData) => ({
        name: color.attributes.name,
        value: color.attributes.value,
      }));
      const images = response.data.data.attributes.images.data.map((images: ImageData) => images.attributes.url);
      const sizes = response.data.data.attributes.sizes.data.map((size: SizeData) => size.attributes.name);
      const news = response.data.data.attributes.news.data.length > 0 ? response.data.data.attributes.news.data[0].attributes.New : false;
      // console.log(id, title, diccort, price, description, quantity, categories, colors, images, sizes, news);
      return { id, title, diccort, price, description, quantity, categories, colors, images, sizes, news };
    } catch (error) {
      console.log(error);
    }
  }
  async getCoupons() {
    try {
      const response = await instance.get(`/api/coupons`);
      const responseData = response.data.data.map(({ attributes }: { attributes: CouponsData }) => ({
        item: attributes.item,
        sale: attributes.sale,
      }));
      // console.log(responseData);
      return responseData;
    } catch (error) {
      console.log(error);
      return defaultCoupon
    }
  }

  async postEmails(formData: formDataProps) {
    try {
      const response = await instance.post("/api/SendEmail", {
        data: {
          to: "1144827@gmail.com",
          from: "1144827@gmail.com",
          subject: "Заказать обратный звонок с WOMAZING",
          html: `
          <h2>Заказать обратный звонок с WOMAZING</h2>
          <p>Имя: ${formData.name}</p>
          <p>Email: ${formData.email}</p>
          <p>Телефон для связи: ${formData.phone}</p>
        `,
        },
      });
      // console.log(response);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

}
const api = new Api();
export default api;
