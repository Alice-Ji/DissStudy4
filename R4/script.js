import { injectStudyComments } from "./comments.js";
console.log("🚀 script.js has loaded successfully!");
window.setUsername = function () {
  const input = document.getElementById("username-input").value.trim();
  if (input) {
    localStorage.setItem("username", input); // Store username
    document.getElementById("username-container").style.display = "none"; // Hide input box
    document.getElementById("app").style.display = "block"; // Show feed
    username = input; // Set global username
    renderFeed(); // Ensure the feed loads properly
  } else {
    alert("Please enter a username.");
  }
};

let username = localStorage.getItem("username");

if (username) {
  document.getElementById("username-container").style.display = "none";
  document.getElementById("app").style.display = "block";
}

let likeCount = 0;

// Sample post data
const posts = [
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-1.jpg",
    ],
    caption: "Just got my ID card. How do I look?? 😭😭😭",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-2.jpg",
    ],
    caption:
      "ROZY ‘REBIRTH’ | 3rd Teaser\n\n\nThe bloom unfolds, signaling a new dawn\nA journey in full bloom, the beginning of a new era",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-3.jpg",
    ],
    caption:
      "ROZY ‘REBIRTH’ | 2nd Teaser\n\n\nA new beginning emerges, as new sprouts unfurl",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-4.jpg",
    ],
    caption:
      "Behind the Scenes 💛\nFeeling of being wrapped in a blanket with the AC blasting☁️☁️",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-5.jpg",
    ],
    caption:
      "If I were a Barbie doll? ❤️\nEveryone’s had that thought, right? ✨\n\nWho‘s gonna brush my Barbie hair tho ?😝",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-6.jpg",
    ],
    caption: "We Are All Strangers 🖤",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-7.jpg",
    ],
    caption: "Romantic aromatic night palace ⛲️",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-8.jpg",
    ],
    caption: "🌊 FOOD TRIP IN BUSAN 🌊",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-9.jpg",
    ],
    caption:
      "The sunshine is warm, and the breeze is gentle 🍃\nA perfect weather for jumping around 🐕🐾",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-10.jpg",
    ],
    caption:
      "Running my first ever charity marathon 🏃‍♀️👟🏅\n\nWe run with a heart full of passion & gratitude ❤️‍🔥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-11.jpg",
    ],
    caption: "Is K shopping always this CUTE? 🐾",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-12.jpg",
    ],
    caption: "Climbing two steps for the view 🦥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-13.jpg",
    ],
    caption: "❤️‍🔥spider🕷 woman😉",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-14.jpg",
    ],
    caption: "Caesar🖤 You’re the best part🎶🎵",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-15.jpg",
    ],
    caption: "Eat, sleep, swim,\nIt’s a day of peace🌼💫",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-16.jpg",
    ],
    caption: "Eat, sleep, swim,\nIt’s a day of peace🌼💫\nPart 2.",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-17.jpg",
    ],
    caption:
      "Rainy days & cozy vibes ☔💙\nJust a girl, a drizzle, and a dreamy mood ✨🌧",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-18.jpg",
    ],
    caption: "Drizzling outside, dreamy inside ☔💭💙",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-19.jpg",
    ],
    caption: "🛍️Came to Soho for shopping🛍️",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-20.jpg",
    ],
    caption: "Get Ready With ROZY🤳",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-1.mp4",
    ],
    caption:
      "Serving looks, but why do I see double? 👀✨ \nOne outfit, multiple vibes—guess I’m just too iconic to be singular 😉💁‍♀️",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-2.mp4",
    ],
    caption:
      "Blending into the rhythm of Seoul✨\n\nModern meets artistic, painting the city with style 💫",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-3.mp4",
    ],
    caption:
      "Ta-Dah!\nLet me introduce my companion fruit, Oh-C!✨\nAs Oh-C is kinda cynical, it took a long time to introduce itself!🤣\nPlease love and support me and my only family, Oh-C 💁🏻‍♀️ 🍊",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-4.mp4",
    ],
    caption: "🎅🏼I can go anywhere like Santa",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-5.mp4",
    ],
    caption: "ℝ𝕆ℤ𝕐 𝕎𝕀𝕋ℍ ℝ𝕆𝕊𝔼 💐",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-6.mp4",
    ],
    caption: "Post our works to host the EXPO.\n#2030WorldEXPOBUSAN",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-7.mp4",
    ],
    caption: "Idk if it's a dream or reality,\nThis is paradise on earth🍹",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-8.mp4",
    ],
    caption:
      "Happy song of birds\nTree swaying in the wind\nSunlight on the wave\nAlone time, not alone",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-9.mp4",
    ],
    caption:
      "Looking for a tranquil beach?🧘‍♂️\nCraving to explore hidden islands?🏝\nBecause I know I am😄",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-10.mp4",
    ],
    caption:
      "I've been appointed ambassador to MVFW23 starting on March 28th!🎉 \n The runway of unlimited possibilities",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-11.mp4",
    ],
    caption: "I love hanging out here! 😎🌟💖",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-12.mp4",
    ],
    caption: "CLet’s wear the future.\nLet’s wear the party.",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-13.mp4",
    ],
    caption: "🤔✨ Guess where I am!🌍✈️🔍",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-14.mp4",
    ],
    caption:
      "Just a girl and her teddy bear 🐾🐻💖 Couldn’t imagine life without this little fluffball!",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-15.mp4",
    ],
    caption:
      "Cheers to new beginnings and unforgettable memories! 🎉🥂✨ \n\nCounting down to a year full of love, laughter, and growth. Let’s make it amazing! ⏳🎆",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-16.mp4",
    ],
    caption:
      "Hanbok is Korean traditional costume.🇰🇷\nlet's promote it by wearing!📢",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-17.mp4",
    ],
    caption: "hip and Singapore vibeeee🔥🦐",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-18.mp4",
    ],
    caption: "𝘼𝙨𝙠 𝙢𝙚 🎧\nnew music video with Shinhanlife",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-19.mp4",
    ],
    caption: "⬇️CLICK⬇️ save and use it💝",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-video-20.mp4",
    ],
    caption:
      "🍊✨ Who’s got the cutest companion fruit on the internet?\n👀👉 I do! 🍊🥰🧡",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-1.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-1.2.jpg",
    ],
    caption:
      "Turning the streets of Retro Seoul into my runway 💚🌸\nShining bright in the iconic market scene 📸✨",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-2.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-2.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-2.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-2.4.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-2.5.jpg",
    ],
    caption: "How can monochrome be this cool ? 🖤⚡\nTaking it to new levels!",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-3.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-3.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-3.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-3.4.jpg",
    ],
    caption:
      "The Love Your W Breast Cancer Awareness Campaign is now celebrating its 16th year!\nFor this special occasion, 16 celebrities from 13 teams came together to grace the cover of W Korea's December issue. I am truly honored to be the seventh main feature!\nA heartfelt thank you to everyone who contributed to this meaningful cause.\n\nTeam Credits\nFashion Editor | Park Yeon Kyung\nPhotographer | Kim Young Joon\nHair | Hyunjin Kang\nMakeup | Lee Young\nNails | Hoo Jin Hee\nOn the Set | Yoo Hye Won\nAssistant | Choi In Sun",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-4.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-4.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-4.3.jpg",
    ],
    caption:
      "ROZY ‘REBIRTH’ | 1st Teaser\n\n\nA journey beyond worlds, a moment of transformation\nReborn and reimagined",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-5.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-5.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-5.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-5.4.jpg",
    ],
    caption: "Coach bag, Rozy vibes. That’s a wrap. 😎✨",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-6.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-6.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-6.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-6.4.jpg",
    ],
    caption: "Olympic Rings 🔹💛🖤💚🔴",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-7.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-7.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-7.3.jpg",
    ],
    caption: "ᗷᑌᑎᑎY ᗷᑌᑎᑎY 🐰\nᑭᗩᑎG ᑭᗩᑎG ❕ ❕ 🔫",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-8.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-8.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-8.3.jpg",
    ],
    caption: "Fall in love 💛 🕶",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-9.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-9.2.jpg",
    ],
    caption: "Watch out👋 biker newbie passing by 🏍🌬",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-10.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-10.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-10.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-10.4.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-10.5.jpg",
    ],
    caption:
      "Foods with a side of sunshine - so delicious ☀️😋\nWait, does that mean that sunshine is tasty? 🤔",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-11.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-11.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-11.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-11.4.jpg",
    ],
    caption: "Holding onto the summer in the valley🏞",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-12.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-12.2.jpg",
    ],
    caption:
      "𝗛𝗔𝗣𝗣𝗬 𝗕𝗜𝗥𝗧𝗛𝗗𝗔𝗬 𝗧𝗢 𝗠𝗘 🎉\n\n\nSeems like spending birthdays with parents is hip in these days 🤔\nSo, I am here to return the love🙌\n\nLove you, Rozy Crew 💕 Love you, Oh-roras 💕",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-13.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-13.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-13.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-13.4.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-13.5.jpg",
    ],
    caption: "So, the reason I’m baking 🧁bread🧁 is …?",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-14.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-14.2.jpg",
    ],
    caption: "Thrilled to be on my next trip already 😆🧡",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-15.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-15.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-15.3.jpg",
    ],
    caption: "Deep in the forest today to find treasure💎",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-16.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-16.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-16.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-16.4.jpg",
    ],
    caption: "My very first yacht experience⛵🥂🏝",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-17.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-17.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-17.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-17.4.jpg",
    ],
    caption:
      "First time snorkeling this summer🤿\nA lot of fish here!!🐠🐟🐡🐬",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-18.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-18.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-18.3.jpg",
    ],
    caption: "Palm vibes✨",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-19.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-19.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-19.3.jpg",
    ],
    caption: "Cheat day or Treat day❔🤔🥪🍹🍦",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-20.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-20.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-20.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-20.4.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-20.5.jpg",
    ],
    caption: "I AM SPRING💛",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-ad-image-JBL.jpg",
    ],
    caption:
      "[Sponsored by JBL]\nIt's time to feel alive, feel the music, feel the vibe!",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
];

