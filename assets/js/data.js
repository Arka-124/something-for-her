/* ===================================
   DATA.JS - All website data
   
   CUSTOMIZATION GUIDE:
   - Add your image URLs in the empty image: "" fields
   - Update dates in countdownEvents
   - Modify letter content, story chapters, etc.
   
   NEW: Use admin.html to add content through forms!
   Data is now stored in localStorage and merged with default data.
   =================================== */

// ===================================
// LOAD CUSTOM DATA FROM LOCALSTORAGE
// ===================================
function loadCustomData(key, defaultData) {
    const customData = JSON.parse(localStorage.getItem(key) || '[]');
    return [...defaultData, ...customData];
}

// ===================================
// DEFAULT LOVE LETTERS DATA
// ===================================
const defaultLetters = [
    {
        date: "July 19, 2025",
        preview: "Letter One: The Beginning",
        image: "", // Add image URL here or leave empty for placeholder
        isRead: false,
        content: `That day.....,

I wonder if you knew what you were doing that day. Probably not. It was just another message, wasn't it? Just another person on an app, another conversation that might lead somewhere or nowhere.
But for me, everything shifted.

"Yeah sure let's do it, Delhi tour is incomplete without its iconic street food so let's start from there."
Twenty words. That's all it took. Twenty words that somehow broke through the walls of my small, comfortable world—the one I'd built so carefully around myself, where everything was predictable and safe and mine.
I've thought about that moment so many times since. What was it exactly? The enthusiasm? The way you didn't hesitate, didn't play it cool, just jumped right in? 
Before you, I was content with simplicity. My routines, my habits, my quiet life. I wasn't looking for anything, wasn't waiting for anyone. I thought I had everything figured out.
And then you came.
It's strange, isn't it? How a single text message can become a before-and-after moment. How a stranger's words can feel like coming home. How falling can feel less like falling and more like finally, finally standing up straight.

I didn't know it then, sitting there staring at my phone, but I was already falling. Not the dramatic, movie-scene kind of falling. Just a gentle, inevitable pull—like gravity, like the earth spinning, like something that was always meant to happen.
You changed my world with that compliment and a willingness to say yes.

And I'm still falling.

Always,
Me`
    },
    {
        date: "13th August, 2024 ",
        preview: "Letter Two: The Fight",
        image: "",
        isRead: false,
        content: `That night,

That night we had our first fight.

I know we'll probably laugh about this someday—about how young and fragile we were, how everything felt so intense because we barely knew each other. But right now, in that moment, it doesn't feel small at all.

For a few hours that night, I gave up. I actually gave up on us.

It sounds dramatic, I know. But that's what I did. I sat there thinking: *Why am I fighting so hard to make a stranger understand me? Why does this hurt so much when I barely know her? Maybe this is a sign. Maybe I should just let it go.*

You were still so new to me. We were still learning each other's rhythms, still figuring out how to communicate, still stumbling over words and misunderstandings. And that night we stumbled badly.

I convinced myself it would be easier to walk away. That's what made sense, right? Cut your losses. Protect yourself. Don't invest in something that might not work out.

But then... I messaged you again.

I don't know why. I really don't. My fingers just started typing, and before I could overthink it, I hit send. Maybe it was instinct. Maybe it was hope. 

And I am *so* glad I did.

Because here's what I learned that night: giving up is easy. Walking away from a stranger is logical. But you stopped being a stranger the moment you said yes to street food and chaos. You became someone worth fighting for—even when fighting felt hard, even when I didn't know if you'd fight back.

Our bond was young, yes. Fragile, maybe. But it's real. Real enough to hurt. Real enough to make me reach out again even when every logical part of my brain said not to.

This was our first fight, but it won't be our last. We're still learning. Still growing. Still figuring out how two separate worlds merge into one.

But that night taught me something important: I don't want to give up on you. Not when things get hard. Not when we misunderstand each other. Not ever.

I'm still here. Still falling.

Always,  
*Me*`
    },
    {
        date: "24th September, 2024",
        preview: "Letter Three: The Reckoning",
        image: "",
        isRead: false,
        content: `Hey Babyy,

That day could have been the end of us.
Last night, you called. I didn't pick up. I had gone to sleep
If I had answered that call, maybe this letter wouldn't exist. We wouldn't exist. It would have all ended over the phone, in anger and hurt and words we couldn't take back.
But that evening, we met in person. Our first real meeting. And instead of the beginning I'd imagined so many times, it became a confrontation. A reckoning.
You looked at me with eyes that demanded the truth, and I had to give it to you. All of it. The lies. The deception. The month I spent making you believe something that wasn't entirely real.
I told myself she was just a friend. I genuinely believed it—or maybe I just wanted to believe it because admitting otherwise would mean admitting I was wrong. That I was hurting you. That I was being someone I didn't want to be.
But now, looking back with honest eyes, I see what I refused to see then: she wasn't just a friend. Not to her. And by pretending otherwise, by continuing to talk to her even after you told me it made you uncomfortable, I betrayed you.
I don't have a good reason for why I kept doing it. I can't explain away the choices I made. It was a judgment error, yes—but it was more than that. It was me being selfish. Me prioritizing my comfort over your trust. Me not understanding that love means putting someone else's peace above your own ego.
That version of me is gone now.
You could have walked away today. You should have, probably. I had given you every reason to. But somehow, you stayed. You stayed and made me look at myself clearly, without excuses, without the stories I'd been telling myself.
I don't deserve your forgiveness, but I'm asking for it anyway. Not because I think I've earned it, but because losing you would be losing the best thing that's ever happened to me.
I'm different now. I have to be. Because you deserve someone who tells the truth, who honors your boundaries, who chooses you—every single time, without hesitation.
Thank you for not giving up on me when you had every right to.
Still here. Still trying to be worthy of you.
Always,
Me`
    },
    {
        date: "26th September, 2024",
        preview: "Letter Four: The Last Chance",
        image: "",
        isRead: false,
        content: `Hey Babyy,

The previous day, you ignored me completely. Every message I sent disappeared into silence. Every attempt to reach you hit a wall. And I thought—no, I *knew*—it was over.

I had ruined everything. The lies, the betrayal, the month of choosing wrong—it had finally caught up with me. You were done, and I didn't blame you. I spent the entire day in a fog, mourning something beautiful that I'd destroyed with my own hands.

But then, September 26th happened.

I was cycling back home. Just pedaling through the familiar streets, lost in thoughts of what I'd lost, trying to figure out how to live in a world where you weren't mine anymore.

And then my phone buzzed.

"Okay etai last chance, bar bar ami nijer feelings hurt hocche eta mante parbo na. Ar tui jodi amay niye serious thakis asha kori tui ar or sathe kono contact e rakhbi na, ami chai na amader majhe kono meye asuk and i love you moree <3"

I stopped. Right there on the side of the road, I stopped cycling and just *stared* at my screen.

And then I jumped. Literally jumped off my bike with a happiness so pure, so overwhelming, that I didn't care who saw me or what they thought. In that moment, nothing else existed except your words and the impossible grace you were offering me.

A last chance.

You said "I love you more" with a heart. You gave me one more opportunity to be the person you deserved. After everything—after the lies, the hurt, the betrayal—you chose to believe in me again.

I read that message probably fifty times that day. I memorized every word, every punctuation mark. "Bar bar ami nijer feelings hurt hocche eta mante parbo na"—I can't keep accepting my feelings getting hurt again and again. 

You were setting a boundary. You were protecting yourself. But you were also leaving the door open, just a crack, for me to prove I could change.

That message didn't just change my day. It changed my life.

It was the moment I realized that love isn't just about falling—it's about choosing. You chose me, even when I didn't deserve it. And I chose, right there on that roadside, to never make you regret that choice.

No more contact with her. No more anything that makes you doubt me. No more choosing wrong when the right choice is standing right in front of me, offering me grace I haven't earned.

You love me more, you said. But I'm going to spend every day trying to love you most.

Thank you for that message. Thank you for that last chance. Thank you for jumping with me, even when I was the one who pushed us off the cliff.

Forever grateful, forever yours,  
Me`
    }
];

