const express = require('express');
const morgan = require('morgan');
const routes = require('./routes'); 

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5600;
require('./config/db'); 


app.use(express.json());
app.use(morgan('dev'));


app.use('/', routes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
