const fs = require('fs');
let stream =fs.createReadStream('./big','UTF-8');
let data = '';
stream.once('data',()=>{
  console.log('iniciando el stream ...\n');
})
stream.on('data',(chunk)=>{
  console.log(`${chunk.length} |`);
  data += chunk;
})
stream.on('end',()=>{
  console.log('fin del stream..\n');
  console.log(data.length);
})