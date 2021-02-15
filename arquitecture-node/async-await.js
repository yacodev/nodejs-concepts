const myPromiseFunction = ()=>{
  new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (Math.random()<0.5){
        resolve('hola promesa');
      }else{
        reject(new Error('hola error'))
      }
    },1000)
  })
}
async function asyncAwait(){
  try{
    const msg= await myPromiseFunction();
    console.log(msg);
  }catch(err){
    console.log('error',err );
  }
}

asyncAwait();