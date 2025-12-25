const placeholderPhoto = "assets/placeholder-heart.svg";

const baseExtensions = ["jpg", "jpeg", "png", "webp", "heic"];
const extensionCandidates = [
  ...new Set([...baseExtensions, ...baseExtensions.map((ext) => ext.toUpperCase())])
];
const folderCandidates = ["assets", "assets/photos"];

function makeSrcCandidates(baseNames) {
  return folderCandidates.flatMap((folder) =>
    baseNames.flatMap((name) =>
      extensionCandidates.map((ext) => `${folder}/${name}.${ext}`)
    )
  );
}

const config = {
  recipient: "Huimin",
  hero: {
    eyebrow: "Merry Christmas / 圣诞快乐",
    title: "Huimin, you make my days sweeter.",
    lede:
      "A tiny page for you - for our laughs, our makan dates, and all the little moments that feel like home. 谢谢你一直这么可爱。"
  },
  tags: ["makan dates", "傻笑时刻", "Happy moment"],
  photos: {
    primary: {
      filenames: ["Primary Picture", "primary-picture", "primary"],
      alt: "Huimin and me smiling together",
      caption: "俊男美女"
    },
    funnies: [
      {
        filenames: ["Funny 1", "funny-1", "funny-one"],
        alt: "Huimin with a bowl of noodles, surprised look",
        note: "huh? 蒙圈的脸"
      },
      {
        filenames: ["Funny 2", "funny-2", "funny-two"],
        alt: "Huimin blocking the camera with her hand at the table",
        note: "eh, you don't take picture of me lah, haha"
      },
      {
        filenames: ["Funny 3", "funny-3", "funny-three"],
        alt: "Our goofy selfie together",
        note: "haha I am beautiful girl"
      },
      {
        filenames: ["Funny 5", "funny-5", "funny-five"],
        alt: "Close-up playful face",
        note: "Do I look like 土拨鼠?"
      }
    ]
  },
  letter: {
    intro:
      "Looking at these photos, I can hear you saying \"eh, don't take picture lah\" and then smiling anyway. 看到你这些表情，我每次都会笑出来。",
    body:
      "谢谢你陪我一起吃、一起闹、一起变幼稚。With you, even the most normal day feels like a little celebration.",
    closing: "圣诞快乐，Huimin。谢谢你把日子变得更暖、更好。",
    signature: "- 爱你的 Jiawei"
  },
  wishes: ["愿我们和你家人都平安健康、生活安稳。", "愿我们赚多多钱 / earn more more money."],
  footerNote: "Made for Huimin, with all my love."
};

function applyImage(el, src, altText) {
  const sources = Array.isArray(src) ? [...src, placeholderPhoto] : [src, placeholderPhoto];
  let attemptIndex = 0;

  const tryNext = () => {
    if (attemptIndex >= sources.length) return;
    el.src = sources[attemptIndex];
    el.alt = altText || "Shared moment together";
    attemptIndex += 1;
  };

  el.addEventListener(
    "error",
    () => {
      tryNext();
    },
    { once: false }
  );

  tryNext();
}

function applyConfig(cfg) {
  document.getElementById("heroEyebrow").textContent = cfg.hero.eyebrow;
  document.getElementById("heroTitle").textContent = cfg.hero.title;
  document.getElementById("heroLede").textContent = cfg.hero.lede;

  const primaryPhoto = document.getElementById("photo");
  const primarySources = makeSrcCandidates(cfg.photos.primary.filenames);
  applyImage(primaryPhoto, primarySources, cfg.photos.primary.alt);
  document.getElementById("photoCaption").textContent = cfg.photos.primary.caption;

  document.getElementById("wishIntro").textContent = cfg.letter.intro;
  document.getElementById("wishBody").textContent = cfg.letter.body;
  document.getElementById("wishClosing").textContent = cfg.letter.closing;
  document.getElementById("signature").textContent = cfg.letter.signature;
  document.getElementById("footerNote").textContent = cfg.footerNote;

  const tags = document.getElementById("memoryTags");
  tags.innerHTML = "";
  cfg.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tags.appendChild(span);
  });

  const wishList = document.getElementById("wishList");
  wishList.innerHTML = "";
  cfg.wishes.forEach((wish) => {
    const item = document.createElement("li");
    item.textContent = wish;
    wishList.appendChild(item);
  });

  const funnyGrid = document.getElementById("funnyGrid");
  funnyGrid.innerHTML = "";
  cfg.photos.funnies.forEach((photo) => {
    const card = document.createElement("article");
    card.className = "memory-card";
    card.tabIndex = 0;

    const img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    const sources = makeSrcCandidates(photo.filenames);
    applyImage(img, sources, photo.alt);

    const label = document.createElement("p");
    label.className = "memory-label";
    label.textContent = photo.note;

    card.appendChild(img);
    card.appendChild(label);
    funnyGrid.appendChild(card);

    attachLightbox(card, img, photo.note);
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
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.querySelector(".snow-canvas");
  if (!canvas) return;
  const flakeCount = window.innerWidth < 600 ? 30 : 50;
  for (let i = 0; i < flakeCount; i += 1) {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    const size = Math.random() * 4 + 2;
    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.animationDuration = `${Math.random() * 8 + 9}s`;
    flake.style.animationDelay = `${Math.random() * 5}s`;
    canvas.appendChild(flake);
  }
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  items.forEach((item) => {
    const delay = Number(item.dataset.delay || 0);
    item.style.setProperty("--delay", `${delay}ms`);
    if (reduceMotion) {
      item.classList.add("is-visible");
    }
  });
  if (reduceMotion) return;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  items.forEach((item) => observer.observe(item));
}

const lightboxState = {
  root: document.getElementById("lightbox"),
  image: document.getElementById("lightboxImage"),
  caption: document.getElementById("lightboxCaption"),
  closeButton: document.getElementById("lightboxClose"),
  backdrop: document.querySelector(".lightbox__backdrop")
};

function openLightbox(src, altText, caption) {
  if (!lightboxState.root) return;
  lightboxState.image.src = src;
  lightboxState.image.alt = altText || "Photo preview";
  lightboxState.caption.textContent = caption || "";
  lightboxState.root.hidden = false;
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  if (!lightboxState.root) return;
  lightboxState.root.hidden = true;
  document.body.classList.remove("lightbox-open");
}

function attachLightbox(card, img, caption) {
  const open = () => openLightbox(img.src, img.alt, caption);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
}

function setupLightbox() {
  if (!lightboxState.root) return;
  lightboxState.closeButton.addEventListener("click", closeLightbox);
  if (lightboxState.backdrop) {
    lightboxState.backdrop.addEventListener("click", closeLightbox);
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightboxState.root.hidden) {
      closeLightbox();
    }
  });
}

applyConfig(config);
toggleTheme();
createSnowflakes();
setupReveal();
setupLightbox();
