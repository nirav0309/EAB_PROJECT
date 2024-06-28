import axios from "axios";

const MyAPI = axios.create({ baseURL: "http://localhost:3034/UserData" });

const MyAPI1 = axios.create({
  baseURL: "http://localhost:3035/CardData",
});

export { MyAPI, MyAPI1 };
