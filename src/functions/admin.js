import axios from "axios";
import { url } from ".";

export const adminAuth = async () => {
  const { data } = await axios.get(`${url}/api/admin/auth`);
  return data.auth;
};
export const adminLogin = async (body) => {
  const res = axios.post(`${url}/api/admin/login`, body);
  if (res) {
    console.log(res);
    if (res) {
      console.log(res.status);
      if (res.status == 200) {
        //  push("/");
        console.log("suc");
      } else {
        console.log("err");

        //  setHasError(res.data.error);
        //  setError(res.data.message);
      }
    }
  }
  return res;
};
