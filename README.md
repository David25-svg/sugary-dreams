# Sugary Dreams Website

Official static website for **Sugary Dreams**, a custom cake business based in **Brooklyn, New York**.

## Live site
GitHub Pages:
`https://david25-svg.github.io/sugary-dreams/`

## What this version fixes
- Removes all Git merge-conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
- Uses one clean header/navigation.
- Uses the real Sugary Dreams logo.
- Uses only real Sugary Dreams cake photography — no stock images.
- Uses the repository's existing `images/` folder. **Do not create `images/cakes/`.**
- Responsive desktop/mobile layout.
- Gallery loads additional cakes without loading every image into the first screen.
- Order buttons use the business email and Instagram.

## Repository structure

```text
sugary-dreams/
├── index.html
├── styles.css
├── script.js
├── README.md
├── Sugary Dreams.jpg
└── images/
    ├── IMG_0127.jpeg
    ├── IMG_0131.jpeg
    ├── ...
    └── IMG_9196.jpeg
```

## Important: upload/replace these files
Replace the existing versions of:
- `index.html`
- `styles.css`
- `script.js`
- `README.md`

Keep:
- `Sugary Dreams.jpg`
- the entire `images/` folder

## Featured-image choices
The homepage intentionally leads with a mix of the strongest portfolio styles:
- `IMG_6357.jpeg` — elegant two-tier floral cake
- `IMG_4657.jpeg` — colorful circus cake
- `IMG_7768.jpeg` — two-tier ice-cream birthday cake
- `IMG_9196.jpeg` — detailed pink winter first-birthday cake

The gallery order is curated to show range early: elegant, kids, colorful, themed and sculptural work before the rest of the portfolio.

## Contact links currently used
- Email: `aurora.ap99@gmail.com`
- Instagram: `https://www.instagram.com/sugaryydreams/?hl=en`

## Deploying with GitHub Pages
1. Upload/replace the four files listed above in the repository root.
2. Make sure `Sugary Dreams.jpg` remains in the root.
3. Make sure the cake JPEGs remain inside `images/`.
4. Commit the changes.
5. GitHub Pages will rebuild the site automatically.

If GitHub shows a merge conflict while editing a file, do **not** commit text containing:
`<<<<<<< HEAD`, `=======`, or `>>>>>>>`.

## Tech
Plain HTML, CSS and JavaScript. No build system or framework is required.
