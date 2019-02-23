setInterval(function () {
    let data = new Date();
    let hour = data.getHours() - 12,
        minute = data.getMinutes(),
        second = data.getSeconds();
    
    let secondAngel = (second * 360) / 60;
        minuteAngel = (minute * 360) / 60,
        hourAngel = (hour * 360) / 12;
    document.querySelector('.second').style.transform = 'rotate(' + secondAngel + 'deg)';
    document.querySelector('.minute').style.transform = 'rotate(' + minuteAngel + 'deg)';
    document.querySelector('.hour').style.transform = 'rotate(' + hourAngel + 'deg)';
    
    document.querySelector('.digital').textContent = (`${hour}:${minute}:${second}`)
}, 1000)