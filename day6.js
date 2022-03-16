let hour = min = sec = 0;
let tick;
var h1 = document.getElementsByTagName('h1');

function stop() {
    clearTimeout(tick);
}

function start() {
    sec++;
    tick = setTimeout(start, 1000);

    if (sec == 60) {        
        sec = 0;
        min++;

        if (min == 60) {
            min = 0;
            hour++;
        }
    }

    if (hour == 99 && min == 59 && sec == 59) {
        stop();
    }

    /*h1[0].innerHTML = (hour > 9 ? hour : "0" + hour) + ":"+ (min > 9 ? min : "0" + min) + ":"+ (sec > 9 ? sec : "0" + sec); */

    //59, 60, 1:01로 변함 59, 1:00, 1:01를 원하는데 내 맘 같지 않음   

    h1[0].innerHTML = (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
}

function reset() {
    stop();
    hour = min = sec = 0;
    h1[0].innerHTML = "00:00:00";
}
//https://www.foolishdeveloper.com/2021/10/simple-stopwatch-using-javascript.html
//https://code-boxx.com/simple-javascript-stopwatch/
//https://jsfiddle.net/Daniel_Hug/pvk6p/
