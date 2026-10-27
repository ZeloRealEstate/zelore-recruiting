# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: licensed real estate agents with experience, currently working at traditional agencies in Trento and the wider Trentino. They are ambitious, feel their skills are undervalued (low-value listings, unqualified leads, paperwork eating their day) and are quietly evaluating a move. They arrive mostly from paid campaigns (Google Ads via GTM) and decide whether to book an interview.

Secondary: people with less than a year of experience or a licence still in progress. The form accepts them, but the page is not written for them first.

Language: Italian. Audience is local.

## Product Purpose

A single recruiting landing page (LP2) for Zelo Real Estate, a boutique agency in Trento. Its job is to get qualified agents to submit the "Prenota il tuo colloquio" application. Success is a submitted, qualified application that leads to a direct interview with management.

Scope is agent recruiting only. The marketing/communication track was removed and is out of scope for this page.

## Positioning

Zelo selects its properties and its people. The agent sells; the structure handles the rest. Three pillars back this up:

- **Portfolio selezionato:** only vetted listings, average value per deal over 500.000€.
- **Back office dedicato:** urban-planning checks, paperwork and contracts are handled by the internal team.
- **Pre-qualifica del cliente:** event-based viewings with pre-qualified buyers instead of one-off visits (for example, 32 viewings in one Saturday).

The core claim is time: about 8 out of 10 hours go to active selling, against about 2 out of 10 at a traditional agency.

## Operating Context

- Hiring flow: direct interview with management (no intermediaries), then hands-on shadowing with senior professionals, then full autonomy.
- Candidates are often still employed, so confidentiality matters. The page promises that Zelo will not contact the candidate's current employer.
- Applications post to an n8n webhook (`assets/js/main.js`). A `recruiting_form_submit` dataLayer event fires the Google Ads conversion in GTM. Microsoft Clarity is installed.

## Capabilities and Constraints

- Static HTML/CSS/JS (`index.html`, `assets/css/style.css`, `assets/js/main.js`), with no build step. Local preview runs `python3 -m http.server 4173`.
- Form fields: nome, cognome, telefono, email, abilitazione (Sì / In corso / No), anni di esperienza (<1 / 1-3 / >3), optional LinkedIn, GDPR privacy consent, and a honeypot field (`sito_web`). The hidden `area` is fixed to "Vendita — Agente / Consulente".
- Keep the GTM, Clarity, webhook and conversion event intact when changing the page.
- Legal entity: Zelo Real Estate S.r.l., Trento (TN).

## Brand Commitments

- Name: **Zelo Real Estate**. Tagline: **dire.fare.immobiliare.**
- Logos: `assets/images/logo.svg`, `assets/images/logo-dark.svg`.
- Voice: direct, candid about the agent's frustrations, confident without hype. Addresses the reader as "tu". Founder principle: "mettere al centro la persona", applied to clients and colleagues alike.

## Evidence on Hand

Client-verified figures (since 2021):

- **70M€** intermediated
- **137 transazioni**
- **400 clienti**

The other claims on the page are approved: average deal over 500.000€, 32 viewings in one Saturday, the 2-vs-8 selling hours comparison, and the 3-step onboarding.

Founders, with photos in `assets/images/`:

- Filippo Zeni, Co-Founder. Background in luxury and international hospitality.
- Oliviero Rigotti, Co-Founder. Background in construction.

Not on hand, and must not be invented: agent testimonials, specific commission or compensation figures, headcount, awards, or press.

## Product Principles

1. **Respect the experienced agent.** Talk to a professional weighing a career move, not to a job seeker, and name their real frustrations precisely.
2. **Prove with method and verified numbers only.** Every claim traces back to the pillars, the onboarding path or a client-approved figure.
3. **Selectivity is the offer.** Zelo is choosy about properties and people, and the page should make applying feel like a considered step, not a mass funnel.
4. **Make the step easy and safe.** Short form, direct contact with management, confidentiality stated plainly.
