# bmatterOS

Your personal game portal — PWA with about:blank cloaking, hosted on Cloudflare Pages.

---

## File Structure

```
bmatterOS/
├── index.html        ← Boot/loading screen + PWA entry point
├── app.html          ← The actual OS UI (gets injected into about:blank)
├── app-bundle.js     ← Fetches app.html and prepares it for cloaking
├── manifest.json     ← Makes it installable as a PWA
├── sw.js             ← Service worker (required for PWA install prompt)
├── icon-192.png      ← App icon (YOU NEED TO ADD THIS)
├── icon-512.png      ← App icon large (YOU NEED TO ADD THIS)
└── README.md
```

---

## Setup Steps

### 1. Add Icons
You need two icon images in the root folder:
- `icon-192.png` — 192×192 pixels
- `icon-512.png` — 512×512 pixels

Make them in any image editor, or use a free tool like https://favicon.io
Just make sure they're PNG files with those exact names.

### 2. Push to GitHub
Upload all files to your GitHub repo (bmatterOS or whatever you named it).

### 3. Deploy on Cloudflare Pages
1. Go to Cloudflare Dashboard → Workers & Pages
2. Click "Get started" next to Pages
3. Connect to Git → select your GitHub repo
4. Build settings:
   - Framework preset: **None**
   - Build command: (leave blank)
   - Build output directory: `/` or leave blank
5. Click Save and Deploy

Cloudflare will give you a URL like: `https://bmatteros.pages.dev`

### 4. Install as PWA
1. Open your pages.dev URL in Chrome
2. Look for the install icon (⊕) in the address bar
3. Click it → Install
4. The app opens as a standalone window

---

## Adding More Games

Open `app.html` and find this section near the top of the `<script>` tag:

```js
const GAMES = [
  {
    id: 'tictactoe',
    name: 'Tic-Tac-Toe',
    emoji: '⚔️',
    tag: 'built-in',
    type: 'builtin',
    desc: 'Classic X vs O strategy game'
  },
  // ADD MORE GAMES HERE:
  // { id: 'drifthunters', name: 'Drift Hunters', emoji: '🚗', tag: 'racing', type: 'iframe', url: 'https://...' },
];
```

For iframe games, just add an entry with `type: 'iframe'` and the game's URL.

---

## Themes
Available themes: red (default), blue, green, purple, orange, cyan, light
Change in Settings tab inside the app.
