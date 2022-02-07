async function myDisplay(){
  let myPromise = new Promise(function(resolve){
    resolve("I love you !!");
  });

  let promiseResult = await myPromise;
  console.log(promiseResult)
}

myDisplay()