//setupVideoAutoplay
function setupVideoAutoplay() {
  // make video play sound
  let userHasInteracted = false; // Track if the user has scrolled

  document.addEventListener("scroll", () => {
    if (!userHasInteracted) {
      document.querySelectorAll(".video-post").forEach((video) => {
        video.muted = false; // 🔊 Unmute all videos once scrolling starts
      });
      userHasInteracted = true; // Prevent further changes
    }
  }); // make video play sound

  const videos = document.querySelectorAll(".video-post");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .play()
            .catch((error) => console.warn("Autoplay prevented:", error));
        } else {
          entry.target.pause();
        }
      });
    },
    { threshold: 0.9 }
  );

  videos.forEach((video) => {
    observer.observe(video);

    const playOverlay = video.parentElement.querySelector(".play-overlay"); // ✅ Finds the correct overlay for each video
    playOverlay.classList.remove("hidden"); // ✅ Show play button on page load

    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playOverlay.classList.add("hidden"); // ✅ Hide play button when playing
      } else {
        video.pause();
        playOverlay.classList.remove("hidden"); // ✅ Show play button when paused
      }
    });

    video.addEventListener("play", () => {
      setTimeout(() => playOverlay.classList.add("hidden"), 100); // ✅ Ensure it fades out after play starts
    });

    video.addEventListener("pause", () => {
      playOverlay.classList.remove("hidden"); // ✅ Show play button when paused
    });
  });
}

