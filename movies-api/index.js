const express = require('express');
const app = express();
const {config} = require('./config/index');
const moviesApi = require('./routes/movies');

const {logErrors, errorHandler, wrapErrors}= require('./utils/middleware/errorHandlers')

const notFoundHandler = require('./utils/middleware/notFoundHandler');
//body parser
app.use(express.json());
//routes
moviesApi(app);
//capturar el error 404
app.use(notFoundHandler);
//middleware de error siempre tienen que ir al final de las rutas
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function(){
  console.log(`listening http://localhost:${config.port}`)
});