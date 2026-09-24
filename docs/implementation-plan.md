# 100/100 Pixel-Perfect Implementation Plan: Seven UI/UX Design Project

## Mandatory Execution Rule for AI Agent
I will strictly execute all work using the following forced loop. I will not skip steps or hallucinate completion:
**`Reference → Analyze → Plan → Build → Screenshot → Compare → Fix → Screenshot again → Responsive QA → Motion QA → Build QA → Deploy → Production QA`**


## Critical Review & QA Risk Assessment
As a Visual QA Lead, the previous plan was too generic. It lacked specific attention to detail that separates a "functional" app from a "pixel-perfect recreation." Potential point deductions in the old plan:
*   **Typography Mismatch:** Default Tailwind fonts (Inter) might not match the specific serifs or rounded sans-serifs in the designs. We need strict font matching.
*   **Missing Micro-Interactions:** The fanned cards and overlapping elements require precise hover states and z-index transitions.
*   **Incorrect Proportions:** The cards in "Art Showcase" and "Travel" are not standard aspect ratios; they require exact fixed sizes or precise percentages.
*   **Shadows & Gradients:** The references use very soft, multi-layered shadows and subtle gradients (e.g., the toggle switch in Pricing, the map overlay in Real Estate) which default Tailwind shadows do not cover. Custom shadow classes are mandatory.
*   **Mobile vs Desktop:** Some designs (Ride-Share) are inherently mobile. If we just make it full-width on desktop, it will look ridiculous. We need a specific strategy (e.g., max-width container centered on desktop). Others (Art Showcase) need careful stacking on mobile.
*   **Asset Inaccuracies:** Using generic icons where specific branded or stylistic icons are shown will lose points. We must carefully select Lucide icons that match the stroke width and style.

---

## 1. Page-by-Page Implementation Sequence

1.  **Phase 1:** Core Setup (Next.js, Tailwind, Framer Motion, Git Init, Custom Font setup, Custom Shadow/Color tokens).
2.  **Phase 2:** Screen 1 (Ride-Share) - Master mobile constraints.
3.  **Phase 3:** Screen 2 (Art Showcase) - Master complex positioning (fanned cards).
4.  **Phase 4:** Screen 3 (Travel App) - Master background images and glassmorphism.
5.  **Phase 5:** Screen 4 (Finance) - Master bento-box layouts and layered dashboard UI.
6.  **Phase 6:** Screen 6 (Pricing) - Master typography weights and custom interactive toggles. *(Doing 6 before 5 because it shares typography complexity)*
7.  **Phase 7:** Screen 5 (Real Estate) - Master background maps and absolute positioning of pins.
8.  **Phase 8:** Screen 7 (Developer Portfolio) - Master split layouts and SVG background rings.
9.  **Phase 9:** Final QA, Commit, and Deployment.

---

## 2. Visual Specification for All 7 Pages