// Function to shuffle posts using Fisher-Yates algorithm
function shufflePosts() {
  for (let i = posts.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [posts[i], posts[j]] = [posts[j], posts[i]]; // Swap elements
  }
}

// Function to render posts
function renderFeed() {
  shufflePosts(); // Randomize posts before rendering
  injectStudyComments(posts, username); // Inject comments
  const feed = document.getElementById("feed");
  feed.innerHTML = ""; // Clear existing content

  posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    let mediaContent = "";
    if (post.type === "image") {
      mediaContent = `<img src="${post.media[0]}" alt="Post image">`;
    } else if (post.type === "video") {
      mediaContent = `
      <div class="video-container">
      <video class="video-post" muted loop playsinline>
          <source src="${post.media[0]}" type="video/mp4">
          Your browser does not support the video tag.
      </video>
      <div class="play-overlay hidden"></div> <!-- ✅ This is the only play button now -->
  </div>
      `;
    } else if (post.type === "carousel") {
      mediaContent = `
        <div class="carousel-container">
            <button class="carousel-btn left" onclick="prevImage(${index})">&lt;</button>
            <img id="carousel-${index}" src="${post.media[0]}" alt="Carousel Image">
            <button class="carousel-btn right" onclick="nextImage(${index})">&gt;</button>
            <div class="carousel-indicator" id="indicator-${index}">1 / ${post.media.length}</div>
        </div>
      `;
    }

    postElement.innerHTML = `
      <div class="post-header">
      <img class="avatar" src="${post.profilePic}" alt="Avatar">
          <span class="username">${post.username}</span>
      </div>
      ${mediaContent}
      <p>${post.caption.replace(/\n/g, "<br>")}</p>
      <div class="post-actions">
          <img id="like-btn-${index}" src="https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-like1.png" 
               alt="Like" class="action-icon" onclick="window.likePost(${index})">
          <img id="comment-btn-${index}" src="https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-comment.png"
               alt="Comment" class="action-icon" onclick="window.toggleComment(${index})">
      </div>
      <div class="comment-section">

    <ul id="comments-${index}"></ul>

    <div id="comment-input-container-${index}"
         class="comment-input-container hidden">
        <input
            type="text"
            id="comment-input-${index}"
            placeholder="Add a comment..."
        >
        <img
            id="send-comment-${index}"
            src="https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-sendcomment.png"
            alt="Send"
            class="send-icon"
            onclick="window.addComment(${index})"
        >
    </div>

</div>
    `;

    feed.appendChild(postElement);
    updateComments(index);
  });

  setupVideoAutoplay(); // ✅ Ensure observer is set up after rendering
}

