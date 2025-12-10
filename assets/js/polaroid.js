/* ===================================
   POLAROID.JS - Polaroid wall functionality
   =================================== */

// ===================================
// POLAROID WALL VARIABLES
// ===================================
let isDragging = false;
let startX, startY;
let translateX = -1200;
let translateY = -1200;
let currentTranslateX = translateX;
let currentTranslateY = translateY;

// ===================================
// INITIALIZE POLAROIDS
// ===================================
function initializePolaroids() {
    const container = document.getElementById('polaroidContainer');
    container.innerHTML = '';
    
    // Random positions and rotations for polaroids
    const positions = [
        { top: 200, left: 400, rotation: -5 },
        { top: 150, left: 800, rotation: 8 },
        { top: 400, left: 600, rotation: -3 },
        { top: 300, left: 1200, rotation: 7 },
        { top: 600, left: 300, rotation: -8 },
        { top: 550, left: 900, rotation: 4 },
        { top: 700, left: 1400, rotation: -6 },
        { top: 150, left: 1600, rotation: 5 },
        { top: 450, left: 1800, rotation: -4 },
        { top: 800, left: 700, rotation: 6 },
        { top: 900, left: 1100, rotation: -7 },
        { top: 750, left: 1900, rotation: 3 }
    ];
    
    memories.forEach((memory, index) => {
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid';
        polaroid.style.top = positions[index].top + 'px';
        polaroid.style.left = positions[index].left + 'px';
        polaroid.style.transform = `rotate(${positions[index].rotation}deg)`;
        polaroid.onclick = (e) => {
            e.stopPropagation();
            openPhoto(memory);
        };
        
        let imageContent = '';
        if (memory.image) {
            imageContent = `<img src="${memory.image}" alt="${memory.caption}">`;
        } else {
            imageContent = '📷';
        }
        
        polaroid.innerHTML = `
            <div class="polaroid-image">${imageContent}</div>
            <div class="polaroid-text">
                ${memory.caption}
                <div class="polaroid-date">${memory.date}</div>
            </div>
        `;
        
        container.appendChild(polaroid);
    });
    
    // Reset position
    container.style.transform = `translate(${translateX}px, ${translateY}px)`;
    
    // Setup drag handlers
    setupDragHandlers();
}

// ===================================
// DRAG HANDLERS
// ===================================
function setupDragHandlers() {
    const canvas = document.getElementById('polaroidCanvas');
    const container = document.getElementById('polaroidContainer');
    
    canvas.addEventListener('mousedown', startDrag);
    canvas.addEventListener('mousemove', drag);
    canvas.addEventListener('mouseup', endDrag);
    canvas.addEventListener('mouseleave', endDrag);
    
    canvas.addEventListener('touchstart', startDrag);
    canvas.addEventListener('touchmove', drag);
    canvas.addEventListener('touchend', endDrag);
    
    function startDrag(e) {
        isDragging = true;
        startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
        currentTranslateX = translateX;
        currentTranslateY = translateY;
    }
    
    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const currentY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
        
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;
        
        translateX = currentTranslateX + deltaX;
        translateY = currentTranslateY + deltaY;
        
        container.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
    
    function endDrag() {
        isDragging = false;
    }
}

// ===================================
// RESET VIEW
// ===================================
function resetView() {
    translateX = -1200;
    translateY = -1200;
    const container = document.getElementById('polaroidContainer');
    container.style.transform = `translate(${translateX}px, ${translateY}px)`;
}

// ===================================
// PHOTO MODAL
// ===================================
function openPhoto(memory) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (memory.image) {
        modalImage.src = memory.image;
    } else {
        modalImage.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="%23f0f0f0"/><text x="50%" y="50%" text-anchor="middle" fill="%23ccc" font-size="60">📷</text></svg>';
    }
    
    modalCaption.innerHTML = `${memory.caption}<br><small>${memory.date}</small>`;
    modal.classList.add('active');
}

function closePhoto() {
    document.getElementById('photoModal').classList.remove('active');
}