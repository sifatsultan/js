function DisplayResult(result){
    console.log("The final result of the data process is "+result);
}

function DebugResult(result){
    console.log("The value of the data process is "+result);
}

function EvaluateResult(result){
    console.log("The process evaluates to "+result);
}


function ProcessData(data1, data2, resultCallBack){
    let sum = data1 + data2;
    resultCallBack(sum)
}

ProcessData(3,4, DisplayResult);
ProcessData(3,4, DebugResult);
ProcessData(3,4, EvaluateResult);



