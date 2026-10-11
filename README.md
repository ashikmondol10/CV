# Martin Ashik – Accounts & Finance CV Website

A single-page personal CV website for Martin Ashik (Ashik Mondol), built with plain HTML5, CSS3 and vanilla JavaScript. No frameworks, no build step, no paid dependencies, no trackers. It is ready to publish on GitHub Pages and to connect to a custom domain later.

## Features

- Sticky navigation, mobile hamburger menu, active-section highlight, smooth scrolling
- Sections: Home, About, Experience, Skills, Education, Achievement, Professional Strengths, Contact
- "Download My CV" button that points to `assets/Martin_Ashik_CV.pdf` and shows a message if the file is missing
- Easy-to-edit employment dates in the Experience section
- Skills shown as labelled categories (no percentages)
- SEO: title, description, canonical, Open Graph, theme colour, favicon, `robots.txt`, `sitemap.xml`, Person + ProfilePage JSON-LD
- Accessible: semantic HTML, skip link, keyboard navigation, visible focus rings, reduced-motion support
- Works without JavaScript (content and navigation stay usable)
- Custom `404.html` for GitHub Pages

## File structure

```
martin-ashik-cv/
├── index.html
├── styles.css
├── script.js
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── 404.html
├── README.md
└── assets/
    ├── profile.jpg          <- Your headshot (cropped square)
    ├── og-image.png         <- Social sharing card (generated placeholder, replace if you like)
    └── Martin_Ashik_CV.pdf  <- Your CV, as supplied
```

> The CV PDF and photo are your own files. If the PDF is ever missing or renamed, the Download button hides itself on the live site and shows a short message instead.
>
> **Privacy check before publishing:** the PDF is public once the site is live, and it currently contains your phone number and your two references' phone numbers and email addresses. Consider uploading a web version without the References section (and without your phone number if you prefer) as `assets/Martin_Ashik_CV.pdf`.

## Personalization checklist

- [x] CV PDF added: `assets/Martin_Ashik_CV.pdf`
- [x] Profile photo added: `assets/profile.jpg`
- [x] Employment dates set (June 2024 – Present)
- [ ] Remove references and phone numbers from the web copy of the PDF if you do not want them public
- [ ] Replace every `YOUR-DOMAIN-HERE.example` with your real address (see SEO section)
- [ ] Add an authentic award certificate image only if you have one
- [ ] Keep the website text and the PDF consistent whenever you update either
- [ ] Optional: replace `assets/og-image.png` (1200 × 630) with your own share image

## How to edit

### Personal information
Open `index.html` and search for the text you want to change (email, LinkedIn URL, role). The email and LinkedIn appear in the Contact section, the footer, the hero button and the JSON-LD block near the top of the file.

### Profile photo
1. Use a square image, about 800 × 800 px, under 200 KB (JPG).
2. Name it `profile.jpg` and replace the file in `assets/`.
3. If you use a different file name, change `src` and `alt` in the `<img id="profile-img">` tag.

### CV PDF
1. Export your latest CV as PDF.
2. Rename it exactly `Martin_Ashik_CV.pdf`.
3. Put it in `assets/` (replace the old one).
4. Commit and push. After the site updates, test the button. Your browser may cache the old file, so refresh with Ctrl+F5 (Cmd+Shift+R on Mac).

### Experience dates
In `index.html`, find the comment `EDIT YOUR DATES HERE` and change the text inside the two `<time>` tags (it currently shows June 2024 – Present). Add only dates you can confirm.

### Adding another job
Copy the whole `<li class="timeline-item"> ... </li>` block, paste it under the comment that says `TO ADD AN EARLIER ROLE`, and edit the text.

### Skills
Skills sit in the `<dl class="ledger">` list. Each skill is one `<li>`. Add or remove `<li>` lines inside a category, or copy a whole `ledger-row` to add a category. Only list software and skills you can confirm.

### Colours
Edit the variables at the top of `styles.css` (`--navy`, `--blue`, `--gold`, `--gray`, `--text`).

### SEO metadata
1. In `index.html`, replace `https://YOUR-DOMAIN-HERE.example/` in: the `canonical` link, `og:url`, `og:image`, and the JSON-LD block.
2. In `robots.txt` and `sitemap.xml`, replace the same placeholder.
3. Tip: use your editor's Find and Replace for `YOUR-DOMAIN-HERE.example`.
4. Until you do this, search engines will see a placeholder address. Do not publish the placeholder as final.

If you publish at `https://username.github.io/martin-ashik-cv/` first, use that full address (with the trailing slash) in place of the placeholder.

## Deploy with GitHub Pages

1. Create a new GitHub repository named `martin-ashik-cv` (public).
2. Upload all files and folders (drag them into the repository page, or use Git).
3. Make sure `index.html` is in the repository root, not inside another folder.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
6. Choose the **main** branch and the **/ (root)** folder.
7. Click **Save** and wait a minute or two.
8. Open the address GitHub shows at the top of the Pages screen.
9. Test: mobile menu, CV download, email link, LinkedIn link.
10. See below to connect a custom domain.

## Connect a custom domain later

1. Buy a domain from a registrar.
2. In **Settings → Pages → Custom domain**, enter the domain and save. GitHub creates a `CNAME` file in the repository.
3. At your registrar's DNS settings:
   - For a `www` address, add a **CNAME** record: `www` → `YOUR-USERNAME.github.io`.
   - For the bare domain (`example.com`), add **A** records pointing to GitHub Pages' addresses. Copy the current list from GitHub's official "Managing a custom domain for your GitHub Pages site" guide, because the addresses can change.
4. Wait for DNS to update (minutes to 24 hours).
5. Back in **Settings → Pages**, tick **Enforce HTTPS** once it becomes available.
6. Update the placeholder address in `index.html`, `robots.txt` and `sitemap.xml` to the final domain.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| Download button is missing and a message appears | `assets/Martin_Ashik_CV.pdf` is not uploaded, or the name is different (names are case-sensitive on GitHub Pages). |
| Page shows no styling | `styles.css` must be in the same folder as `index.html`. |
| Photo does not show | `assets/profile.jpg` is missing or misnamed. |
| Changes do not appear | Wait a minute, then hard-refresh (Ctrl+F5). |
| Download button check does nothing when opening `index.html` from your computer | The check only runs on http(s). The link itself still works if the file exists. |
| Custom domain shows an error | DNS can take up to 24 hours. Re-check the records, then re-save the domain in Pages. |
| Link preview shows no image | Social sites need the real `og:image` address. Replace the placeholder domain first. |

## Notes

- Fonts: Inter loads from Google Fonts. If it cannot load, the page uses system fonts. For a fully offline site, download Inter and host it in `assets/fonts/`.
- There is no contact form. A form needs a backend or a form service to deliver messages; the mailto link and LinkedIn button are used instead.
