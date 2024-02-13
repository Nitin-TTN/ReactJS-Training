function updateTime() {
    const now = new Date();

    const hours = now.getHours()%12||12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const timeString = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${ampm}`;
    document.getElementById('time').textContent = timeString;

    const month = now.toLocaleString('default', { month: 'long' }).substring(0,3);
    const day = now.getDate();
    const year = now.getFullYear();
    const dateString = `${day} ${month} ${year}`;
    document.getElementById('date').textContent = dateString;

    const hourOfDay = now.getHours();
    let timeOfDay;
    if (hourOfDay >= 5 && hourOfDay < 12) {
        timeOfDay = 'Morning';
    } else if (hourOfDay >= 12 && hourOfDay < 18) {
        timeOfDay = 'Afternoon';
    } else {
        timeOfDay = 'Night';
    }
    document.getElementById('message').textContent = `Good ${timeOfDay}`;
}

function addZero(num) {
    return num < 10 ? `0${num}` : num;
}

setInterval(updateTime, 1000);

updateTime();
