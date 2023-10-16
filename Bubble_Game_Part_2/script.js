
function createBUble() {
    let bin="";
    for (let i = 0; i <=80; i++) {
        bin += `<div class="btm-box">${i}</div> `
    }

    document.querySelector(".buttom-section").innerHTML = bin;
}

createBUble()