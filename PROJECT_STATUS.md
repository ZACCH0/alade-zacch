# PROJECT_STATUS.md — ZacchTech Portfolio

> A different AI must be able to continue from this file alone.
> Rule: update after EVERY stage and every change of direction. Never delete entries — mark old decisions "superseded".

## 0. Project header
- **Project name:** ZacchTech Portfolio *(proposed — owner to confirm)*
- **One sentence:** Personal portfolio website for Alade Zaccheous (Python/Django developer and Data Analyst) to win clients and employers. *(proposed — owner to confirm)*
- **Tech:** React 19 + Vite 7 + Tailwind CSS 4 + wouter; Express static server. *(as-built — owner to confirm)*
- **Hosting:** Vercel (decided 2026-10-15). NOTE: owner reports Vercel deploy exists but folder not visible / repo won't clone — diagnosing, see §6 C3.
- **Repo:** No git repo. Local path: `C:\Users\DELL-7280\Downloads\alade-zacch-main\alade-zacch-main`
  (nested one level inside the downloaded zip — cause of the earlier `pnpm start` path error).

## 1. Overview
Portfolio site. Pages: Home (hero, about, skills, projects, testimonials, blog, contact via Formspree) + Case Study detail pages (`/case-study/:id`). Contact form posts to Formspree; no backend DB, no auth.

## 2. Workflow rules (agreed 2026-10-15)
1. Work in stages. Finish ONE stage, report, STOP, wait for approval.
2. Never invent business facts — use `[PLACEHOLDER]` markers, list in §5.
3. Never delete content/policies/pricing/assets silently — move old files to `/legacy`.
4. No passwords or API secrets in frontend code.
5. Never claim untested work as tested — state TESTED and NOT TESTED exactly.
6. On conflicting instructions/sources: STOP, ask, record conflict here.
7. Mind-changes modify the current stage; never restart the project.
8. Clean, readable, human-style code; comments only where useful.
9. Communication: plain simple language, short sections/tables, relevant code only.
10. After every stage report: COMPLETED / TESTED / FILES CHANGED / DECISIONS NEEDED / KNOWN PLACEHOLDERS / NEXT STAGE.

## 3. Stage tracker
| Stage | Scope | Status | Date |
|---|---|---|---|
| 0 (pre-rules) | Informal audit + blocker fixes + Dockerfile + local run (done BEFORE rules were set — see §10) | Done (grandfathered) | 2026-10-15 |
| 1 | Formal audit + this status file | Done | 2026-10-15 |
| 2 (proposed) | Placeholder resolution (URLs, images, blog links) | In progress (C1+C2 done, rest open) | 2026-10-15 |
| 3 (proposed) | Deploy packaging check + README (install/run/test/deploy) | Awaiting approval | — |
| 4 | Launch on Vercel (decided 2026-10-15, supersedes D4) | Blocked — owner reports folder not visible / repo won't clone (C3) | 2026-10-15 |
| 5 (proposed) | Final QA pass | Awaiting approval | — |

## 4. Confirmed info (owner-approved facts only)
| Item | Value |
|---|---|
| Email | aladezaccheous52@gmail.com |
| Phone/WhatsApp | +234 916 130 2024 (`wa.me/2349161302024`) |
| Contact form backend | Formspree `https://formspree.io/f/xzdqdyvj` |
| Live project | devspaceblogproject.vercel.app |
| Project repos | github.com/ZACCH0 (devspaceblogproject, Taskmanager-Project, Data_Science_Salary_Dashboard, JOB-SKILLS_AND-SALARY-ANALYSIS, Hospital-Analytics-Dashboard) |
| Prices | None in project — no pricing invented |
| Education | TechCrush Data Analysis graduate, Cohort 7 (owner-stated 2026-10-15; program + Cohort 7 publicly verified, personal graduation owner-confirmed only) |
| Headline | Interim hero: "Data Analyst \| Django Developer \| AI Solution Builder" (owner-approved 2026-10-15; final wording to come) |
| SHMS live | https://smart-hospital-management-system-8zgy.onrender.com/ (owner-provided) |
| Floral Void | Client work for the business owner (owner-stated); live https://floral-void.vercel.app/; stack + duration [TO_BE_CONFIRMED] |

