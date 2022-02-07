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

   const result = await filePromise;
   console.log(result)

}



processFileAsync();