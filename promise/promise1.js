const fs = require('fs')

function displayFileOutput(fileContent) {
  console.log(fileContent);
}

function showFileOutput(fileContent) {
  console.log("The output of the file is: " + fileContent)
}

let processFileAsync = new Promise(function(res, rej) {
  try {
    const data = fs.readFileSync('myCar.html', 'utf-8')
    res(data)
  } catch (err) {
    rej(err)
  }
})

processFileAsync.then(
  function(value) { showFileOutput(value); }
)

processFileAsync.then(
  function(value){ displayFileOutput(value)}
)