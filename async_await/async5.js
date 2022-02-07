const fs = require('fs')

async function processFileAsync() {
  let filePromise = new Promise((res, rej) => {
    fs.readFile('myCar1.html', 'utf-8', (err, data) => {
      if (err) {
        rej(err)
      }

      res(data)
    })
  })

   filePromise.then(
    function(value){`The file was fetched sucessfully ${value}`},
    function(err){`The file could not be fetched successfully ${err}`}
  );

}



processFileAsync();