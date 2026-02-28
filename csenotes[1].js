// Refresh Button - clear all localStorage and reload
document.getElementById("refreshBtn").addEventListener("click", function() {
    localStorage.clear(); // Clear all saved data
    document.body.classList.remove("show"); // Fade out before reload
    setTimeout(() => {
        location.reload();
    }, 500); // Match page fade-out duration
});