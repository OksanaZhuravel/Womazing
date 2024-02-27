import axios from 'axios';
export const API_URL = `https://api.escuelajs.co/api/v1/`;
// 
// https://dummyjson.com/products/1
// export const API_URL = `http://localhost:1337`;
const instance = axios.create({
  baseURL: API_URL,
});

class Api {
  getInstance() {
    return instance;
  }

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

  //  async sendEmail(email: string, source: string, formattedDate: any) {
  //   try {
  //     const response = await instance.post("/api/email", {
  //       to: "contact.pay.tech@gmail.com",
  //       from: "contact.pay.tech@gmail.com",
  //       subject: "New Lead from ContactPay’s website",
  //       html: `
  //           <h2>New lead form submission from the website</h2>
  //           <p>Please contact the potential client:</p>
  //           <p>Source: ${source}</p>
  //           <p>Email: ${email}</p>
  //           <p>Request time: ${formattedDate}</p>
  //         `,
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

const api = new Api();
export default api;
