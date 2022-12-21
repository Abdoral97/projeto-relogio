const seconds = document.getElementById("segundos")
const minutes = document.getElementById("minutos")
const hours = document.getElementById("horas")

const relogio = setInterval(function () {

    const data = new Date();
    let s = data.getSeconds();
    let min = data.getMinutes();
    let hr = data.getHours();

    if (s < 10) { s = "0" + s }

    if (min < 10) { min = "0" + min }

    if (hr < 10) { hr = "0" + hr }

    seconds.innerText = (s)
    minutes.innerText = (min)
    hours.innerText = (hr)



}, 1000)


