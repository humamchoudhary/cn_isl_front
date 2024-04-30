import axios from "axios";
import { url } from ".";

export const getResData = async () => {
  const { data } = await axios.get(`${url}/api/res/`);
  return data.data;
};
