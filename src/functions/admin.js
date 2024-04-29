import axios from "axios";
export const adminAuth = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/admin/auth`);
  return data.auth;
};
