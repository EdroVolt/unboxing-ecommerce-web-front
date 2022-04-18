import axios from "axios";

const Unboxing = axios.create({
  baseURL: "http://localhost:8080",
});

export default Unboxing;
