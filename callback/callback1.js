function DisplayResult(result){
    console.log("The final result of the data process is "+result);
}


function ProcessData(data1, data2){
    let sum = data1 + data2;
    return sum
}


let result = ProcessData(3,4);

DisplayResult(result)