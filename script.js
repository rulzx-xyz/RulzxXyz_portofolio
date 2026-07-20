 document.addEventListener("DOMContentLoaded", function() {
    // 1. Fungsi Jam Real-time (Zafkiel Corner)
    function updateClock() {
        const clock = document.getElementById('zafkiel-clock');
        if (clock) {
            const hours = new Date().getHours();
            const romanHours = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
            clock.innerHTML = romanHours[hours % 12];
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Fungsi Tombol Suara (Audio On/Off Video Kurumi)
    const video = document.getElementById("kurumiVideo");
    const toggleBtn = document.getElementById("soundToggle");

    if (video && toggleBtn) {
        toggleBtn.addEventListener("click", function() {
            if (video.muted) {
                video.muted = false;
                video.play().catch(error => {
                    console.log("Autoplay dengan suara dicegah oleh browser:", error);
                });
                toggleBtn.innerHTML = '<i class="fas fa-volume-up"></i> Suara Aktif';
                toggleBtn.style.borderColor = "var(--accent)";
            } else {
                video.muted = true;
                toggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Aktifkan Suara';
                toggleBtn.style.borderColor = "var(--kurumi-red)";
            }
        });
    }
});
