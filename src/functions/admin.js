import axios from "axios";
export const adminAuth = async () => {
  const { data } = await axios.get(`/api/admin/auth`);
  return data.auth;
};
