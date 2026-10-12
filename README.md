# K.B.B Electrical (Pty) Ltd – Website

Static website for K.B.B Electrical (Pty) Ltd, a civil, electrical and mechanical engineering company and PPRA-registered supplier based in Gaborone, Botswana.

## Contents

- `index.html`: single-page site with these sections: services, why K.B.B, products catalogue, track record, how to order, about, and quote request / contact
- `styles.css`: styles in the brand colours (red `#eb342b`, charcoal), fully responsive
- `script.js`: Products Catalogue 2026 data (12 categories, 85 items) with search, category filters and "Add to quote". The quote form opens the visitor's email app with the request addressed to `sales@kbbelec.com`.
- `assets/`: logo (white on transparent), favicon and social preview image

## Running locally

No build step is needed. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Deploying

Upload the files to any static host (GitHub Pages, Netlify, cPanel, etc.).
To have quote requests submitted directly instead of through the visitor's email app, point the form at a form service such as Formspree in `script.js`.

## Updating products

Edit the `CATALOGUE` array at the top of `script.js`. Each item is
`[reference, product, range/specification, typical use, optional "supplied to" note]`.
