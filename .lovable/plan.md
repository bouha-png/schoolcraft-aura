# /business: simpler page structure (proposal only, nothing changed)

## 1. Current major blocks (15)

```text
1  Hero (hub with 6 modules + Syn'IA badge)
2  Problem (scattered tools -> Synapse Business)
3  Syn'IA (6 AI capabilities)
4  CRM & Ventes (client card)
5  Prise de rendez-vous (phone mockup)
6  RH & Paie (8-step lifecycle + employee card)
7  Communication & Collaboration (3 groups, storage panel, 5 workspace cards)
8  Gestion de projet (steps + progress bars)
9  Finance & Reporting (2 blocks + full dashboard)
10 Boutique en ligne (optional)
11 Formation
12 Événements & Live (optional)
13 Sécurité
14 Modules (9 groups + Syn'IA/Reporting layers)
15 Final CTA
```

The problem: 9 separate module sections, each with its own heading, visual and list. A buyer has to switch business domains nine times.

## 2. Proposed architecture: 4 core domains

```text
A  CLIENTS & VENTES       win and serve customers (revenue)
B  ÉQUIPES & RH           people: HR, payroll, training
C  TRAVAIL & COLLABORATION  daily work: communication, documents, projects
D  FINANCE & PILOTAGE     money and management view
```

Syn'IA runs across all four: one dedicated section early on, plus at most one small note per domain where the feature really exists (meeting minutes, drafting, search).

## 3. What merges into each domain

| Domain | Merges | Main visual (only one) | Key points (max 5) |
|---|---|---|---|
| A Clients & Ventes | CRM, Booking, Shop (optional), Events & Live (optional) | Client card, with booking phone as a small inset | Client history, pipeline & quotes, online booking, follow-ups; "also available: shop, events" |
| B Équipes & RH | RH & Paie, Formation | Lifecycle strip (8 steps) | Recruitment to contract, time & leave, payroll & payslips, onboarding & training |
| C Travail & Collaboration | Communication, Collaboration, Gestion documentaire, Projects, Workspaces | Virtual office panel with storage | Chat/email/calendar, meetings & minutes, document storage & versions, projects & milestones |
| D Finance & Pilotage | Finance, Reporting / dashboard | Management dashboard | Invoices & expenses, budgets & project costs, approvals, consolidated reporting |

Each domain uses one layout: title, one-line outcome, up to 5 points, one visual. On desktop the tabs or sub-labels inside a domain are only small labels, never separate sections.

## 4. Removed from the main story, moved to compact or secondary

- **Shop and Events & Live:** a small "Options" row at the end of domain A (two cards, no phone mockups, no photo).
- **Training:** a sub-block in domain B, shorter visual (1 course card, not 3).
- **Workspace role cards (5):** removed; the storage folders already show the teams.
- **Projects steps and progress bars:** reduced to a small inset in domain C.
- **Booking phone mockup:** reduced to an inset inside domain A (or dropped on mobile).
- **Modules grid (9 groups):** replaced by a 4-domain strip plus "Options: Boutique, Événements".
- **Hero hub:** shows the 4 domains around Synapse Business, not 6 modules.
- **Security:** kept, shortened to one strip of 3 to 4 facts.

## 5. Recommended order (8 blocks)

```text
1 Hero            Headline + 4 domains around the hub + Syn'IA badge + CTA
2 Problem         One line + short tool-to-hub visual
3 Syn'IA          Assistant capabilities (the differentiator, shown early)
4 A Clients & Ventes     (+ Options: shop, events)
5 B Équipes & RH         (+ training)
   -> mid-page CTA "Demander une démo"
6 C Travail & Collaboration  (+ documents, projects)
7 D Finance & Pilotage      (dashboard = view across A to C)
8 Trust + modular start + final CTA (one combined closing block)
```

About 8 screens on desktop instead of 15, and 10 to 12 on mobile instead of more than 20.

## 6. Rationale

- **Buyer logic:** SME owners think in 4 questions: how do I sell more, how do I manage my staff, how does my team work, how do I control money. One domain per question.
- **Revenue first:** Clients & Ventes stays first; HR second because it is the biggest time-saver; collaboration third; finance last because it summarises the others.
- **Less switching:** 4 headings instead of 9, and one visual per domain.
- **Optional things stay optional:** shop and events no longer look like core modules.
- **AI stays credible:** one strong section, plus notes only where the feature exists.
- **Closing is one decision point:** trust, "start with one domain" and the demo button together.

## Technical notes (for a later build step)

- Page: `src/pages/Business.tsx`; copy in `src/i18n/businessV2.ts` (fr/en/no/ar, RTL for ar).
- Add a shared `Domain` layout (title, outcome, points, visual, optional sub-blocks).
- Merge copy keys into `domains: { clients, equipes, travail, finance }`, keep `ai`, `problem`, `final`.
- Remove the workspace cards, the 9-item module grid and the separate shop/training/events sections.
- Every copy change needs all 4 languages.
