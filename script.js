let lamp = document.querySelector("#lamp");
let InOn = document.querySelector("#btn-lgdl");

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function OnOff() {
    if(InOn.textContent == 'Ligar') {
        on();
        InOn.textContent = 'Desligar'
    } else  {
        off()
        InOn.textContent = 'Ligar'
    }
}

function on() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg'
    }
}

function off() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg'
    }
}

function broken() {
    lamp.src = './img/quebrada.jpg'
    alert("Oh não, Reinicie a página para continuar");
}