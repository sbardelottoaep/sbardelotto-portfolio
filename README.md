[README.md](https://github.com/user-attachments/files/29102684/README.md)
# Sbardelotto Portfolio — Orange Layout

Minimal gaming portfolio redesign using the accent color:

```text
#FF9000
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
- Orange accent used consistently
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
