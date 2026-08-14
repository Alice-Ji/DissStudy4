/*
==========================================================
Study 4 — Micro-recognition comment injection
==========================================================

This file:
1. Searches for posts using unique caption text.
2. Adds one participant comment to each selected post.
3. Adds an emoji reply from rozy.gram.
4. Uses the participant's entered username for all comments.
==========================================================
*/

function findPostByCaption(posts, captionText) {
  return posts.find((post) => {
    if (!post.caption) return false;

    return post.caption.toLowerCase().includes(captionText.toLowerCase());
  });
}

function addCommentPair(
  posts,
  captionText,
  participantUsername,
  commentText,
  influencerReply
) {
  const post = findPostByCaption(posts, captionText);

  if (!post) {
    console.warn(`⚠️ Could not find post containing caption: "${captionText}"`);
    return;
  }

  if (!Array.isArray(post.comments)) {
    post.comments = [];
  }

  post.comments.push(`${participantUsername}: ${commentText}`);
  post.comments.push(`rozy.gram: ${influencerReply}`);
}

/**
 * Injects the 12 predetermined comment/reply pairs.
 *
 * @param {Array} posts - The posts array from script.js.
 * @param {string|null} enteredUsername - Username entered by participant.
 */
export function injectStudyComments(posts, enteredUsername) {
  if (!Array.isArray(posts)) {
    console.error("❌ injectStudyComments expected posts to be an array.");
    return;
  }

  const participantUsername =
    enteredUsername || localStorage.getItem("username") || "participant";

  // Prevent duplicate injection if renderFeed() runs more than once.
  posts.forEach((post) => {
    post.comments = [];
  });

  // 1. Beauty/selfie
  addCommentPair(
    posts,
    "Just got my ID card",
    participantUsername,
    "how are you this pretty",
    "🥺"
  );

  // 2. Beauty/look
  addCommentPair(
    posts,
    "If I were a Barbie doll",
    participantUsername,
    "this is your best look yet",
    "❤️"
  );

  // 3. Face/beauty
  addCommentPair(
    posts,
    "spider",
    participantUsername,
    "your face card never declines",
    "😭"
  );

  // 4. Outfit video
  addCommentPair(
    posts,
    "Serving looks",
    participantUsername,
    "I’m obsessed with this look",
    "😭"
  );

  // 5. Monochrome outfit carousel
  addCommentPair(
    posts,
    "How can monochrome be this cool",
    participantUsername,
    "you always have the best fits",
    "❤️"
  );

  // 6. Runway video
  addCommentPair(
    posts,
    "appointed ambassador to MVFW23",
    participantUsername,
    "this look is next level",
    "😭"
  );

  // 7. Retro Seoul outfit carousel
  addCommentPair(
    posts,
    "Turning the streets of Retro Seoul",
    participantUsername,
    "this is such a cool look",
    "💫"
  );

  // 8. Cinematic scenery video
  addCommentPair(
    posts,
    "Happy song of birds",
    participantUsername,
    "this whole post feels like a movie",
    "🎬"
  );

  // 9. Birthday carousel
  addCommentPair(
    posts,
    "𝗛𝗔𝗣𝗣𝗬 𝗕𝗜𝗥𝗧𝗛𝗗𝗔𝗬",
    participantUsername,
    "this might be your best post yet",
    "❤️"
  );

  // 10. GRWM image
  addCommentPair(
    posts,
    "Get Ready With ROZY",
    participantUsername,
    "the angles in this are so good",
    "📷"
  );

  // 11. Video-focused comment
  addCommentPair(
    posts,
    "Blending into the rhythm of Seoul",
    participantUsername,
    "everything about this video is perfect",
    "🫶"
  );

  // 12. Rebirth teaser
  addCommentPair(
    posts,
    "ROZY ‘REBIRTH’ | 1st Teaser",
    participantUsername,
    "you look unreal in this post",
    "❤️"
  );

  const injectedPostCount = posts.filter(
    (post) => Array.isArray(post.comments) && post.comments.length > 0
  ).length;

  console.log(
    `✅ Study comments injected into ${injectedPostCount} posts using username "${participantUsername}".`
  );
}
