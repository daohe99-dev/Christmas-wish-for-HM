# Christmas Wish for HM

A simple static site to share a personalized Christmas greeting. Open `index.html` in a browser to see the page.

## Project structure
- `index.html` – page markup for the greeting.
- `styles.css` – layout, gradients, snow animation, and responsive styling.
- `script.js` – personalization hooks (names, memories, photo lookup, snow config).
- `assets/` – place your images here. The page currently references `assets/placeholder-heart.svg` until you add your own photo.

## How to add your photos
1. Drop your **primary photo** and **four funny pictures** into `assets/` (or `assets/photos/` if you want to keep them grouped). Common names like `Primary Picture.jpg`, `Primary Picture.png`, or `Funny 1.jpeg` are auto-tried in both folders.
2. If you used different names, open `script.js` and update the `filenames` lists under `config.photos.primary` and `config.photos.funnies`. Every name you list is tried across `.jpg`, `.jpeg`, `.png`, `.webp`, `.heic` (plus uppercase extensions) and both folders, with a graceful fallback to the heart placeholder.
3. Tweak the captions, memories, and wish text to sound like you.
- `script.js` – personalization hooks (names, memories, promises, snow config).
- `assets/` – place your images here. The page currently references `assets/placeholder-heart.svg` until you add your own photo.

## How to add your photos
1. Drop your **primary photo** and **four funny pictures** into `assets/` (or `assets/photos/` if you want to keep them grouped). Common names like `Primary Picture.jpg` or `Funny 1.jpg` are already auto-tried.
2. If you used different filenames, open `script.js` and update the entries in `config.photos.primary.src` and `config.photos.funnies` so they point at your exact files (you can supply multiple options per image—each will be tried in order with a graceful fallback).
3. Tweak the captions, memories, promises, and wish text to sound like you.
4. Refresh `index.html` in your browser to see your pictures and words together.

## If your GitHub repo looks empty
This workspace already has the site files locally. To see them on GitHub:
1. Commit the files on your branch if you make changes.
2. Push the branch to your GitHub remote (e.g., `git push origin <branch-name>`).
3. Refresh the repository page; the files will appear once pushed.

If you need help pushing or want me to wire in your photos, let me know the filenames after you upload them to `assets/`.