// Load letters (default + custom from localStorage)
const loveLetters = loadCustomData('customLetters', defaultLetters);

// ===================================
// DEFAULT POLAROID MEMORIES DATA
// ===================================
const defaultMemories = [
    {
        image: "", // Add image URL here
        caption: "Our first video call 💕",
        date: "January 2024"
    },
    {
        image: "",
        caption: "When you made me laugh so hard",
        date: "February 2024"
    },
    {
        image: "",
        caption: "That sunset we watched together",
        date: "March 2024"
    },
    {
        image: "",
        caption: "Our virtual movie night 🍿",
        date: "April 2024"
    },
    {
        image: "",
        caption: "Your beautiful smile ❤️",
        date: "May 2024"
    },
    {
        image: "",
        caption: "Late night conversations",
        date: "June 2024"
    },
    {
        image: "",
        caption: "You in that dress 😍",
        date: "July 2024"
    },
    {
        image: "",
        caption: "Our anniversary celebration",
        date: "August 2024"
    },
    {
        image: "",
        caption: "Random Tuesday morning",
        date: "September 2024"
    },
    {
        image: "",
        caption: "Making silly faces together",
        date: "October 2024"
    },
    {
        image: "",
        caption: "Your morning coffee ritual ☕",
        date: "November 2024"
    },
    {
        image: "",
        caption: "Best day ever",
        date: "December 2024"
    }
];

