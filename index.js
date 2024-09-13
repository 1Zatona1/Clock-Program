function updateTimer()
{
    const now = new Date();
    let hours = now.getHours();
    let meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
}
updateTimer();
setInterval(updateTimer, 1000);