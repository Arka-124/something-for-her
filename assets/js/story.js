/* ===================================
   STORY.JS - Our Story functionality
   =================================== */

let currentPage = 0;

// ===================================
// INITIALIZE STORY
// ===================================
function initializeStory() {
    currentPage = 0;
    renderStoryPage();
}

// ===================================
// RENDER STORY PAGE
// ===================================
function renderStoryPage() {
    const chapter = storyChapters[currentPage];
    const pageContent = document.getElementById('pageContent');
    
    // Create image HTML
    let imageHTML = '';
    if (chapter.image) {
        imageHTML = `<img src="${chapter.image}" alt="${chapter.title}" class="story-image">`;
    } else {
        imageHTML = '<div class="story-image-placeholder">📷 Image placeholder</div>';
    }
    
    // Update page content
    pageContent.innerHTML = `
        <div class="story-chapter-title">${chapter.title}</div>
        <div class="story-chapter-date">${chapter.date}</div>
        ${imageHTML}
        <div class="story-text">${chapter.text}</div>
    `;
    
    // Update page number
    document.getElementById('pageNumber').textContent = `${currentPage + 1} / ${storyChapters.length}`;
    
    // Update button states
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === storyChapters.length - 1;
}

// ===================================
// NAVIGATION FUNCTIONS
// ===================================
function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        renderStoryPage();
    }
}

function nextPage() {
    if (currentPage < storyChapters.length - 1) {
        currentPage++;
        renderStoryPage();
    }
}