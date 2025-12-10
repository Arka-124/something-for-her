/* ===================================
   COUNTDOWNS.JS - Countdown timers functionality
   =================================== */

let countdownInterval;

// ===================================
// INITIALIZE COUNTDOWNS
// ===================================
function initializeCountdowns() {
    const container = document.getElementById('countdownsContainer');
    container.innerHTML = '';
    
    countdownEvents.forEach((event, index) => {
        const card = document.createElement('div');
        card.className = 'countdown-card';
        card.id = `countdown-${index}`;
        
        card.innerHTML = `
            <div class="countdown-icon">${event.icon}</div>
            <div class="countdown-title">${event.title}</div>
            <div class="countdown-subtitle">${event.subtitle}</div>
            <div class="countdown-display" id="display-${index}">
                <div class="countdown-unit">
                    <div class="countdown-number" id="days-${index}">0</div>
                    <div class="countdown-label">Days</div>
                </div>
                <div class="countdown-unit">
                    <div class="countdown-number" id="hours-${index}">0</div>
                    <div class="countdown-label">Hours</div>
                </div>
                <div class="countdown-unit">
                    <div class="countdown-number" id="minutes-${index}">0</div>
                    <div class="countdown-label">Minutes</div>
                </div>
                <div class="countdown-unit">
                    <div class="countdown-number" id="seconds-${index}">0</div>
                    <div class="countdown-label">Seconds</div>
                </div>
            </div>
            <span class="countdown-type countdown-${event.type}">
                ${event.type === 'up' ? 'Time Together ↑' : 'Time Until ↓'}
            </span>
        `;
        
        container.appendChild(card);
    });
}

// ===================================
// UPDATE COUNTDOWNS
// ===================================
function updateCountdowns() {
    const now = new Date();
    
    countdownEvents.forEach((event, index) => {
        const targetDate = new Date(event.date);
        let diff;
        
        if (event.type === 'up') {
            // Count up from the date
            diff = now - targetDate;
        } else {
            // Count down to the date
            diff = targetDate - now;
        }
        
        // Calculate time units
        const days = Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((Math.abs(diff) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((Math.abs(diff) % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((Math.abs(diff) % (1000 * 60)) / 1000);
        
        // Update display
        const daysEl = document.getElementById(`days-${index}`);
        const hoursEl = document.getElementById(`hours-${index}`);
        const minutesEl = document.getElementById(`minutes-${index}`);
        const secondsEl = document.getElementById(`seconds-${index}`);
        
        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;
    });
}

// ===================================
// START COUNTDOWNS
// ===================================
function startCountdowns() {
    // Clear any existing interval
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    // Update immediately
    updateCountdowns();
    
    // Update every second
    countdownInterval = setInterval(updateCountdowns, 1000);
}