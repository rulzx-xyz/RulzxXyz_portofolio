// Jam Real-time
function updateClock() {
    const clock = document.getElementById('zafkiel-clock');
    const hours = new Date().getHours();
    const romanHours = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
    clock.innerHTML = romanHours[hours % 12];
}
setInterval(updateClock, 1000);
updateClock();

// Tombol Suara
const video = document.getElementById("kurumiVideo");
if(video) {
    document.getElementById("soundToggle").addEventListener("click", function() {
        video.muted = !video.muted;
        this.innerHTML = video.muted ? "Aktifkan Suara" : "Suara Aktif";
    });
}
