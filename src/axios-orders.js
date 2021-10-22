import axios from "axios";

const instance = axios.create({
  baseURL: "https://myburgerapp-9be88-default-rtdb.firebaseio.com/",
});

export default instance;
