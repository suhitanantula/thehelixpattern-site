# The Helix Pattern — Website

**Live:** https://thehelixpattern.com

## Structure

```
site/
├── index.html     ← Page content (sections, copy, styling)
├── config.js      ← Form configuration (fields, Formspree endpoint)
├── vercel.json    ← Deployment config
└── README.md
```

## Editing

### To change form fields

Edit `config.js`:

```js
fields: [
  {
    name: "fieldname",      // Form field name (sent to Formspree)
    label: "Label Text",    // Displayed above the field
    type: "text",           // "text", "email", or "textarea"
    placeholder: "...",     // Placeholder text
    required: true          // true or false
  },
  // ... more fields
]
```

### To change page content

Edit `index.html` directly. The form is injected into `<div id="form-container">` automatically from config.js.

### To change Formspree endpoint

Edit `config.js`:

```js
endpoint: "https://formspree.io/f/YOUR_FORM_ID"
```

## Deployment

Site is hosted on Vercel. To deploy changes:

```bash
cd site
vercel --prod
```

Or push to connected git repo if configured.

## Form submissions

Submissions go to Formspree: https://formspree.io/f/xzdaodaw

Log in at formspree.io to view submissions.

## Local preview

Just open `index.html` in a browser. Form submission won't work locally (CORS), but you can preview the design.

---

**The Helix Lab** · 2026
