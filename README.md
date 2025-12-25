# Christmas Wish for HM

A simple static site to share a personalized Christmas greeting. Open `index.html` in a browser to see the page.

## Project structure
- `index.html` – page markup for the greeting.
- `styles.css` – layout, gradients, snow animation, and responsive styling.
- `script.js` – personalization hooks (names, memories, promises, snow config).
- `assets/` – place your images here. The page currently references `assets/placeholder-heart.svg` until you add your own photo.

## How to add your photos
1. Drop your **primary photo** and **four funny pictures** into `assets/` (or `assets/photos/` if you want to keep them grouped).
2. Open `script.js` and update the `config.photos.primary.src` and each of the four `config.photos.funnies` entries so the filenames match what you uploaded.
3. Tweak the captions, memories, promises, and wish text to sound like you.
4. Refresh `index.html` in your browser to see your pictures and words together.

## If your GitHub repo looks empty
This workspace already has the site files locally. To see them on GitHub:
1. Commit the files on your branch if you make changes.
2. Push the branch to your GitHub remote (e.g., `git push origin <branch-name>`).
3. Refresh the repository page; the files will appear once pushed.

If you need help pushing or want me to wire in your photos, let me know the filenames after you upload them to `assets/`.
