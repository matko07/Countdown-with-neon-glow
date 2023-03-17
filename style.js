let tageItem = document.querySelector("#tage");
let stundenItem = document.querySelector("#stunden");
let minutenItem = document.querySelector("#minuten");
let sekundenItem  = document.querySelector("#sekunden");

let countDown = () => {
    let futureDate = new Date("3 Apr 2023");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    console.log(myDate);
    //console.log(myDate);

    let tage= Math.floor(myDate / 1000 / 60 / 60 / 24);
    let stunden= Math.floor(myDate / 1000 / 60 / 60) % 24;
    let minuten= Math.floor(myDate / 1000 / 60) % 60;
    let sekunden= Math.floor(myDate / 1000) % 60;
    tageItem.innerHTML = tage;
    stundenItem.innerHTML = stunden;
    minutenItem.innerHTML = minuten;
    sekundenItem.innerHTML = sekunden;
}

countDown()

setInterval(countDown,1000)

