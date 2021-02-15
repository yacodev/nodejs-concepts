const http = require ('http');
const server = http.createServer();

server.on("request",(req,res)=>{
  if(req.method == "POST" && req.url == "/birthday"){
    let body =[];
    req
      .on('data', chunk=>{
        body.push(chunk);
      })
      .on('end',()=>{
        res.writeHead(200, {"Content-Type":"text/plain"});
        body = Buffer.concat(body).toString().split('-');
        const day= body[0];
        const month = body[1];
        const year = body [2];
        const birthday= new Date(year,month,day);
        console.log(birthday);
        res.end(birthday.toString().split(' ')[0]);
      });
  }else{
    res.statusCode=404;
    res.end();
  }
});
server.listen(8001);
console.log("servidor en la url http//:localhost:8001");