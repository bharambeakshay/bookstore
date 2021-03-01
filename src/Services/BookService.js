/** @format */

import AxiosService from "./AxiosService";

const baseUrl = process.env.REACT_API_USER_URL;

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("Token"),
  },
};

class BookService {
  constructor() {
    this.AxiosService = new AxiosService();
  }

  getBooks = () => {
    let url = baseUrl.concat("/get/book");
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Token"),
      },
    };
    return this.AxiosService.get(url, true, header);
  };


  //dummy  urls from swagger arranged them as per axios

  addToCart = (id) => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Post(`${baseUrl}/add_cart_item/${id}`, false, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  getCartItem = () => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Get(`${baseUrl}/get_cart_items`, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  addOrder = (data) => {
    const user = localStorage.getItem("bookStoreToken")
    console.log(data);
    return axios.Post(`${baseUrl}/add/order`, data, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  deleteCartItem = (id) => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Delete(`${baseUrl}/remove_cart_item/${id}`, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  }

}
export default new BookService