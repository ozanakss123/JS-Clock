let clock = document.querySelector('#clock');
let name = prompt("İsminizi giriniz");

document.querySelector("#name").innerHTML = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()} !`

function update(){
    clock.innerHTML = hour() + ':' + min() + ':' + sec() + ' ' + day();
}
setInterval(update, 1000);

function hour(){
    let hour = new Date().getHours();
    if(hour<10){
        hour = '0' + hour;
    }
    return hour; 
}

function min(){
    let min = new Date().getMinutes();
    if(min<10){
        min = '0' + min;
    }
    return min; 
}

function sec(){
    let sec = new Date().getSeconds();
    if (sec<10){
        sec = "0" + sec;
    }
    return sec; 
}

function day(){
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let dayName = days[new Date().getDay()];
    return dayName;
}