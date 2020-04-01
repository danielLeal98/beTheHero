const express =  require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req, res) =>{
  return res.send('Ola daniel');
})

app.listen(3333);