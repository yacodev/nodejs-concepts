const express = require('express');
const app = express();
const {config} = require('./config/index');
const moviesApi = require('./routes/movies');

const {logError, errorHandler}= require('./utils/middleware/errorHandlers')

//body parser
app.use(express.json());

moviesApi(app);
//middleware de error siempre tienen que ir al final de las rutas
app.use(logError);
app.use(errorHandler);

app.listen(config.port, function(){
  console.log(`listening http://localhost:${config.port}`)
});