// Load memories (default + custom from localStorage)
const memories = loadCustomData('customMemories', defaultMemories);

// ===================================
// DEFAULT COUNTDOWN EVENTS DATA
// ===================================
const defaultCountdowns = [
    {
        icon: "💕",
        title: "Days Together",
        subtitle: "Since we started our journey",
        date: "2024-01-15", // CHANGE THIS: When you met (YYYY-MM-DD)
        type: "up" // Counting up
    },
    {
        icon: "✈️",
        title: "Until We Meet",
        subtitle: "Can't wait to see you!",
        date: "2025-02-14", // CHANGE THIS: Next meeting date (YYYY-MM-DD)
        type: "down" // Counting down
    },
    {
        icon: "🎉",
        title: "Our Anniversary",
        subtitle: "Celebrating our love",
        date: "2025-01-15", // CHANGE THIS: Anniversary date (YYYY-MM-DD)
        type: "down"
    },
    {
        icon: "🎂",
        title: "Your Birthday",
        subtitle: "Special day coming up!",
        date: "2025-03-20", // CHANGE THIS: Her birthday (YYYY-MM-DD)
        type: "down"
    }
];

// Load countdowns (default + custom from localStorage)
const countdownEvents = loadCustomData('customCountdowns', defaultCountdowns);

// ===================================
// DEFAULT STORY CHAPTERS DATA
// ===================================
const defaultChapters = [
    {
        title: "Chapter 1: How We Met",
        date: "The Beginning",
        image: "", // Add image URL or leave empty
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
    },
    {
        title: "Chapter 3: Falling for You",
        date: "When I Knew",
        image: "",
        text: `I can pinpoint the exact moment I fell for you. It wasn't dramatic or cinematic - it was simple and perfect.

You were telling me about your day, laughing about something silly that happened. And in that moment, I realized I wanted to hear about every single one of your days, forever.

The distance didn't scare me anymore. Because being with you, even through a screen, felt more like home than anywhere else. 💖`
    },
    {
        title: "Chapter 4: Our Journey",
        date: "Present Day",
        image: "",
        text: `Every day with you is a new page in our story. We've laughed together, supported each other through tough times, and celebrated every little victory.

The miles between us are just numbers. What's real is this connection, this love that grows stronger every single day.

I can't wait to see what the next chapters hold for us. But I know one thing for certain - I want you in every single one of them. 

Forever and always. 💕✨`
    }
];

// Load story chapters (default + custom from localStorage)
const storyChapters = loadCustomData('customStory', defaultChapters);
