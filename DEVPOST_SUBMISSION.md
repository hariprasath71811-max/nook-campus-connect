# Nook — Micro-Connections for Campus Life

## Devpost Project Story (copy-paste into "Project Details")

### Inspiration & Problem
Campus life is full of people yet strangely lonely. Students eat lunch alone while scrolling their phones, study in silence on library floors, and walk between classes without a single meaningful exchange. The problem isn't a lack of people — it's **social friction**: not knowing who is approachable, fear of rejection, and academic burnout that makes reaching out feel exhausting. We wanted to design a lightweight, zero-pressure platform that turns crowded campus spaces into opportunities for serendipitous, low-stakes human connection — bridging students with peers, physical spaces, and their own well-being.

### UX Research & Empathy Insights
**Quantitative:** A survey of campus students found that **74% want to talk to peers in common areas but don't know who is approachable**. The barrier isn't willingness — it's discoverability and fear of awkwardness.

**Qualitative (empathy mapping):**
- **Says:** "I wish I could just sit with someone without making it weird."
- **Thinks:** "Everyone else seems to have friends. I'm the only one alone."
- **Does:** Scrolls phone at lunch, avoids eye contact, studies in isolation.
- **Feels:** Lonely, anxious, tired, wanting low-stakes connection.

**Key insight:** Students need *permission* and *structure* to connect — not another social network. Micro-connections (5–45 minutes) with clear expectations reduce the stakes.

### What It Does
Nook is a single-page, responsive web app with five modules:

1. **Find a Nook (Open Tables & Study Sparks)** — Filterable cards of live "open tables" by intent: Quick Lunch ☕, Silent Pomodoro Study 📚, Casual Chat 💬, Quick Boardgame/Break ♟️. Each card shows host, location/table id, intent & duration, empty seats, a vibe badge (e.g., "Body Doubling / Low Talking", "Coffee & Venting", "Zero-Pressure"), and an icebreaker prompt. "Pull up a Chair" sends a gentle notification ping.
2. **Host a Table / Study** — Drop a pin: location, intent, description, 1–3 open seats, self-expiring timer (20–60 min), vibe badge, and an icebreaker (with generator). Submits instantly into the live feed.
3. **Campus Vibes Map** — Interactive grid of campus buildings tagged by sentiment: Quiet Focus, Lively & Social, Hidden Sunlit Corner — with tips to rediscover cozy, underutilized spaces.
4. **My Sparks** — Track joined and hosted connections plus your Grounding Streak.
5. **Daily Grounding** — 60-second breathing pacer + mood check-in (1–10). Awards a streak and suggests rest or reaching out.

### How We Built It
- **Frontend:** Vanilla modern JavaScript (SPA), Tailwind CSS (CDN), Lucide icons, modern card components.
- **State:** Client-side state object with render-on-change; no page reloads; self-expiring timers prune stale sparks.
- **Design system:** Warm sand `#FAF9F5`, terracotta `#E07A5F`, sage `#81B29A`, charcoal `#2D3142`; Fraunces + Plus Jakarta Sans.
- **Hosting:** GitHub Pages (single `index.html`, no build step).

### Design Decisions & User Flow
- **Self-expiring timers** prevent lingering awkwardness.
- **Vibe badges** set expectations before you sit down (low talking vs. venting).
- **Icebreakers** remove the "what do I say?" friction.
- **Zero-pressure language** throughout ("Pull up a Chair", "Maybe later").
- **Warm palette** signals approachability and calm.
- **Flow:** Lonely → open Nook → filter by intent → pull up chair → ping → low-pressure chat → grounding streak.

### Feasibility & Impact
- **Feasible:** Single-file, no backend, no build step — deployable today; can scale with a lightweight real-time backend.
- **Impact:** Reduces social friction, builds daily self-care streaks, rediscovers underused campus spaces, and supports mental well-being. Designed consent-first with first names only and ephemeral tables.

---

## Project Links & Metadata

| Field | Value |
|---|---|
| **Live Demo** | https://hariprasath71811-max.github.io/nook-campus-connect/ |
| **GitHub Repo** | https://github.com/hariprasath71811-max/nook-campus-connect |
| **Demo Video** | `nook_demo.mp4` (~90s walkthrough) in the repository |
| **UX Deck** | `Nook_UXDC_Presentation.pdf` (8 slides) in the repository |
| **App Source** | `index.html` (single-file SPA) |

**Built-with tags for Devpost:** JavaScript, Tailwind CSS, HTML5, CSS3, Lucide Icons, GitHub Pages, UX Research, SPA, Responsive Design, Accessibility

---

## Design Files & Presentation Summary

| File | Description |
|---|---|
| `index.html` | Complete responsive SPA (all 5 modules + modals + UX drawer) |
| `Nook_UXDC_Presentation.pdf` | 8-slide UXDC rubric deck (problem, research, persona, journey, solution, UI system, feasibility, roadmap) |
| `Nook_UXDC_Presentation.html` | Printable HTML source of the deck |
| `SUBMISSION.md` | Concise Devpost submission copy |
| `nook_demo.mp4` | ~90s recorded walkthrough of all core flows |
| `README.md` | Project overview and run instructions |

**Slide outline (Nook_UXDC_Presentation.pdf):**
1. Cover & Theme — Human Connection (UXDC Designathon 2.0)
2. Problem Definition — dining solo-anxiety & silent study isolation
3. User Research & Empathy Mapping — 74% approachable barrier data
4. Persona & Journey Map — Alex, 2nd-year transfer student
5. Solution Concept & Core Features — Micro-connections, Vibe Map, Grounding
6. UX / UI System & Visual Design Choices
7. Feasibility, Tech Stack & Impact on Student Life
8. Future Roadmap & Ethical Considerations
