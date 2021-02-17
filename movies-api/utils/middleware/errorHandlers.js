const boom = require ('@hapi/boom');//manejador de errores
const {config} = require('../../config');

function withErrorStack(error,stack){
  if(config.dev){
    return {...error, stack};
  }
  return error;
}
function logErrors(err,req,res,next){
  console.log(err);
  next(err);
}
//verificando si el error es de tipo Boom
function wrapErrors(err, req, res, next){
  if (!err.isBoom){
    next(boom.badImplementation(err));
  }
  next(err);
}
//devolver el error en formato JSON
function errorHandler(err,req,res,next){
  const {output:{statusCode, payload}}=err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}
module.exports ={
  logErrors,
  wrapErrors,
  errorHandler
}