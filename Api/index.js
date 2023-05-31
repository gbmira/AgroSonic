import axios from 'axios';




const client = axios.create({

  baseURL: 'http://192.168.15.11:8080',

});





// Configurações do CORS

client.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Permite todas as origens

client.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,OPTIONS'; // Métodos permitidos

client.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'; // Headers permitidos





export { client }; 