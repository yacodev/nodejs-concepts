const express = require('express');
const app = express();

const {config} = require('./config/index');

app.get('/', (req,res)=>{
  res.send('hello world');
});
app.get('/json',(req,res)=>{
  res.json({hello:'world'});
});
app.get('/user/:id',(req,res)=>{
  res.send("user"+req.params);
})
app.get('/bisiesto/:year', (req, res)=>{
  const {year} = req.params;
  let isLeap = false;
  const yearNumber = parseInt(year);
  if ((yearNumber%4)!==0){
    isLeap = false;
  }else{
    isLeap = true;
  }
  res.send(`El año ${year} ${isLeap ? ' es bisiesto':'no es bisiesto'}`);
})

app.listen(config.port, function(){
  console.log(`listening http://localhost:${config.port}`)
});