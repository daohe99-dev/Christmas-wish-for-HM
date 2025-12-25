# Christmas Wish for HM

A simple static site to share a personalized Christmas greeting. Open `index.html` in a browser to see the page.

## Project structure
- `index.html` – page markup for the greeting.
- `styles.css` – layout, gradients, snow animation, and responsive styling.
- `script.js` – personalization hooks (names, memories, promises, snow config).
- `assets/` – place your images here. The page currently references `assets/placeholder-heart.svg` until you add your own photo.

## How to add your photo
1. Put your primary couple photo into the `assets/` folder (e.g., `assets/us.jpg`).
2. In `script.js`, update the `config.photo.src` value to the filename you uploaded.
3. Refresh `index.html` in your browser to see it live.

Optional: add 2–3 extra photos if you want a rotating gallery later; share their filenames and we can wire up a simple carousel.

## If your GitHub repo looks empty
This workspace already has the site files locally. To see them on GitHub:
1. Commit the files on your branch if you make changes.
2. Push the branch to your GitHub remote (e.g., `git push origin <branch-name>`).
3. Refresh the repository page; the files will appear once pushed.

If you need help pushing or want me to wire in your photos, let me know the filenames after you upload them to `assets/`.
