# Website Reverse Engineering & Replication

## Purpose
This document provides a systematic approach for inspecting, analyzing, and replicating existing websites with high fidelity. The goal is to extract the exact CSS properties, DOM structure, and animation timings to create a pixel-perfect clone or closely inspired build.

## 1. Using Browser DevTools

DevTools is the primary instrument for reverse engineering.
- **Inspect Element:** Use the Elements panel to navigate the DOM tree and view the applied CSS in the Styles pane.
- **Computed Tab:** Always check the "Computed" tab in DevTools. This shows the final, resolved values for any element, stripping away CSS variables and inheritance complexity. This is the absolute truth for what is being rendered.
- **Network Tab:** Use this to find custom fonts, background images, videos, and JSON data payloads.

## 2. DOM Structure Reading

Replicating a site starts with understanding its skeleton.
- **Identify Wrappers:** Look for `.container`, `.wrapper`, or `<section>` tags that define maximum widths and centering.
- **Analyze Grids/Flexbox:** Observe how child elements are positioned. Check the parent element in DevTools for `display: flex` or `display: grid`.
- **Semantic HTML:** Try to map `<div>` heavy sites back to semantic HTML5 tags (`<nav>`, `<main>`, `<article>`, `<footer>`) during the replication process.

## 3. Extracting Exact Spacing

Spacing (margins, padding, gaps) dictates the visual rhythm.
- **Box Model Tool:** Hover over an element in the Elements panel or use the Box Model diagram in the Computed tab to see exact padding (green) and margins (orange).
- **Convert to Standard Scales:** When translating to Tailwind CSS, map the exact pixel values to the closest Tailwind spacing unit.
  - Example: If DevTools shows `padding: 32px`, use `p-8`. If it shows `margin-bottom: 24px`, use `mb-6`.
  - Only use arbitrary values (e.g., `mb-[22px]`) if the spacing is highly specific and critical to the design.

## 4. Font and Typography Analysis

Typography makes up a significant portion of a site's feel.
- **Font Family:** Check the `font-family` property. Use the Network tab to see if it's a Google Font, Adobe Font, or a custom `.woff2` file.
- **Key Metrics:** Extract the exact values for:
  - `font-size` (Translate px to rem or Tailwind text classes).
  - `font-weight` (Translate 100-900 to Tailwind font classes).
  - `line-height` (Very important for exact replication. Translate to Tailwind `leading-*` classes).
  - `letter-spacing` (Translate to Tailwind `tracking-*` classes).

## 5. Animation Timing Extraction

Animations require precise observation.
- **CSS Transitions:** Look for the `transition` property in the Styles pane. Extract the `duration`, `timing-function` (ease), and `delay`.
  - Example: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);` -> Translate to Tailwind `transition-all duration-300 ease-in-out` (or a custom cubic-bezier).
- **CSS Animations:** Look for `@keyframes`. Extract the animation name and view the keyframe steps to replicate complex movements.
- **JS Animations (GSAP/Framer):** These are harder to inspect via the Styles tab because they manipulate inline styles dynamically.
  - **Strategy:** Record the screen or use the DevTools Animation Inspector (three dots menu -> More tools -> Animations) to slow down the animation to 10% speed. Observe the exact properties changing (usually `transform: translate3d` and `opacity`).

## 6. Responsive Inspection

A pixel-perfect desktop site is useless if it breaks on mobile.
- **Device Toolbar:** Toggle the Device Toolbar (Ctrl+Shift+M / Cmd+Shift+M) in DevTools.
- **Breakpoints:** Slowly resize the viewport horizontally to find exactly where the layout shifts. Note the pixel widths where columns collapse or navigation turns into a hamburger menu.
- **Replication Strategy:** Build mobile-first. Replicate the styling for the smallest screen, then add Tailwind `sm:`, `md:`, `lg:` modifiers at the exact breakpoints you observed during inspection.

## Summary Checklist
- [ ] Inspect the DOM to understand the wrapper and layout structure (Flex/Grid).
- [ ] Use the Computed tab to extract exact pixel values for spacing and translate to Tailwind scales.
- [ ] Identify font families, sizes, weights, and line heights accurately.
- [ ] Extract transition durations and custom easing curves for animations.
- [ ] Use the DevTools Animation Inspector for complex, JS-driven animations.
- [ ] Manually drag the viewport to identify and replicate all responsive breakpoints.
