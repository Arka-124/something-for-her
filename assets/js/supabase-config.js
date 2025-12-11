/* ===================================
   SUPABASE CONFIG - Database connection
   
   SETUP INSTRUCTIONS:
   1. Go to supabase.com and create a free account
   2. Create a new project
   3. Go to Settings > API
   4. Copy your Project URL and anon public key
   5. Paste them below
   =================================== */

// 🔧 REPLACE THESE WITH YOUR SUPABASE CREDENTIALS
const SUPABASE_URL = 'https://tywbsantfxrwwldihgal.supabase.co'; // Example: https://xxxxx.supabase.co
const SUPABASE_KEY = 'sb_publishable_Rq4EH8KoUBQXN1M5ywPqBg_3VuvK4nI';    // Long string starting with eyJhbGc...

// ===================================
// SUPABASE CLIENT INITIALIZATION
// ===================================
const supabase = {
    url: SUPABASE_URL,
    key: SUPABASE_KEY,
    
    // Helper function to make API calls
    async query(table, options = {}) {
        const { select, insert, update, delete: del, order } = options;
        let url = `${this.url}/rest/v1/${table}`;
        let method = 'GET';
        let body = null;
        
        // Build query parameters
        const params = new URLSearchParams();
        if (select) params.append('select', select);
        if (order) params.append('order', order);
        
        if (params.toString()) {
            url += '?' + params.toString();
        }
        
        // Determine method and body
        if (insert) {
            method = 'POST';
            body = JSON.stringify(insert);
        } else if (update) {
            method = 'PATCH';
            body = JSON.stringify(update);
        } else if (del) {
            method = 'DELETE';
        }
        
        const response = await fetch(url, {
            method,
            headers: {
                'apikey': this.key,
                'Authorization': `Bearer ${this.key}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body
        });
        
        if (!response.ok) {
            throw new Error(`Supabase error: ${response.statusText}`);
        }
        
        return await response.json();
    }
};

// ===================================
// DATABASE OPERATIONS
// ===================================
const db = {
    // Letters
    async getLetters() {
        return await supabase.query('letters', { 
            select: '*',
            order: 'created_at.desc'
        });
    },
    
    async addLetter(letter) {
        return await supabase.query('letters', { 
            insert: letter 
        });
    },
    
    // Memories
    async getMemories() {
        return await supabase.query('memories', { 
            select: '*',
            order: 'created_at.desc'
        });
    },
    
    async addMemory(memory) {
        return await supabase.query('memories', { 
            insert: memory 
        });
    },
    
    // Countdowns
    async getCountdowns() {
        return await supabase.query('countdowns', { 
            select: '*',
            order: 'created_at.desc'
        });
    },
    
    async addCountdown(countdown) {
        return await supabase.query('countdowns', { 
            insert: countdown 
        });
    },
    
    // Story Chapters
    async getStoryChapters() {
        return await supabase.query('story_chapters', { 
            select: '*',
            order: 'chapter_order.asc'
        });
    },
    
    async addStoryChapter(chapter) {
        return await supabase.query('story_chapters', { 
            insert: chapter 
        });
    }
};