## 5. Placeholders open
| # | Item | Needed from | Status |
|---|---|---|---|
| 1 | LinkedIn URL conflict: contact card says `/in/zacchtech`, social icons say `/in/alade-zaccheous` (§6 conflict — STOP, do not guess) | Owner | RESOLVED 2026-10-15 → `/in/zacchtech` everywhere |
| 2 | GitHub handle conflict: project links `ZACCH0` vs social icons `ZaccchTech` (§6 conflict) | Owner | RESOLVED 2026-10-15 → `ZACCH0` everywhere |
| 3 | Profile photo hotlinked to `files.manuscdn.com` — vendor locally | Owner (image file) or approve download | RESOLVED 2026-10-15 → owner's real photo `client/public/images/alade-professional.png` (hero); AI-fetched `profile.png` removed |
| 4 | Logo SVG hotlinked to `files.manuscdn.com` — vendor locally | Owner | RESOLVED 2026-10-15 → `client/public/images/logo.svg` (Nav + Footer) |
| 5 | 3 testimonial avatars hotlinked to `cloudfront.net`; persons unverified | Owner (confirm real or replace) | RESOLVED 2026-10-15 → testimonials section removed per owner; avatars gone with it |
| 6 | `VITE_ANALYTICS_ENDPOINT` / `VITE_ANALYTICS_WEBSITE_ID` unset (build warns, harmless) | Owner (supply or accept none) | RESOLVED 2026-10-15 → dead analytics `<script>` removed from `client/index.html`; re-add with real IDs if wanted |
| 7 | `task-manager.svg` is a placeholder created by AI — replace with real screenshot | Owner | OPEN (needs owner screenshot) |
| 8 | Blog cards link to `href="#"` (dead) | Owner (URLs or remove section) | RESOLVED 2026-10-15 → cards are now non-clickable `<article>` (no dead links); send real post URLs to re-link |

## 6. Recorded conflicts (rule 6)
- C1 (2026-10-15): LinkedIn `/in/zacchtech` vs `/in/alade-zaccheous` — RESOLVED → `/in/zacchtech`.
- C2 (2026-10-15): GitHub `ZACCH0` vs `ZaccchTech` — RESOLVED → `ZACCH0`.
- C3 (2026-10-15): Owner hosted on Vercel but "don't see the folder and the repo does not clone" — OPEN. Suspected cause: this project is nested (outer zip folder + inner project folder with package.json). If the outer folder was pushed to GitHub, Vercel builds from the wrong root. Also: local machine has NO git repo, so there may be nothing pushed at all. Fix path: push inner-folder contents (or set Vercel Root Directory to `alade-zacch-main`). Awaiting owner details (GitHub repo URL, how deploy was created).

## 7. Design / brand
- Colours: navy `#0F172A`, amber `#F59E0B`, slate `#64748B`, white, `#F8FAFC` (per `ideas.md`).
- Fonts: Sora (display) + JetBrains Mono (code accents), via Google Fonts.
- Dark-mode toggle; amber-accent minimal tech style.

## 8. Audit findings (Stage 0/1)
1. `client/src/App.tsx:16` — home route `path={"\\"}` never matched `/` → homepage 404. FIXED.
2. `client/src/pages/Home.tsx` — `/projects/task-manager.png` missing from `client/public/projects/`. FIXED via placeholder SVG.
3. `vite.config.ts` — Manus-only plugins (jsx-loc, manus-runtime, debug collector, storage proxy). REMOVED.
4. `package.json` — legacy `pnpm.patchedDependencies` ignored by pnpm 10; Manus wouter patch dropped. FIXED (`pnpm-workspace.yaml` holds the nanoid override).
5. `server/index.ts` — `app.get("*")` Express-4-only; required `NODE_ENV`. FIXED (version-agnostic fallback, auto static path).
6. `start` script `NODE_ENV=production node …` Windows-incompatible. FIXED (`node dist/index.js`).
7. No Dockerfile / deploy story. ADDED `Dockerfile` + `.dockerignore`.

