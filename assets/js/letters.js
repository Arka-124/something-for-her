/* ===================================
   LETTERS.JS - Love letters functionality
   =================================== */

// ===================================
// INITIALIZE LETTERS
// ===================================
function initializeLetters() {
    const container = document.getElementById('lettersContainer');
    container.innerHTML = '';
    
    loveLetters.forEach((letter, index) => {
        const envelope = document.createElement('div');
        envelope.className = 'envelope' + (index === 0 && !letter.isRead ? ' newest' : '');
        envelope.onclick = () => openLetter(index);
        
        envelope.innerHTML = `
            ${index === 0 && !letter.isRead ? '<div class="new-badge">NEW</div>' : ''}
            <div class="envelope-flap"></div>
            <div class="envelope-body">
                <div>
                    <div>${letter.preview}</div>
                    <div class="envelope-date">${letter.date}</div>
                </div>
            </div>
        `;
        
        container.appendChild(envelope);
    });
}

// ===================================
// OPEN LETTER MODAL
// ===================================
function openLetter(index) {
    const letter = loveLetters[index];
    
    // Mark as read
    letter.isRead = true;
    
    document.getElementById('letterDate').textContent = letter.date;
    
    // Add image if exists, otherwise show placeholder
    let imageHTML = '';
    if (letter.image) {
        imageHTML = `<img src="${letter.image}" alt="Letter image" class="letter-image">`;
    } else {
        imageHTML = '<div class="letter-image-placeholder">📷 Image placeholder</div>';
    }
    
    document.getElementById('letterText').innerHTML = imageHTML + '<div style="white-space: pre-wrap;">' + letter.content + '</div>';
    document.getElementById('letterModal').classList.add('active');
    
    // Refresh the letters display to remove NEW badge
    initializeLetters();
}

// ===================================
// CLOSE LETTER MODAL
// ===================================
function closeLetter() {
    document.getElementById('letterModal').classList.remove('active');
}