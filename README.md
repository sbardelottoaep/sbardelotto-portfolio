# Sbardelotto Portfolio — Purple Layout

Minimal gaming portfolio redesign using the accent color:

```text
#A855F7
```

## Main changes

- Completely different page composition
- Circular profile photo in the hero
- Large profile column on the left
- Main introduction on the right
- One large featured portfolio card
- Three smaller portfolio cards in a side stack
- Services displayed in a 2x2 grid
- About section rebuilt as a three-column composition
- Purple accent used consistently
- Video modal, contacts and navigation preserved

## Files

```text
index.html
styles.css
script.js
assets/profile.webp
README.md
```

Do not forget to upload the `assets` folder to GitHub.

## Changing videos

Open `index.html` and find:

```html
data-video="dQw4w9WgXcQ"
```

Replace the YouTube ID.

Example:

```text
https://www.youtube.com/watch?v=abc123XYZ
```

Use:

```html
data-video="abc123XYZ"
```

The video thumbnail is loaded automatically.

## Publishing

Replace the current files in GitHub and upload the complete `assets` folder.

After the commit, Vercel will update automatically.


## Background update

This version adds the Minecraft background image with:

- soft blur
- dark transparent overlay
- subtle floating animation
- more professional background treatment

## How to upload to GitHub

1. Open your GitHub repository.
2. Click **Add file** > **Upload files**.
3. Upload these files and folders from this version:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `assets/`
4. If GitHub asks whether to replace files, confirm it.
5. Scroll down and click **Commit changes**.
6. Wait a few seconds. Vercel will redeploy automatically.

Important: upload the whole `assets` folder, because the background image is inside it.
