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
function getDefaultLetters() {
    return [
        {
            date: "July 19, 2025",
            preview: "Letter One: The Beginning",
            image: "",
            isRead: false,
            content: `That day.....,

I wonder if you knew what you were doing that day. Probably not. It was just another message, wasn't it? Just another person on an app, another conversation that might lead somewhere or nowhere.
But for me, everything shifted.

"Yeah sure let's do it, Delhi tour is incomplete without its iconic street food so let's start from there."
Twenty words. That's all it took. Twenty words that somehow broke through the walls of my small, comfortable world—the one I'd built so carefully around myself, where everything was predictable and safe and mine.

Before you, I was content with simplicity. My routines, my habits, my quiet life. I wasn't looking for anything, wasn't waiting for anyone. I thought I had everything figured out.
And then you came.

I didn't know it then, sitting there staring at my phone, but I was already falling. Not the dramatic, movie-scene kind of falling. Just a gentle, inevitable pull—like gravity, like the earth spinning, like something that was always meant to happen.

And I'm still falling.

Always,
Me`
        }
    ];
}

function getDefaultMemories() {
    return [
        {
            image: "",
            caption: "Our first video call 💕",
            date: "January 2024"
        },
        {
            image: "",
            caption: "When you made me laugh so hard",
            date: "February 2024"
        }
    ];
}

function getDefaultCountdowns() {
    return [
        {
            icon: "💕",
            title: "Days Together",
            subtitle: "Since we started our journey",
            date: "2024-01-15",
            type: "up"
        },
        {
            icon: "✈️",
            title: "Until We Meet",
            subtitle: "Can't wait to see you!",
            date: "2025-02-14",
            type: "down"
        }
    ];
}

function getDefaultChapters() {
    return [
        {
            title: "Chapter 1: How We Met",
            date: "The Beginning",
            image: "",
            text: `It all started on a day I'll never forget. From the moment I saw your message, I knew there was something special about you.

Your smile in your profile picture caught my attention, but it was your words that captured my heart. We talked for hours that first day, and I remember thinking "wow, I could talk to this person forever."

Little did I know, that's exactly what would happen. 💕`
        },
        {
            title: "Chapter 2: Getting to Know You",
            date: "The Connection Grows",
            image: "",
            text: `Every conversation brought us closer. I learned about your dreams, your passions, the little things that make you smile.

You told me about your favorite songs, the books you love, the way you take your coffee. I found myself wanting to know everything about you.

Distance meant nothing when we talked. Time zones became irrelevant. All that mattered was hearing from you. ❤️`
        }
    ];
}

// ===================================
// AUTO-LOAD DATA ON PAGE LOAD
// ===================================
// Load data when page loads
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', loadAllData);
}
