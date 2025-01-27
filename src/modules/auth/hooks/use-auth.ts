import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AuthService from "../auth.service";

type UserStore = {
  user: any;
  isLogin: boolean;
  login: (data: LoginData, onSuccess?: any, onFailure?: any) => void;
};

type LoginData = {
  email: string;
  password: string;
};

const auth = new AuthService();

const login = async (
  set: any,
  data: LoginData,
  onSuccess?: any,
  onFailure?: any
) => {
  set({ isLoading: true });
  try {
    const res = await auth.login({
      username: data.email,
      password: data.password,
    });
    console.log(res);

    if (res?.status === 200) {
      console.log({ name: res.data.data.name, email: res.data.data.email });
      console.log({ name: res.data.data.name, email: res.data.data.email });
      set({
        isLogin: true,
        user: { name: res.data.data.name, email: res.data.data.email },
      });
      alert("Logged in successfully");
      localStorage.setItem("jwt", res.data.tokens?.accessToken);
      onSuccess();
    } else {
      onFailure();
      console.log(res);
    }
  } catch (error: any) {
    console.error("Error during login:", error);
  } finally {
    set({ isLoading: false });
  }
};

const useAuth = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      isLogin: false,
      setUser: (userData: any) => {
        set({ user: userData });
      },
      setIsLogin: (status: boolean) => {
        set({ isLogin: status });
      },
      login: (data: LoginData, onSuccess?: any, onFailure?: any) =>
        login(set, data, onSuccess, onFailure),
      reset: () => {
        set({ user: null, isLogin: false });
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuth;