// Function to switch to the next image in the carousel
window.nextImage = function (index) {
  if (posts[index].type === "carousel") {
    if (posts[index].currentIndex < posts[index].media.length - 1) {
      posts[index].currentIndex++;
      console.log(
        `➡️ Next Image: Now showing ${posts[index].currentIndex + 1} / ${
          posts[index].media.length
        }`
      );
      updateCarousel(index);
    }
  }
};

// Function to switch to the previous image in the carousel
window.prevImage = function (index) {
  if (posts[index].type === "carousel") {
    if (posts[index].currentIndex > 0) {
      posts[index].currentIndex--;
      console.log(
        `⬅️ Previous Image: Now showing ${posts[index].currentIndex + 1} / ${
          posts[index].media.length
        }`
      );
      updateCarousel(index);
    }
  }
};

// Function to update the carousel display, including the indicator
function updateCarousel(index) {
  let post = posts[index];

  console.log(
    `🔄 Updating carousel ${index}: Now at ${post.currentIndex + 1} / ${
      post.media.length
    }`
  );

  let imageElement = document.getElementById(`carousel-${index}`);
  let indicatorElement = document.getElementById(`indicator-${index}`);

  if (imageElement) {
    imageElement.src = post.media[post.currentIndex]; // Update the image
  } else {
    console.warn(`❌ Image element "carousel-${index}" not found.`);
  }

  if (indicatorElement) {
    indicatorElement.textContent = `${post.currentIndex + 1} / ${
      post.media.length
    }`; // Fix: Removed extra parentheses
  } else {
    console.warn(`❌ Indicator element "indicator-${index}" not found.`);
  }
}

// Function to like a post (only once)
window.likePost = function (index) {
  let likeBtn = document.getElementById(`like-btn-${index}`);
  if (!posts[index].liked) {
    posts[index].likes++;
    posts[index].liked = true;
    likeCount++; // Increase total like count
    likeBtn.src =
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-like2.png";
  } else {
    posts[index].likes--;
    posts[index].liked = false;
    likeCount--; // Decrease total like count if unliked
    likeBtn.src =
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-like1.png";
  }
  // ✅ Send updated data to Qualtrics on every like
  sendCommentsToQualtrics();
};

// Function to add a comment
window.addComment = function (index) {
  const input = document.getElementById(`comment-input-${index}`);
  if (input.value.trim()) {
    posts[index].comments.push(input.value);
    updateComments(index);
    input.value = ""; // Clear input
  }
};

// Function to update comments
function updateComments(index) {
  const commentList = document.getElementById(`comments-${index}`);
  commentList.innerHTML = ""; // Clear and re-add comments

  posts[index].comments.forEach((comment) => {
    const newComment = document.createElement("li");
    newComment.textContent = comment;

    // 🚨 THIS FORCES THE COMMENTS TO BE ON A NEW LINE 🚨
    newComment.style.display = "block";
    newComment.style.width = "100%";
    newComment.style.marginTop = "5px";
    newComment.style.wordWrap = "break-word";
    newComment.style.clear = "both"; // 💥 Ensures no floating elements next to it

    commentList.appendChild(newComment);
  });

  // 🚀 FORCES THE BROWSER TO RERENDER THE COMMENTS 🚀
  commentList.style.display = "none";
  setTimeout(() => (commentList.style.display = "block"), 10);
}

// Load the feed when the page loads
renderFeed();

// Global variable to store all comments
let collectedComments = [];

window.addComment = function (index) {
  const input = document.getElementById(`comment-input-${index}`);
  if (input.value.trim()) {
    let comment = `${localStorage.getItem("username")}: ${input.value.trim()}`;
    posts[index].comments.push(comment);
    collectedComments.push(comment);
    updateComments(index);
    input.value = "";

    console.log("✅ New comment:", comment);

    // Send to Qualtrics
    sendCommentsToQualtrics();
  }
};

window.sendCommentsToQualtrics = function () {
  let commentsString = collectedComments.join(" | ");
  let qualtricsURL = "https://illinois.qualtrics.com";

  console.log("Sending to Qualtrics:", {
    comments: commentsString,
    likes: likeCount,
  });

  window.parent.postMessage(
    { comments: commentsString, likes: likeCount },
    qualtricsURL
  );
};

window.toggleComment = function (index) {
  const inputContainer = document.getElementById(
    `comment-input-container-${index}`
  );

  inputContainer.classList.toggle("hidden");

  if (!inputContainer.classList.contains("hidden")) {
    document.getElementById(`comment-input-${index}`).focus();
  }
};
