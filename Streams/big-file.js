const fs = require('fs');
const file = fs.createWriteStream('./big');

for(let i=0; i<=1e4;i++){
  file.write('holaaaaaa');
}
file.end();