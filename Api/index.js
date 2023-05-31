import axios from 'axios';




const client = axios.create({

  baseURL: 'http://10.0.2.2:8080',

});





// Configurações do CORS

client.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Permite todas as origens

client.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,OPTIONS'; // Métodos permitidos

client.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'; // Headers permitidos





export { client }; 