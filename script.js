const placeholderPhoto = "assets/photos/placeholder-heart.svg";

const config = {
  recipient: "Huimin",
  photos: {
    primary: {
      src: "assets/primary-picture.jpg",
      alt: "Our favorite holiday photo together",
      caption: "One of my favorite memories with you."
    },
    funnies: [
      { src: "assets/funny-1.jpg", alt: "Laughing together", note: "When we couldn't stop giggling." },
      { src: "assets/funny-2.jpg", alt: "Goofy pose", note: "Our silliest selfie." },
      { src: "assets/funny-3.jpg", alt: "Holiday blooper", note: "The outtake I love most." },
      { src: "assets/funny-4.jpg", alt: "Candid moment", note: "You being effortlessly cute." }
    ]
  },
  memories: ["First hot cocoa together", "Winter walks", "Our favorite song"],
  promises: [
    "Hot chocolate dates",
    "Cozy movie nights",
    "Endless back hugs",
    "Listening without hurry",
    "Planning our next adventure",
    "Saving a dance just for you"
  ],
  wish: {
    intro: "Every twinkle in the lights reminds me of the way you make me feel seen and loved.",
    body:
      "I hope this season wraps you in the same warmth you gift me daily. You deserve quiet mornings, laughter that echoes, and a hand that never lets go. Thank you for being my gentle place to land.",
    closing: "Here's to more cozy winters and endless memories—always side by side."
  }
};

function applyImage(el, src, altText) {
  el.src = src;
  el.alt = altText || "Shared moment together";
  el.addEventListener(
    "error",
    () => {
      el.src = placeholderPhoto;
    },
    { once: true }
  );
}

function applyConfig(cfg) {
  document.getElementById("recipient").textContent = cfg.recipient;

  const primaryPhoto = document.getElementById("photo");
  applyImage(primaryPhoto, cfg.photos.primary.src, cfg.photos.primary.alt);
  document.getElementById("photoCaption").textContent = cfg.photos.primary.caption;
  document.getElementById("wishIntro").textContent = cfg.wish.intro;
  document.getElementById("wishBody").textContent = cfg.wish.body;
  document.getElementById("wishClosing").textContent = cfg.wish.closing;

  const tags = document.getElementById("memoryTags");
  tags.innerHTML = "";
  cfg.memories.forEach((memory) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = memory;
    tags.appendChild(span);
  });

  const funnyGrid = document.getElementById("funnyGrid");
  funnyGrid.innerHTML = "";
  cfg.photos.funnies.forEach((photo) => {
    const card = document.createElement("article");
    card.className = "memory-card";

    const img = document.createElement("img");
    img.loading = "lazy";
    applyImage(img, photo.src, photo.alt);

    const label = document.createElement("p");
    label.className = "memory-label";
    label.textContent = photo.note;

    card.appendChild(img);
    card.appendChild(label);
    funnyGrid.appendChild(card);
  });

  const promises = document.getElementById("promiseList");
  promises.innerHTML = "";
  cfg.promises.forEach((promise) => {
    const btn = document.createElement("button");
    btn.className = "promise";
    btn.dataset.revealed = "false";
    btn.innerHTML = `<span class="icon">★</span><span class="text">${promise}</span>`;
    btn.addEventListener("click", () => {
      const state = btn.dataset.revealed === "true";
      btn.dataset.revealed = (!state).toString();
    });
    promises.appendChild(btn);
  });
}

function toggleTheme() {
  const checkbox = document.getElementById("themeToggle");
  const apply = () => {
    document.body.dataset.theme = checkbox.checked ? "night" : "";
  };
  checkbox.addEventListener("change", apply);
  apply();
}

function createSnowflakes() {
  const canvas = document.querySelector(".snow-canvas");
  const flakeCount = window.innerWidth < 600 ? 40 : 70;
  for (let i = 0; i < flakeCount; i += 1) {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    const size = Math.random() * 5 + 2;
    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.animationDuration = `${Math.random() * 8 + 8}s`;
    flake.style.animationDelay = `${Math.random() * 5}s`;
    canvas.appendChild(flake);
  }
}

applyConfig(config);
toggleTheme();
createSnowflakes();
