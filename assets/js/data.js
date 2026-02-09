/* ===================================
   DATA.JS - Database data loader
   
   This file now loads data from Supabase database
   instead of localStorage
   =================================== */

// Global variables to store data
let loveLetters = [];
let memories = [];
let countdownEvents = [];
let storyChapters = [];

// Loading state
let dataLoaded = false;

// ===================================
// LOAD ALL DATA FROM SUPABASE
// ===================================
async function loadAllData() {
    try {
        console.log('Loading data from Supabase...');
        
        // Load all data in parallel
        const [lettersData, memoriesData, countdownsData, chaptersData] = await Promise.all([
            db.getLetters(),
            db.getMemories(),
            db.getCountdowns(),
            db.getStoryChapters()
        ]);
        
        // Transform database data to match existing format
        loveLetters = lettersData.map(letter => ({
            date: letter.date,
            preview: letter.preview,
            image: letter.image || '',
            isRead: letter.is_read || false,
            content: letter.content
        }));
        
        memories = memoriesData.map(memory => ({
            image: memory.image || '',
            caption: memory.caption,
            date: memory.date
        }));
        
        countdownEvents = countdownsData.map(countdown => ({
            icon: countdown.icon,
            title: countdown.title,
            subtitle: countdown.subtitle,
            date: countdown.date,
            type: countdown.type
        }));
        
        storyChapters = chaptersData.map(chapter => ({
            title: chapter.title,
            date: chapter.date,
            image: chapter.image || '',
            text: chapter.text
        }));
        
        // Add default data if database is empty
        if (loveLetters.length === 0) {
            loveLetters = getDefaultLetters();
        }
        if (memories.length === 0) {
            memories = getDefaultMemories();
        }
        if (countdownEvents.length === 0) {
            countdownEvents = getDefaultCountdowns();
        }
        if (storyChapters.length === 0) {
            storyChapters = getDefaultChapters();
        }
        
        dataLoaded = true;
        console.log('Data loaded successfully!');
        
    } catch (error) {
        console.error('Error loading data from Supabase:', error);
        // Fallback to default data if database fails
        loveLetters = getDefaultLetters();
        memories = getDefaultMemories();
        countdownEvents = getDefaultCountdowns();
        storyChapters = getDefaultChapters();
        dataLoaded = true;
    }
}

// ===================================
// DEFAULT DATA (Used as fallback)
// ===================================
// ===================================
// Load data when page loads
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', loadAllData);
}
