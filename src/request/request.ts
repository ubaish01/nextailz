import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class Request {
  AxiosInstance: any;

  constructor() {
    this.AxiosInstance = axios.create({
      timeout: 5 * 1000, // 5 seconds
      baseURL: `${BASE_URL}/api`,
    });
  }

  getToken = () => {
    return localStorage.getItem("jwt");
  };

  get = async (url: string, params?: Record<string, any>) => {
    const token = this.getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
      const res = await this.AxiosInstance({
        method: "get",
        url,
        headers,
        params,
      });

      return res;
    } catch (error: any) {
      console.log(error);
    }
  };

  post = async (url: string, data: Record<string, any>) => {
    const token = this.getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
      return await this.AxiosInstance({
        method: "post",
        url,
        headers,
        data: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  patch = async (url: string, data: any = {}) => {
    const token = this.getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
      return await this.AxiosInstance({
        method: "patch",
        url,
        headers,
        data: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  put = async (url: string, data: any = {}) => {
    const token = this.getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
      return await this.AxiosInstance({
        method: "put",
        url,
        headers,
        data: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  delete = async (url: string, params?: Record<string, any>) => {
    const token = this.getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
      return await this.AxiosInstance({
        method: "delete",
        url,
        headers,
        params,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
}

export default Request;
