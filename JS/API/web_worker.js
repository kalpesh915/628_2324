let i = 0;

function timeCount(){
    //i++;
    //postMessage(i);
    postMessage(Date());
    setTimeout("timeCount()", 1000);
}

timeCount();