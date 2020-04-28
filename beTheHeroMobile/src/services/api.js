import axios from 'axios';

const api = axios.create({
  //SEMPRE ALTERAR PARA O IP DE SUA MÁQUINA NO MOMENTO EM QUE FOR TESTAR, será implementada uma função js para pegar o ip automaticamente.
  baseURL: 'http://192.168.0.19:19000'
});

export default api;