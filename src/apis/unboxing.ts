import axios from "axios";

const Unboxing = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token") || "",
    // 'Content-Type': 'multipart/form-data'
  },
});

export default Unboxing;
