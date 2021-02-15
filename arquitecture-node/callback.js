const myCallback = function (cb){
  setTimeout(()=>{
    if(Math.random() <0.5){
      return cb(null, 'hello callback');
    }else{
      cb (new Error('hello error'));
    } 
  },2000)
}
myCallback((err,msg)=>{
  if (err){
    console.log('error',err);
  }else{
    console.log('mensage', msg);
  }
})