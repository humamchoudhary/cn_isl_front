import axios from "axios";
import { url } from ".";

export const teacherAuth = async () => {
  const { data } = await axios.get(`${url}/api/teacher/auth`);
  return data.auth;
};
export const teacherLogin = async (body) => {
  const res = axios.post(`${url}/api/teacher/login`, body);

  return res;
};
