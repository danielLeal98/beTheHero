const express =  require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) =>{
  return res.send('Ola daniel');
})

app.listen(3333);