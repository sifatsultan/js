function DisplayTime(){
    let d = new Date();
    console.log(d.getHours() + " : " + 
        d.getMinutes() + " : " + 
        d.getSeconds());
}

setInterval(DisplayTime, 1000)