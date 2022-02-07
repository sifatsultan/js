global.XMLHttpRequest = require('xhr2');

async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  const result = await myPromise;
  console.log(result)
}


function request(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function() {
      resolve(xhr);
    });

    xhr.addEventListener('error', reject);
    xhr.open('GET', url, true);
    xhr.send();
  });
}

getFile();

request("myCar.html")