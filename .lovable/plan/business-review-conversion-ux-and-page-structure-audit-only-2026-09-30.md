# /business review: conversion, UX and page structure (audit only, nothing changed)

## Current page order (17 blocks)

```text
1  Hero: "Votre entreprise. Un seul environnement." + CTA
2  Problem: 10 tools collapse into "Synapse Business"
3  Collaborer (virtual office, co-editing, meetings, minutes)
4  Organiser le travail (projects/tasks)
5  RH & Paie (new, short)
6  Finance (new, same visual as RH)
7  Piloter (dashboard)
8  Relation client (client card)
9  Booking (iPhone mockup)
10 Sell + Shop + Events/live (one very long section)
11 HR & Payroll detail (5 cards, "+30 h")
12 Training (3 courses)
13 Workspaces (5 roles stacked)
14 Security (loi 09-08 / CNDP)
15 "Tout est connecté" (2 flows)
16 Syn'IA (8 action tiles)
17 Module catalogue (6 groups, 20 items) then final CTA, floating button
```

## Main findings

**1. Positioning is generic.** "Un seul environnement" could describe any all-in-one platform. The hero never says who it is for (SMEs with 5 to 200 staff, Morocco first) or what the result is (fewer subscriptions, no re-entry, one view for the manager). Put the outcome in the headline and the list of what's included in the subtitle.

**2. Duplication (the biggest problem).**
- HR: block 5 and block 11 cover the same subject.
- Collaboration: blocks 3 and 13 (virtual office vs workspaces per role) plus the meetings part of block 10.
- Booking: a tag in block 8 and all of block 9.
- Management vs Finance: blocks 6 and 7 both cover budgets, approvals and reporting.
- Integration: blocks 2, 15 and 17 all say "everything in one place".
- Module catalogue (17) repeats the whole page just before the closing CTA.

**3. Weak order.** The page mixes internal operations and customer-facing tools. It goes collaborate, organise, HR, finance, management, clients, booking, shop, then back to HR, training and workspaces. Security, which answers a buying objection, sits deep in the page. The AI section, a strong selling point, comes near the end.

**4. Too long.** 17 blocks at roughly 800 to 1,000px each on desktop. On mobile it is well over 20 screens. Block 10 (sell, shop and events) alone is about 3 screens. Tag clouds of 10 to 12 labels per section add length without saying what the business gains.

**5. Business value is missing.** Most sections list features rather than results. Missing: time saved per process, fewer tools to pay for, one invoice, how fast you can start, local fit (WhatsApp, Arabic/French, Moroccan payroll rules), support and onboarding. The "+30 h" figure and the example names are invented, so they must be validated or removed before launch.

**6. CTA problems.**
- All buttons now say "Demander une démo" (good). But there is no button between the hero and the final CTA except the floating one, so the page has no mid-page conversion points.
- There is no lower-commitment option (a short tour or a WhatsApp question) for SMEs that aren't ready to book a demo. "Demander une démo" can be the main button and a WhatsApp chat link the secondary one.
- The final CTA sits after the catalogue, so the last impression before it is a feature list.

**7. Mobile and visual rhythm.**
- Four visually identical text-plus-card blocks in a row (3 to 6) in the same left/right alternation make the page feel flat.
- Long tag clouds wrap to 4 or 5 rows on mobile.
- Phone mockups (shop, booking) are about 600px tall stacked under their text.
- Stacking the 5 workspace roles and the 5 HR cards doubles the height on mobile.
- Background colours alternate unevenly because some sections are inside a shared wrapper.

**8. Things buyers look for that are missing.** Pricing logic ("modules you choose", with no prices, which is allowed), onboarding and migration, support, integrations with existing tools, customer logos or a short case, a FAQ-style answer to "can I start with one module?".

## Proposed new order (10 blocks)

```text
1  HERO (rewritten)        Outcome headline for SMEs + one CTA + WhatsApp link
2  PROBLEM -> SOLUTION     Tool chaos -> one environment (merges 2 and 15)
3  WORK TOGETHER           Virtual office + workspaces per role + meetings/minutes
                           + chat/email/calendar (merges 3, 13, meetings from 10)
4  RUN PROJECTS            Projects, tasks, approvals (4 + approvals from 7)
5  HR & PAYROLL            One section: hiring -> contract -> time -> leave -> pay,
                           with the 5 steps as a compact row (merges 5 and 11)
6  FINANCE & DASHBOARD     Invoices, expenses, budgets + manager dashboard
                           (merges 6 and 7) -- same visual pattern as block 5
   -> mid-page CTA "Demander une démo"
7  WIN & SERVE CUSTOMERS   CRM -> booking -> shop -> events/live as one chain,
                           one mockup at a time (merges 8, 9, 10)
8  TRAINING + SYN'IA       Grow your people and work faster (12 + 16)
9  TRUST                   Security/CNDP + onboarding + support + "start with
                           one module, add more later" (14 + modules text)
10 FINAL CTA               Demo + WhatsApp; the catalogue becomes a compact
                           icon strip above it or is removed
```

**Why this order:** it goes from the pain to how the team works every day (3 to 4), then to the processes where SMEs save the most time (5 to 6, with a CTA while interest is highest), then to growth (7), people and AI (8), and finally reassurance before the decision (9 to 10). Internal operations come first because they are the core buying reason. Customer-facing tools come after, as extra value.

## Rewrites

- Hero: something like "Toute votre PME dans un seul espace : équipes, paie, finance et clients." Subtitle naming 4 outcomes.
- Each section: one outcome line, 3 or 4 short benefits in place of the tag clouds, one visual.
- Replace "+30 h" and the invented names with validated figures or neutral examples.
- Syn'IA: show it inside the processes (a meeting summary, a payroll check), not as a list of 8 tiles.

## Mobile guidelines

- Limit tags to 4 visible items, with a "more" line.
- Keep one mockup per section, capped at around 480px on mobile.
- Workspace roles and HR steps: horizontal swipe row on mobile only; stacked on desktop.
- Target at most 12 screens of scrolling on mobile.

## Technical notes (for the build step, if approved)

- Page: `src/pages/Business.tsx`; copy in `src/i18n/business.ts` (fr/en/no/ar, RTL for ar).
- Remove or merge: `HrPayrollSection`, `ModuleCatalog`, the workspaces block, the connect block; turn Pilot + Finance into one section.
- Every copy change needs all 4 languages.
