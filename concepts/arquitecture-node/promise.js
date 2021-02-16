const myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if (Math.random()<0.5){
      resolve('hola promesa');
    }else{
      reject(new Error('hola error'))
    }
  },1000)
})
myPromise
  .then(msg=>msg.toUpperCase())
  .then(msg=>console.log(msg))
  .catch(err=>console.log(err))