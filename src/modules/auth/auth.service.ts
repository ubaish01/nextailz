import Request from "@/request/request";
import { API_URLS } from "./constant";

class AuthService {
  request: Request;
  constructor() {
    this.request = new Request();
  }

  login = (body: Record<string, any>) => {
    return this.request.post(API_URLS.LOGIN, body);
  };

  signup = (body: Record<string, any>) => {
    return this.request.post(API_URLS.SIGNUP, body);
  };
}

export default AuthService;