## 9. Decisions log
- D1 (2026-10-15): All Stage-0 fixes applied at owner's "yes" before formal rules existed — kept, not restarted (rule 7).
- D2 (2026-10-15): Removed wouter Manus patch (route-collector for Manus runtime; app never reads `__WOUTER_ROUTES__`).
- D3 (2026-10-15): `task-manager.svg` placeholder created rather than deleting the project card (rule 3 spirit).
- D4 (2026-10-15): Hosting left TBD after owner skipped server-type question — all three paths packaged instead of one. *(Superseded 2026-10-15 by: hosting = Vercel.)*
- D5 (2026-10-15): C1 → `/in/zacchtech` everywhere (`Footer.tsx:22`, `Home.tsx:879`); C2 → `ZACCH0` everywhere (`Home.tsx:876`). Brand text "ZaccchTech" in title/comments left as-is (not a link).
- D6 (2026-10-15): Owner delegated testimonials decision ("add anything meaningful"). Testimonials (unverifiable people) replaced with Experience timeline: TechCrush training (grounded in owner's blog + case studies) + independent-projects entry (grounded in Projects section) + open-to-work card. NO invented employers/dates. Old code deleted (owner explicitly ordered removal — rule 3 noted, no legacy copy kept per instruction).
- D7 (2026-10-15): Section anchor links (`#about` etc.) broken on `/case-study/*` pages — added go-home-then-scroll handling in Navigation + Footer.
- D8 (2026-10-15): Owner photos found in `dist/public/images/` (wrong folder — build output). Moved to `client/public/images/` as `alade-professional.png` (hero) + `alade-casual.png` (end-of-page resume card). Experience entry updated to "Data Analysis Graduate — TechCrush (Cohort 7)". "Builder Hub" request unclear — asked owner (open).
- D9 (2026-10-15, build mode): headline → interim approved text. Screenshots renamed to `shms-landing.png`, `shms-facility.png`, `floral-void.jpeg`. Added SHMS (repo facts + Render link + update-coming note), Floral Void (client work per owner, stack/duration TBD), SCHOOL_SAAS as Upcoming (owner-directed problem→solution framing). Fixed Apex Bank Code button → correct repo; fixed Hospital card links → correct repo; fixed CaseStudy task-manager image → .svg. Project cards now hide Live/Code buttons when a link is missing. Server had died — restarted (new PID 12228).

## 10. Project structure
```
alade-zacch-main/              <- project root (inner folder; run commands HERE)
  PROJECT_STATUS.md            <- this file
  client/                      <- Vite root: index.html, src/ (pages, components, contexts, hooks), public/projects/
  server/index.ts              <- Express static server -> dist/index.js
  shared/const.ts
  vite.config.ts / vercel.json / pnpm-workspace.yaml / Dockerfile / .dockerignore
```
- Commands: `pnpm install` · `pnpm run check` · `pnpm run build` · `pnpm start` (port 3000, `PORT=` overrides).

## 11. Change log (dated)
- 2026-10-15 (Stage 0, pre-rules): route fix, task-manager.svg, vite clean, server hardening, start script, pnpm workspace, Dockerfile. TESTED: `pnpm install` OK · `tsc --noEmit` clean · `pnpm run build` OK (only harmless analytics-env warnings) · live server 200 on `/`, `/case-study/devspace-blog`, `/projects/task-manager.svg`. NOT TESTED: docker build (no daemon), Linux VPS run, Formspree email delivery.
- 2026-10-15 (Stage 1): formal audit, created this file. No code changed.
- 2026-10-15 (Stage 2, partial): C1+C2 URL fixes (`Footer.tsx`, `Home.tsx` ×2). TESTED: `pnpm run build` OK (same harmless analytics warnings). NOT TESTED: browser click-through of changed links; docker/Linux/Formspree as before. Remaining placeholders (§5 items 3–8) need owner files/input.
- 2026-10-15 (Stage 2, continued 3): end-of-page photo freed from circle → full rounded card (`rounded-2xl`, max-w-sm) per owner. TESTED: `tsc` clean, build OK, server 200 on `/`. NOT TESTED: browser eyeball.
- 2026-10-15 (Stage 2, continued 4): hero redesigned per owner — hover-only floating badges (invisible on touch) replaced with always-visible skill pills inside the photo card; removed ~100 lines of dead badge keyframes; hero text/buttons center on mobile, left on desktop. TESTED: `tsc` clean, build OK, server 200 on `/`. NOT TESTED: browser eyeball on real phone.
- 2026-10-15 (Stage 2, continued 5): navbar rebuilt per owner (hamburger + oversized CTA complaint) — standard pattern: fixed header, desktop links, mobile slide-down panel (animated max-height, no unmount jump), hamburger↔X morph, CTA normal-sized and centered in panel (was full-width block). TESTED: `tsc` clean, build OK, server 200 on `/`. NOT TESTED: real tap test on a phone (no browser automation here) — owner to confirm on device.
- 2026-10-15 (Stage 2, continued 6): owner chose Telegram drawer over dropdown — side drawer from left with profile header (photo/name/email), links, socials, CTA; dimmed tap-to-close backdrop; Escape closes; page scroll locked while open. TESTED: `tsc` clean, build OK, server 200 on `/`. NOT TESTED: real device tap test.
- 2026-10-15 (Stage 2, continued 7): owner rejected the drawer — reverted to the slide-down dropdown panel (rule 7, no restart). TESTED: `tsc` clean, build OK, server 200 on `/`. NOT TESTED: real device tap test.
- 2026-10-15 (Stage 2, continued 8, build mode): headline → interim approved text; 3 screenshots renamed to web-safe names; SHMS + Floral Void + SCHOOL_SAAS cards and case studies added; Apex Bank + Hospital repo links corrected; task-manager case image → .svg; cards hide missing Live/Code buttons. TESTED: `tsc` clean, build OK, server 200 on `/`, all 3 new case studies, apex page, all 3 new images. NOT TESTED: browser eyeball, mobile device, Render link click-through (owner to confirm live), docker/Linux, Formspree.
- 2026-10-15 (Stage 2, continued 9): hero photo reframed per owner — circle + yellow ring removed → portrait card (3:4, top-aligned) showing head and body. TESTED: `tsc` clean, build OK, server 200 on `/`. NOT TESTED: browser eyeball.

## 12. Known limitations / risks
- Owner photos are ~2.3 MB each — page will load slowly; compress to under ~300 KB before Vercel deploy. No image tools on this machine.
- Docker build + Linux run untested; Formspree delivery untested; no tests/CI; no repo.

## 13. Next recommended action
Stage 2 done except: Task Manager screenshot + internship details (owner to send) + "Builder Hub" meaning (asked owner) + Vercel C3 (needs repo URL). Then Stage 3 (README/packaging) or Vercel fix — owner picks.
