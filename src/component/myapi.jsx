import axios from "axios";

const MyAPI = axios.create({ baseURL: "http://localhost:3034" });

export { MyAPI };
