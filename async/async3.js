var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function displayFileContent(fileData){
    console.log("The output of the file is " + fileData);
}

function getFile(fileHandler){
    let req = new XMLHttpRequest();
    req.open('GET','myCar.html');
    req.onreadystatechange(function(){
        if(req.status == 200){
            fileHandler(this.responseText);
        }else{
            fileHandler("Error: " + req.status)
        }
    })

    req.send();
}


getFile(displayFileContent)