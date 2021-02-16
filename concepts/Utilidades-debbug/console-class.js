const fs = require ('fs');

//const out = fs.createWriteStream('./out.log');
//const err =fs.createWriteStream('./err.log');

const consoleFile = new console.Console(process.stdout,process.strerr);
//const consoleFile = new console.Console(out,err);
/* setInterval(()=>{
  consoleFile.log(new Date());
  consoleFile.error(new Error('Ooops!'));
},2000) */
consoleFile.warring = function(str){
  this.log('\x1b[33;101m',`${str}`,'\x1b[0m');
}

consoleFile.warring('hoaaa');