import axios from 'axios'
import {HOST} from './api'

export default class Http{

  static async request(method, url, data){
    // console.log(data);
    const response = await axios.request({
      method,
      url,
      baseURL: HOST,
      params: method === 'GET' ? data : null,
      data: method === 'POST' ? data : null
    });
    return this.isSuccess(response);
  };

  static isSuccess(res){
    if(res.status >= 200 && res.status < 300){
      return res;
    }else{
      this.requestExpection(res);
    }
  };

  static requestExpection(res){
    throw new Error(res);
  };

  static get(url, data){
    return this.request('GET', url, data);
  };

  static post(url, data){
    return this.request('POST', url, data);
  }

}