*   **Screen 1: Ride-Share Trip Details**
    *   **Colors:** Very light gray background (#F4F4F4 approx), White card, soft green/blue badges, dark gray/black text.
    *   **Typography:** Clean, rounded sans-serif. Heavy emphasis on readable weights (Medium for names/times, Regular for secondary text).
    *   **Specifics:** Dotted/dashed timeline line connecting stops. Soft green gradient on the fare split card. Large pill-shaped buttons.
*   **Screen 2: Art Showcase Landing**
    *   **Colors:** White/off-white background. Colorful artwork cards.
    *   **Typography:** Very large, tightly tracked sans-serif headline.
    *   **Specifics:** 6 overlapping square-ish cards rotated at various degrees (-15 to +15). Two overlapping speech bubble tags (blue "@coplin", green "@andrea"). Pill-shaped primary button.
*   **Screen 3: Travel App Landing**
    *   **Colors:** Deep sky blue background (likely an image or complex gradient of clouds).
    *   **Typography:** Large, soft white sans-serif, center-aligned.
    *   **Specifics:** Glassmorphic pill navigation at the top. Three overlapping flight/booking cards with heavy drop shadows. "Download for iOS" pill button with Apple logo.
*   **Screen 4: Finance Dashboard Landing**
    *   **Colors:** White background, vibrant blue and bright green accents.
    *   **Specifics:** Floating UI elements (Netflix/Spotify cards over a balance graph). Trust badges row. A lower section with a large green balance card hovering over a blurred bar chart.
*   **Screen 5: Real Estate Investment Landing**
    *   **Colors:** Light gray map background, stark white content cards.
    *   **Specifics:** Search pill over a subtle map background with dark circular pins. A central hovering property card with heavy shadow. Below: Stats row, and a grid (bento) of features on the bottom right.
*   **Screen 6: Pricing Plans**
    *   **Colors:** Very light gray background (#F8F9FA approx).
    *   **Typography:** Mixed weights in a single headline (light, regular, bold).
    *   **Specifics:** App icons inline within the headline text. A completely custom gradient toggle switch with a white knob. Cards with distinct, very soft, large-spread drop shadows.
*   **Screen 7: Developer Portfolio Landing**
    *   **Colors:** Stark white, high contrast black text.
    *   **Specifics:** Left-aligned copy. Right-aligned iPhone mockup containing a profile card. Very thin, concentric SVG circles in the background behind the phone. Trust logos in gray at the bottom left.

---

## 3. Desktop and Mobile Strategy

*   **Mobile-First Pages (Screen 1):** Built for mobile width (`w-full max-w-md`). On desktop, this will remain centered on the screen like an app preview to preserve proportions.
*   **Desktop-First Pages (Screens 2-7):**
    *   **Desktop:** Exact pixel matching based on 1440px width references. Grid layouts, flex rows, absolute positioning for overlapping elements.
    *   **Mobile (390px):**
        *   Navigation collapses into a hamburger menu (using Lucide `Menu` icon).
        *   Hero sections shift from row-based splits to column-based stacking (image below text).
        *   Overlapping fanned cards (Screen 2 & 3) will be scaled down and stacked with less overlap to remain readable on small screens.
        *   Bento grids (Screen 4 & 5) will become a single vertical column.

---

## 4. Screenshot Comparison Loop

For *every* page, the following strict loop will be enforced:
1.  **Build:** Implement the page based on the spec.
2.  **Render & Capture:** Run the dev server, open at 1440x900 (Desktop) and 390x844 (Mobile).
3.  **Side-by-Side:** Place the render next to the reference image.
4.  **Difference Table:** Log differences (e.g., "Headline font size too small", "Card shadow too harsh").
5.  **Refine:** Adjust Tailwind classes (padding, margins, text-sizes, shadows).
6.  **Loop:** Repeat steps 2-5 until visual parity is achieved.

---

## 5. Motion & Animation Strategy (Framer Motion)

Animations must be tasteful and enhance the premium feel, not distract.
*   **Page Loads:** Soft `opacity: 0` to `opacity: 1` with a slight `y: 10` upward drift for hero sections.
*   **Fanned Cards (Art Showcase):** Animate from a single stack into the fanned out position on load, with staggered delays.
*   **Hover States:** All buttons will have `whileHover={{ scale: 1.02 }}` and `whileTap={{ scale: 0.98 }}`.
*   **Floating Elements (Finance/Travel):** Subtle infinite `y` axis floating animations for the overlapping cards to make them feel dynamic.

---

## 6. Testing Strategy

*   **Responsive Checks:** Chrome DevTools testing at exactly 375px, 390px, 768px, 1440px, and 1920px.
*   **Console & Network:** Ensure 0 errors, 0 warnings, and no broken image links.
*   **Interaction Testing:** Click all toggles, hover all cards, ensure navigation works (even if it just scrolls to top for this demo).

---

## 7. GitHub Strategy

*   Use Conventional Commits rigorously.
*   Commit sequence:
    1. `feat: initial project setup and design tokens`
    2. `feat: implement ride trip details page (screen 1)`
    3. `feat: implement art showcase landing (screen 2)`
    4. `feat: implement travel landing (screen 3)`
    5. `feat: implement finance dashboard (screen 4)`
    6. `feat: implement real estate landing (screen 5)`
    7. `feat: implement pricing plans (screen 6)`
    8. `feat: implement developer portfolio (screen 7)`
    9. `fix: final responsive and visual QA adjustments`

---

## 8. Vercel Deployment Strategy

*   Connect the GitHub repository to a new Vercel project.
*   Leave default build settings (`next build`).
*   Post-deployment, manually visit all 7 routes on the live `*.vercel.app` domain.
*   Verify fonts, images, and animations load correctly in the production environment (which sometimes differs from local dev).

---

## 9. Final 100/100 Verification Checklist

Before final submission, I will verify:
- [ ] **Screen 1 (12 pts):** Driver card, badges, dotted timeline, fare split, call/join buttons match perfectly.
- [ ] **Screen 2 (12 pts):** Hero nav, large headline, fanned stack of artwork cards with precise rotation, tags.
- [ ] **Screen 3 (12 pts):** Cloud background (CSS or image), pill nav, fading headline, rotated overlapping tickets.
- [ ] **Screen 4 (12 pts):** Dashboard mock with Spotify/Netflix cards, trust ratings strip, lower green analytics card.
- [ ] **Screen 5 (12 pts):** Map background with pins, central property card, stats row, bottom bento features.
- [ ] **Screen 6 (12 pts):** Mixed-weight headline with inline icons, custom gradient toggle switch, Free/Personal cards.
- [ ] **Screen 7 (12 pts):** Left text, right phone mockup with profile, background SVG rings, bottom logos.
- [ ] **Repository (16 pts):** Code pushed to GitHub with clean commit history, deployed successfully to Vercel, public URL provided.
- [ ] **No Overflow:** Tested on mobile and desktop; no horizontal scrolling.
