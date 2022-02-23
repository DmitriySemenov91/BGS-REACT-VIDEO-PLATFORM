import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/Authorization/RefreshToken`,
          { withCredentials: true }
        );
        // @ts-ignore
        localStorage.setItem("token", response.data.AuthorizationToken.Token);
        return axios.request(originalRequest);
      } catch (e) {
        console.log("401 not auth");
      }
    }
  }
);
