# 💕 Romantic Website - Documentation

A beautiful, interactive romantic website with love letters, memories, countdowns, and your story.

**✨ NEW: Admin Panel for Easy Content Management!**  
No more editing code - add content through simple forms!

## 📁 File Structure

```
romantic-website/
│
├── index.html                    # Main website
├── admin.html                    # 🆕 Admin panel for adding content
│
├── assets/
│   ├── css/
│   │   ├── main.css             # Global styles & navigation
│   │   ├── homepage.css         # Homepage styles
│   │   ├── menu.css             # Menu styles
│   │   ├── letters.css          # Love letters styles
│   │   ├── polaroid.css         # Polaroid wall styles
│   │   ├── countdowns.css       # Countdowns styles
│   │   └── story.css            # Story section styles
│   │
│   ├── js/
│   │   ├── data.js              # ALL YOUR DATA (edit this!)
│   │   ├── main.js              # Core navigation
│   │   ├── letters.js           # Letters functionality
│   │   ├── polaroid.js          # Polaroid wall functionality
│   │   ├── countdowns.js        # Countdown timers
│   │   └── story.js             # Story navigation
│   │
│   └── images/                  # Your images folder
│       ├── letters/
│       ├── memories/
│       └── story/
│
└── README.md                    # This file
```

## 🎨 How to Customize

### 1. **Add Your Images**
Place your images in the `assets/images/` folder:
- Letter images → `assets/images/letters/`
- Memory photos → `assets/images/memories/`
- Story images → `assets/images/story/`

### 2. **Edit Your Data**
Open `assets/js/data.js` and customize:

#### Love Letters
```javascript
const loveLetters = [
    {
        date: "December 11, 2024",
        preview: "My Dearest Love...",
        image: "assets/images/letters/letter1.jpg", // Add your image path
        isRead: false,
        content: `Your letter content here...`
    },
    // Add more letters...
];
```

#### Memories
```javascript
const memories = [
    {
        image: "assets/images/memories/photo1.jpg", // Add your image path
        caption: "Our first video call 💕",
        date: "January 2024"
    },
    // Add more memories...
];
```

#### Countdowns
```javascript
const countdownEvents = [
    {
        icon: "💕",
        title: "Days Together",
        subtitle: "Since we started our journey",
        date: "2024-01-15", // CHANGE THIS DATE
        type: "up" // "up" counts from date, "down" counts to date
    },
    // Add more countdowns...
];
```

#### Story Chapters
```javascript
const storyChapters = [
    {
        title: "Chapter 1: How We Met",
        date: "The Beginning",
        image: "assets/images/story/chapter1.jpg", // Add your image path
        text: `Your story text here...`
    },
    // Add more chapters...
];
```

## 🚀 How to Run

### Quick Start
1. **Open `admin.html`** to add your content
2. **Open `index.html`** to view your website
3. Done! ✨

### Method 1: Simple (Local File)
1. Double-click `index.html`
2. Opens in your browser
3. Done! ✨

### Method 2: Local Server (Recommended)
If you have issues with images not loading:

**Using Python:**
```bash
# Python 3
cd romantic-website
python -m http.server 8000

# Then open: http://localhost:8000
```

**Using Node.js:**
```bash
# Install http-server globally
npm install -g http-server

# Run in project folder
http-server

# Then open: http://localhost:8080
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

## 🎯 Quick Start Guide

### For First Time Setup:
1. **Extract all files** to a folder
2. **Open `admin.html`** in your browser
3. **Add your first letter, memory, or countdown**
4. **Open `index.html`** to see your content!

### For Regular Use:
- **Adding Content:** Open `admin.html`
- **Viewing Website:** Open `index.html`
- **Editing Default Content:** Edit `assets/js/data.js`

---

## 🆕 Admin Panel Features

### What You Can Add:
- **💌 Love Letters** - Write romantic letters with optional images
- **📸 Memories** - Add photos with captions and dates
- **⏰ Countdowns** - Create count-up or countdown timers
- **📖 Story Chapters** - Write your love story chapter by chapter

### Storage:
- Content saved in **browser localStorage**
- **Persists** between sessions
- **Private** - stays on your device
- See `ADMIN_GUIDE.md` for syncing between devices

---

## 📝 Quick Customization Guide

### Change Homepage Message
Edit `index.html` line 18-19:
```html
<h1>Hey Baby,<br>I made something for us,<br>Hope you like it 💕</h1>
```

### Change Colors
Edit `assets/css/main.css`:
```css
/* Background gradient */
background: linear-gradient(135deg, #ffb6c1 0%, #ffffff 100%);

/* Accent color (pink) */
color: #ff69b4;
```

### Add More Letters
Just add a new object to the `loveLetters` array in `data.js`:
```javascript
{
    date: "December 25, 2024",
    preview: "Merry Christmas...",
    image: "assets/images/letters/christmas.jpg",
    isRead: false,
    content: `Your Christmas letter...`
}
```

### Add More Story Chapters
Add a new chapter to `storyChapters` in `data.js`:
```javascript
{
    title: "Chapter 5: Forever",
    date: "The Future",
    image: "assets/images/story/future.jpg",
    text: `Our future together...`
}
```

## 📱 Features

### 💌 Love Letters
- Envelope-style display
- "NEW" badge for unread letters
- Modal reader with smooth animations
- Image support

### 📸 Our Memories
- Polaroid-style photo wall
- Drag to explore
- Click photos to enlarge
- Random rotations and positions

### ⏰ Countdowns
- Multiple countdown/countup timers
- Real-time updates
- Days, hours, minutes, seconds
- Custom icons and colors

### 📖 Our Story
- Multi-chapter narrative
- Book-style navigation
- Previous/Next buttons
- Image support per chapter

## 🐛 Troubleshooting

### Content Not Showing?
- Refresh the page (Ctrl+R or Cmd+R)
- Check if content was added in admin panel
- Make sure both files are in the same folder

### Images Not Loading?
- Check file paths are correct (when editing manually)
- Use a local server (see "How to Run")
- Or use the admin panel to upload images directly

### Content Disappeared?
- Browser data was cleared
- Make sure not to clear site data/cookies
- See `ADMIN_GUIDE.md` for backup options

### Admin Panel Not Working?
- Make sure JavaScript is enabled
- Try a different browser
- Check browser console (F12) for errors

### Dates Not Working?
- Use format: `YYYY-MM-DD` (e.g., `2024-12-25`)
- Check for typos in dates

### Something Looks Broken?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)
- Verify all files are in correct folders

## 💡 Tips

1. **Test as you go**: Edit one section at a time
2. **Backup your data**: Keep a copy of `data.js` before major edits
3. **Use relative paths**: Always use `assets/images/...` for images
4. **Mobile-friendly**: Already responsive, but test on phone too
5. **Add more content**: No limit on letters, memories, or chapters!

## 🎁 Deployment

### Host it Online:
1. **GitHub Pages** (Free)
   - Upload to GitHub repository
   - Enable GitHub Pages in settings
   
2. **Netlify** (Free)
   - Drag and drop your folder
   - Get instant URL

3. **Vercel** (Free)
   - Connect to Git
   - Auto-deploys on changes

## ❤️ Final Notes

- Keep `data.js` backed up - it's the heart of your site
- Add new memories regularly to keep it fresh
- Personalize the text to make it truly yours
- Have fun with it!

---

**Made with love 💕**

For questions or help, check the comments in each file!