async function myDisplay(){
  let myPromise = new Promise((res)=>{
    setTimeout(()=>{ res("I love you!!!")}, 3000);    
  });

  promiseResult = await myPromise;

  console.log(promiseResult)
}


myDisplay()