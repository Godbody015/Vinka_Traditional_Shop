# Vinka Traditional Shop — Website

## Structure
```
vinka-shop/
├── index.html          # page markup only
├── css/style.css        # all styling
├── js/script.js         # page filtering + nav
├── assets/images/       # product & logo photos
└── README.md
```

## Deploy on GitHub Pages
1. Create a new repo on GitHub (e.g. `vinka-shop`).
2. Upload/push all files in this folder to the repo (keep the same structure).
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set Source = "Deploy from a branch", Branch = `main`, folder = `/ (root)`.
5. Save. GitHub gives you a live URL within a minute or two:
   `https://<your-username>.github.io/vinka-shop/`
6. (Optional) Add a custom domain later via the same Pages settings + a `CNAME` file.

## Updating content later
- Swap product photos: drop a new file into `assets/images/`, update the `src="assets/images/..."` in `index.html`.
- Change prices/text: edit directly in `index.html`.
- Change colors/fonts: edit the `:root` variables at the top of `css/style.css`.
- Change WhatsApp number: search for `wa.me/27600000000` in `index.html` and replace with the real number.
