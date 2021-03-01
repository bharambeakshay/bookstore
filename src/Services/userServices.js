import AxiosService from './AxiosService';
const baseurl = "https://backend-bookstore.herokuapp.com/bookstore_user";
const token = localStorage.getItem('Token');

const header = {
  headers: {
    "Content-Type": 'application/json',
    "Authorization": localStorage.getItem('Token')
  }
}

class UserServices {
  constructor() {
    this.AxiosService = new AxiosService();
  }

  userRegistration = (Data) => {
    let headers = {};
    console.log(header);
    let url = baseurl.concat(`/registration`);
    return this.AxiosService.post(url, Data, true, headers);
  }
  userLogin = (Data) => {
    let headers = {};
    console.log(header);
    let url = baseurl.concat(`/login`);
    return this.AxiosService.post(url, Data, true, headers);
  }


  
}
export default new UserServices();