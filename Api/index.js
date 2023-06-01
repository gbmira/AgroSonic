import axios from 'axios';
import { useState, useEffect } from "react";

/*
const [ip, setIP] = useState("");


const getData = async () => {
  const res = await axios.get("https://api.ipify.org/?format=json");
  console.log(res.data);
  setIP(res.data.ip);
};
useEffect(() => {
  //passing getData method to the lifecycle method
  console.log(ip)
  getData();
}, []);

*/
const client = axios.create({

  baseURL: 'http://192.168.0.22:8080',

});





// Configurações do CORS

client.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Permite todas as origens

client.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,OPTIONS'; // Métodos permitidos

client.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'; // Headers permitidos





export { client }; 