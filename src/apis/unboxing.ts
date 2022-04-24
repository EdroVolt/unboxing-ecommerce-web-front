import axios from "axios";

const Unboxing = axios.create({
  baseURL: "https://unboxingjs.herokuapp.com/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token") || "",
    // 'Content-Type': 'multipart/form-data'
  },
});

export default Unboxing;
