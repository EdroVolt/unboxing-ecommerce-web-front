import axios from "axios";

const Unboxing = axios.create({
  baseURL: process.env.REACT_APP_UNBOXING_URL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token") || "",
    // 'Content-Type': 'multipart/form-data'
  },
});

export default Unboxing;
