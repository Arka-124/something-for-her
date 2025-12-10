/* ===================================
   MAIN.JS - Core navigation & utilities
   =================================== */

// ===================================
// SCREEN NAVIGATION
// ===================================
function showScreen(screenName) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Show the selected screen
    if (screenName === 'menu') {
        document.querySelector('.menu').classList.add('active');
    } else if (screenName === 'letters') {
        document.getElementById('letters').classList.add('active');
        initializeLetters();
    } else if (screenName === 'polaroid') {
        document.getElementById('polaroid').classList.add('active');
        initializePolaroids();
    } else if (screenName === 'countdowns') {
        document.getElementById('countdowns').classList.add('active');
        initializeCountdowns();
        startCountdowns();
    } else if (screenName === 'story') {
        document.getElementById('story').classList.add('active');
        initializeStory();
    }
}

// ===================================
// MODAL CLOSE HANDLERS
// ===================================

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    const letterModal = document.getElementById('letterModal');
    if (e.target === letterModal) {
        closeLetter();
    }
    
    const photoModal = document.getElementById('photoModal');
    if (e.target === photoModal) {
        closePhoto();
    }
});