let hourHand = document.getElementById('hour');
let minuteHand = document.getElementById('minute');
let sHand = document.getElementById('secound');

function clockDate() {
    let nowDate = new Date();

    let hr = nowDate.getHours();
    let min = nowDate.getMinutes();
    let sec = nowDate.getSeconds();

    let hrR = 30 * hr + min / 2;
    let minR = 6 * min;
    let secR = 6 * sec;

    hourHand.style.transform = `rotate(${hrR}deg)`
    minuteHand.style.transform = `rotate(${minR}deg)`
    sHand.style.transform = `rotate(${secR}deg)`


    // let hrDeg = hr
    // let minDeg = 
    // let secDeg = 
}


setInterval(clockDate, 1000);

