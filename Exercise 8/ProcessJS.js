let totalSecond = 7200;
let totalSoldCorse = 0;

let countdownInterval;
let convertToTimeUnite = function(timeUnit) {
    return timeUnit < 10 ? '0' + timeUnit : timeUnit;
}

let countDownTime = function(second) {
    var hour = Math.floor(second / 3600);
    var minutes = Math.floor((second % 3600) / 60);
    var seconds = second - hour * 3600 - minutes * 60;

    document.getElementById('hour').innerHTML = convertToTimeUnite(hour);
    document.getElementById('minute').innerHTML = convertToTimeUnite(minutes);
    document.getElementById('second').innerHTML = convertToTimeUnite(seconds);
}

countdownInterval = setInterval(function() {
    countDownTime(totalSecond--);
}, 1000);

setTimeout(function() {
    document.getElementById('animation_bought').style.bottom = "100px";
    document.getElementById('animation_bought').style.opacity = "1";
}, 10000);

setTimeout(function() {
    document.getElementById('animation_bought').style.opacity = '0';
    document.getElementById('animation_bought').style.bottom = "-200px";
}, 20000);

let addToCard = function(event) {
    event.target.style.display = "none";
    document.getElementById('total_bought').innerHTML = ++totalSoldCorse;
};

let validateForm = function() {
    let arrIds = ['fullname', 'email', 'phone', 'age'];
    let input;
    let inputValue;
    for (let i = 0; i < arrIds.length; i++) {
        input = document.getElementById(arrIds[i]);
        inputValue = input.value;
        if (!inputValue) {
            input.style.borderColor = 'red'; //chưa hiểu
        }
    }
}

let inputValidate = function(id) {
    let input = document.getElementById(id);
    let checkInput = input.value;
    if (!checkInput) {
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = 'bisque';
    }
}