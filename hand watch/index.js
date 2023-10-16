let inputs = document.querySelectorAll('input');

function clockTime() {
    let time = new Date();

    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    inputs[0].value = Math.floor(hr);
    inputs[1].value = Math.floor(min);
    inputs[2].value = Math.floor(sec);
}

setInterval(clockTime, 1000);