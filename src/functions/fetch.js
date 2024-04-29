import axios from "axios";

const URL = "http://localhost:8000";

async function makeRequest(endpoint, data, method, headers = {}) {
  const reqUrl = URL + endpoint;
  let response;
  const req = axios.create({
    baseURL: URL,
    withCredentials: true,
    crossorigin: true,
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
    },
  });
  switch (method) {
    case "GET":
      response = await axios.get(reqUrl, {
        withCredentials: true,
        headers: {
          ...headers,
          "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
        },
      });

      // response = await req.get(endpoint);
      break;

    case "POST":
      response = await axios.post(reqUrl, {
        withCredentials: true,
        headers: {
          ...headers,
          "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
        },

        data: data,
      });
      try {
        // response = await req.post(endpoint, data);
      } catch (error) {
        response = error.response;
      }

      break;

    default:
      break;
  }
  return response;
}

export async function post(endpoint, data, headers = {}) {
  return await makeRequest(endpoint, data, "POST", headers);
}
export async function get(endpoint, headers = {}) {
  return await makeRequest(endpoint, {}, "GET", headers);
}

export default makeRequest;
