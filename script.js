setInterval(() => {
    const d = new Date();
    let hours = d.getHours().toString().padStart(2, '0');
    let minutes = d.getMinutes().toString().padStart(2, '0');
    let seconds = d.getSeconds().toString().padStart(2, '0');
    let currTime = (`${hours}:${minutes}:${seconds}`)
    document.getElementsByClassName('clock')[0].innerHTML = currTime;
}, 1000);