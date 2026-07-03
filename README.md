# Bapa Rao Pendyala — Portfolio

A personal single-page portfolio site built with React and Vite — a bento-grid hero, a project showcase, an experience/education timeline, a credentials section, an about section, and a working contact form that writes submissions straight into a Google Sheet, all stacked on one scrollable page with anchor-link navigation.

**Sections:** Home · Projects · Experience · Credentials · About · Contact

## Tech stack

- [React 19](https://react.dev/) for UI
- [Vite](https://vite.dev/) for dev server and bundling
- Plain CSS with a shared design-token system (`src/index.css`) — no CSS framework
- [Google Apps Script](https://developers.google.com/apps-script) as a zero-backend endpoint for the contact form

## Project structure

```
src/
├── App.jsx              # stacks all sections inside <main>
├── main.jsx             # app entry point
├── index.css             # design tokens (colors, fonts, radius) + shared `.section` layout
├── components/
│   ├── Navbar.jsx         # anchor-link nav with scroll-spy + mobile hamburger menu
│   ├── Footer.jsx         # includes a "Back to top" anchor
│   └── SocialIcons.jsx    # shared LinkedIn / GitHub / LeetCode icon links
├── pages/                # each renders one <section id="..."> of the single page
│   ├── Home.jsx           # bento-grid hero, stats strip, resume link (id="top")
│   ├── Projects.jsx       # project cards (edit the `projects` array to add more)
│   ├── Experience.jsx     # work + education timeline (edit the `timeline` array)
│   ├── Certifications.jsx # credential cards linking to PDFs (edit the `certifications` array)
│   ├── About.jsx          # bio, photo, skills
│   └── Contact.jsx        # contact form wired to Google Sheets
└── assets/
    └── profile.jpg
public/
└── documents/            # drop resume.pdf and certificates/*.pdf here — see documents/README.md
scripts/
└── apps-script.gs        # Google Apps Script — paste into your Sheet to receive form submissions
```

## Getting started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

Other commands:

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # run oxlint
```

## Wiring up the contact form

The contact form POSTs to a Google Apps Script Web App, which appends each submission as a row in a Google Sheet. No backend server required.

1. Create (or open) a Google Sheet to store submissions.
2. In the Sheet, go to **Extensions → Apps Script**.
3. Delete the default code and paste in the contents of [`scripts/apps-script.gs`](scripts/apps-script.gs).
4. **Deploy → New deployment → Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Authorize the script when prompted, then copy the deployment URL (ends in `/exec`).
6. Create a `.env` file in the project root (copy `.env.example`) and set:
   ```
   VITE_SHEET_ENDPOINT=https://script.google.com/macros/s/XXXXXXXX/exec
   ```
7. Restart the dev server so Vite picks up the new env var.

Without `VITE_SHEET_ENDPOINT` set, the form will show a "Failed — try again" state on submit instead of silently failing.

## Customizing

- **Colors, fonts, spacing:** edit the CSS custom properties in the `:root` block of `src/index.css` — every section pulls from these tokens (`--bg`, `--card`, `--ink`, `--font-display`, `--font-body`, etc.).
- **Section order:** reorder the component list inside `<main>` in `src/App.jsx` — update the matching links in `src/components/Navbar.jsx` to keep the nav and scroll-spy in sync.
- **Projects:** edit the `projects` array at the top of `src/pages/Projects.jsx`.
- **Skills:** edit the `skills` array at the top of `src/pages/About.jsx`.
- **Experience/education:** edit the `timeline` array at the top of `src/pages/Experience.jsx`.
- **Certifications:** edit the `certifications` array at the top of `src/pages/Certifications.jsx`, and drop the matching PDFs into `public/documents/certificates/` (see `public/documents/README.md` for exact filenames).
- **Resume:** drop `resume.pdf` into `public/documents/` — linked from the Home stats strip.
- **Social links:** edit the URLs in `src/components/SocialIcons.jsx` (shared across About, Contact, and the Footer).
- **Profile photo:** replace `src/assets/profile.jpg` with your own image (same filename), or update the `import` path in `Home.jsx` / `About.jsx`.

## Deployment

This is a static Vite app — `npm run build` outputs a static `dist/` folder deployable to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.). No server-side code is required since the contact form talks directly to Google Apps Script from the browser.
