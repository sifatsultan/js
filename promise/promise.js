let htmlContent = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`;

let fileResultPromise = new Promise(function(myResolve, myReject){
  setTimeout(function(){myResolve(htmlContent)}, 3000);
});

fileResultPromise.then(function(value){
  console.log("Fetched file succesfully");
  console.log(value)
})