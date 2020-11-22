import axios from "axios";

//console.log(process.env.API);
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 9000,
});

export const post_example = async (user) => {
  const url = "api/examples";
  return await axiosInstance
    .post(url, user)
    .then((response) => response.data)
    .catch((error) => error.response.data);
};
