// === CONFIG ===
    const countdownLengthMs = 23 * 24 * 60 * 60 * 1000; // 23 days in milliseconds
    const baseStartDate = new Date("2025-11-05T14:00:00Z").getTime(); // Reference start

    function getEndDate() {
      // Calculate the end date by adding 23 days to the current date
      const endDate = baseStartDate + countdownLengthMs;
      return new Date(endDate);
    }

    function updateCountdown() {
      const now = new Date().getTime();
      const endTime = getEndDate().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        // Countdown has finished, display "00:00:00:00"
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = String(days).padStart(2, "0");
      document.getElementById("hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }

    // Start the countdown
    setInterval(updateCountdown, 1000);
    updateCountdown();

function openWallet() {
  document.getElementById("walletOverlay").style.display = "flex";
}

function closeWallet() {
  document.getElementById("walletOverlay").style.display = "none";
}

window.onclick = (e) => {
  const overlay = document.getElementById("walletOverlay");
  if (e.target === overlay) closeWallet();
};
