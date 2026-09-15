# Sugary Dreams Website

Official static website for **Sugary Dreams**, a Brooklyn, New York custom sweets business creating cakes, cupcakes, cookies, cake pops and desserts for birthdays, baby showers, weddings and other celebrations.

## Files

- `index.html` — main website
- `styles.css` — all website styling and endless ticker animation
- `script.js` — gallery and mobile navigation
- `terms.html` — Terms of Service
- `refund-policy.html` — Refund & Cancellation Policy
- `privacy.html` — Privacy Policy
- `Sugary Dreams.jpg` — logo file (keep this exact filename, or update the image path in `index.html`)
- `images/cakes/` — cake and sweets photography

## Required image structure

Create this exact folder structure in the repository:

```text
sugary-dreams/
├── index.html
├── styles.css
├── script.js
├── terms.html
├── refund-policy.html
├── privacy.html
├── README.md
├── Sugary Dreams.jpg
└── images/
    └── cakes/
        ├── IMG_0127.jpeg
        ├── IMG_0131.jpeg
        ├── ...
        └── IMG_9196.jpeg
```

**Important:** GitHub filenames are case-sensitive. The website currently expects `.jpeg`, not `.jpg`.

## Uploading to GitHub

1. Open the `sugary-dreams` repository.
2. Make sure `index.html` is in the repository root—not inside another folder.
3. Upload/replace `index.html`, `styles.css`, `script.js`, the three policy pages and this README.
4. Create `images`, then inside it create `cakes`, and upload the dessert photos there.
5. Keep the logo in the repository root as `Sugary Dreams.jpg`.
6. Commit the changes.

## GitHub Pages

In GitHub go to **Settings → Pages** and use:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

The published site should then be available at the repository's GitHub Pages URL.

## Endless ticker

The burgundy specialty bar uses two identical text groups and translates by exactly 50%, creating a seamless continuous loop across the entire viewport with no intentional blank section.

## Before launch

The `Start Your Order` button currently opens a blank email draft because the bakery's final business email/order link was not provided. Replace the `mailto:` URL in `index.html` with the preferred email, order form, or Instagram link.

The policy pages are practical website templates, not legal advice. Review the deposit/cancellation terms with the business owner before publishing them as the final policies.
