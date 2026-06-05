# AI Log - Portfolio 2

AI assistance used during this project is documented here as required by the Noroff course brief.

## How AI was used in this project

- **General assistance** - AI helpied with thinking through implementation approaches.

- **Debugging** - AI was used to help identify and understand bugs, explain error messages, and suggest fixes.

- **Explaining concepts** - AI helped explain new concepts and tools I encountered

## June 3rd 2026

**Purpose:** The portfolio felt flat and lifeless despite having good layout and typography. Wanted more movement and depth on the homepage.

**Fix:** With AI assistance, implemented a cursor spotlight effect using a canvas-based radial gradient that follows the mouse.

**Outcome:** The page now feels more alive and interactive. The spotlight adds slightly more depth to the page.

---

## June 3rd 2026

**Purpose:** The about section felt flat and generic — just text with no visual interest.

**Fix:** With AI assistance, added staggered entrance animations for skill icons using Devicons library, replaced plain text skill tags with actual technology logos, and restructured the layout into a three-column grid with a bold statement heading.

**Outcome:** The about section now feels dynamic and professional. Learned how to integrate third-party icon libraries into React and use Framer Motion's whileInView for scroll-triggered animations.

---

## June 4th 2026

**Purpose:** Clicking the next/prev buttons on the featured artworks carousel did nothing - cards 4, 5, and 6 were never reachable.

**Fix:** Corrected the slide translation math to account for CSS gaps, aligned JS breakpoints to match SCSS, moved overflow: hidden from .featured-slides to .featured-window, and switched to event delegation to reliably catch button clicks.

**Outcome:** Carousel navigates correctly through all 6 cards on all screen sizes.

---
