const os = require('os');
//console.log("CPU info:",os.cpus());
//console.log('IP:',os.networkInterfaces().en0.map(i=>i.address));
console.log('free memory:',os.freemem()/1000000);
//console.log('user:',os.userInfo);