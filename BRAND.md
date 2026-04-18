# Async Digital — Brand

A one-page index to every brand asset in this repo. Read this first. Follow the links for detail.

The goal: a non-designer can produce a leaflet, business card, or email signature using only what this page points to, with no calls to Rob or Helen.

## The foundations

Three files under `brand/` hold the decisions. Everything else is applied work.

- **Colour**: [`brand/colour.md`](brand/colour.md). Two brand colours, warm neutrals, three status colours, contrast ratings for every pairing used on the site.
- **Typography**: [`brand/typography.md`](brand/typography.md). System stack on the web, Inter in print, Arial in email. One type scale across all three.
- **Voice and tone**: [`brand/voice.md`](brand/voice.md). How Async Digital writes. Prefer, avoid, and when in doubt.

If you're editing copy, start at voice. If you're placing colour or type, start at colour or typography.

## Logo

Not yet landed. Tracked in [`#18`](https://github.com/async-digital-ltd/async-digital-site/issues/18). Once the master and exports are in hand, this section will list:

- Lockups (primary, horizontal, mark-only), with clear-space rules.
- File locations under `brand/logo/` (SVG for web, PNG fallbacks, print-resolution exports).
- When to use which lockup.

Until then, the placeholder is `assets/Logo.jpg`. Do not produce new collateral that bakes the placeholder in.

## Templates

None landed yet. Tracked in the epic [`#17`](https://github.com/async-digital-ltd/async-digital-site/issues/17):

- **Print** ([`#22`](https://github.com/async-digital-ltd/async-digital-site/issues/22), [`#27`](https://github.com/async-digital-ltd/async-digital-site/issues/27)): letterhead, business cards, A5 leaflet, compliments slip.
- **Email and digital** ([`#23`](https://github.com/async-digital-ltd/async-digital-site/issues/23), [`#28`](https://github.com/async-digital-ltd/async-digital-site/issues/28)): HTML signatures for Helen and Rob, Mailchimp master.
- **Slide deck** ([`#24`](https://github.com/async-digital-ltd/async-digital-site/issues/24)): Gamma or Keynote leave-behind and pitch decks.

Each ticket will land a template into `brand/`, and this section will gain a row explaining where it lives, how to edit it, and where to send print files.

## Folder layout

How `brand/` is organised as content lands.

```
brand/
  colour.md          — palette tokens, contrast, don'ts
  typography.md      — typefaces, type scale, licences
  voice.md           — voice, tone, vocabulary
  logo/              — primary, horizontal, mark, favicons, clear-space
  print/             — letterhead, cards, leaflet, comp slip
  email/             — HTML signatures, Mailchimp master
  slides/            — Gamma / Keynote masters
```

The three foundation files stay flat inside `brand/`. Applied assets (logo, print, email, slides) live in their own subfolders so each set of templates can be zipped and handed to a printer or mail client without picking through the rest.

## How brand tokens reach live surfaces

Two files translate the foundations into code that the site uses at runtime.

- **`assets/brand.css`** ([`#13`](https://github.com/async-digital-ltd/async-digital-site/issues/13)): the colour and type tokens from `brand/colour.md` and `brand/typography.md` as CSS custom properties. Every page in this repo, and every demo page at `demo.async-digital.com`, consumes the same file over HTTPS.
- **`assets/brand.js`** ([`#11`](https://github.com/async-digital-ltd/async-digital-site/issues/11)): shared constants the markup can't easily hold. Currently just the contact email, wired via `data-brand-mailto`.

If a brand value changes, the update order is:

1. The note in the knowledge vault (`projects/incubating/async-digital-brand-foundation.md`). That's the decision log.
2. The relevant file under `brand/` here. That's the documentation.
3. `assets/brand.css` (or `assets/brand.js`). That's the code downstream consumers read.

Changing step 3 without steps 1 and 2 leaves the documentation lying. Changing steps 1 and 2 without step 3 leaves the live site wrong.

## Versioning and breakage

`brand.css` and `brand.js` are loaded directly from `https://async-digital.com/assets/` by the main site, the demo site, and any future property. There's no semver; every consumer gets the current file.

Two implications:

- **Renaming a CSS custom property is a breaking change.** Search the org for `var(--old-name)` before renaming, and update every consumer in the same PR.
- **Adding a property is safe.** New tokens can land here ahead of their use.

If a consumer ever needs to pin a specific version (e.g. a print supplier's template reads `brand.css` at generation time), cut a tag and let them load from the tag's raw URL rather than `main`. That case hasn't arisen yet.

## Where the decisions live

This repo holds the documentation and the code. The reasoning behind each decision (why warm brick over teal, why a system stack over a webfont, why no em dashes) lives in the knowledge vault under `projects/incubating/async-digital-brand-foundation.md`. If a value needs to change, the vault note changes first.
