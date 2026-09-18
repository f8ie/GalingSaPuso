# Dear Ma, Dear Pa 💌

A small, playful, postcard-style guided reflection for writing a heartfelt letter to a parent, guardian, or parent figure.

This project is intentionally a **static website**: no database, no login, and no required backend.

## What it does

- English / Tagalog toggle
- 7 short optional prompts
- Perspective-taking reflection
- Generates a copyable letter from the user's own answers
- Saves the draft locally in the browser with `localStorage`
- "Send this form to someone" uses the device's native Web Share API when available, with a copy-link fallback
- "Share letter" uses the device's share sheet when available
- "Open email" creates a `mailto:` draft containing the letter
- Clear-draft control
- Responsive postcard / stationery visual style
- No external JavaScript dependencies

## Run locally

Just open `index.html` in a browser, or serve the folder with any static server.

For example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

Serving it over HTTPS (GitHub Pages or Vercel) is recommended because the Web Share API is restricted to secure contexts.

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Put `index.html`, `styles.css`, `app.js`, and `README.md` in the repository root.
3. In GitHub: Settings → Pages.
4. Select the branch/folder containing the files.
5. Open the generated Pages URL.

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. No build command is required for this static version.
4. Deploy.

## How "send this form" works

The button shares the **blank form URL**, not the user's private answers.

On supported HTTPS browsers, the site uses `navigator.share()` so the user can choose an available destination such as messaging or email. On unsupported browsers it copies the form URL to the clipboard.

This is based on the Web Share API documented by MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API
https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share

## How draft saving works

The answers are saved in the user's browser using `localStorage`. They are not uploaded by this site.

MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

Important: `localStorage` normally persists after the browser is closed, so this site says "saved on this device" rather than promising that the data disappears when the tab closes. Private/incognito behavior can differ.

## If you later want true server-side email sending

The current version deliberately avoids a server so intimate letter content isn't automatically transmitted anywhere.

If the project later needs a "Send to parent by email" button that actually sends email from your website, add a server-side endpoint or a form service.

One possible third-party option is Formspree, which documents JavaScript/AJAX form submission:
https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax

Another option for a Vercel-hosted project is a Vercel Function. Vercel documents Functions and environment variables here:
https://vercel.com/docs/functions
https://vercel.com/docs/environment-variables

For a sensitive letter tool, any server-side email feature should have a clear privacy notice and should not put email/API secrets in browser JavaScript.

## Prompt design references

The prompts here are original wording based on the project brief. They are not copied from the sources below.

The design principles draw on:

- The Gottman Institute's public material on "gentle start-up" and expressing complaints without criticism:
  https://www.gottman.com/blog/softening-startup/

- Harvard Center on the Developing Child's material on responsive relationships and "serve and return":
  https://developingchild.harvard.edu/science/key-concepts/serve-and-return/

- The School of Life's public material about parents and family relationships:
  https://www.theschooloflife.com/

These sources are used as conceptual references, not as evidence that this particular website or its prompts have been clinically or scientifically validated.

## Project positioning

The project began as a youth-led idea connected with an MCGI Youth parents-focused activity.

The public-facing resource is intentionally inclusive: it can be used by people of any religion and by people writing to a parent, guardian, or parent figure.

The tool should never pressure someone to send a letter, forgive someone, disclose trauma, or describe a relationship as loving. Skipping a prompt is always okay.

## Suggested future improvements

- Add a recipient-name field.
- Add a choice of "Parent / Guardian / Parent figure".
- Add an optional "send me a copy" feature only if a privacy-respecting email service is configured.
- Add accessibility testing with keyboard navigation and screen readers.
- Add a print-friendly postcard version.
- Add a "write this by hand" printable version.
- If server-side sending is added, add rate limiting, spam protection, data retention rules, and a clear privacy policy.


## Recent UI updates

- The English/Tagalog switch now changes **both the prompt titles and prompt helper text**.
- Added an optional recipient-name field.
- Added additional small-screen CSS for iOS/Android browsers, including full-width actions, safer typography, and reduced card padding.
