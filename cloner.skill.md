# UI Cloner Skill: From Link & Screenshot to Pixel-Perfect Build

## Purpose
This document provides a definitive workflow for accurately cloning any website section, component, or full page given only a URL and/or a screenshot. The goal is to produce a high-fidelity replica using modern tools like React and Tailwind CSS.

## 1. The Pre-Clone Analysis (The "Look Before You Leap" Phase)

Before writing a single line of code, deeply analyze the provided materials.

### Step 1: Screenshot Deconstruction
- **Identify the Macro-Layout:** Visually draw bounding boxes over the screenshot. Is the main structure a 12-column grid? A flex row split 50/50? A masonry gallery?
- **Component Breakdown:** Break the UI down into atomic components. (e.g., "This Hero section consists of: Navbar, Headline, Subheadline, CTA Button Group, and a Background Image").
- **Color Palette Extraction:** Visually sample the primary backgrounds, text colors, borders, and accent colors.
- **Typography Assessment:** Note the relative font weights (regular, semibold, bold), rough sizes, and font styles (serif vs. sans-serif).

### Step 2: Live Link Inspection (If URL is provided)
If a URL is provided, validate and refine your screenshot assumptions using Browser DevTools (see `reverse-engineering.skill.md`).
- **Extract Exact Values:** Use the DevTools `Computed` tab to get precise `font-size`, `line-height`, `letter-spacing`, `padding`, and `margin`.
- **Fetch Assets:** Download any SVGs, background images, or custom web fonts from the `Network` or `Elements` tab.
- **Observe States:** Hover over buttons, links, and cards to see interactive states that aren't visible in a static screenshot.

## 2. The Skeleton Build (Structure First)

Do not start styling immediately. Build the bare HTML/React structure first to ensure the foundation is solid.

- **Semantic HTML:** Use `<section>`, `<header>`, `<nav>`, `<article>`, `<aside>` to build the document outline.
- **Layout Wrappers:** Set up the main containers using Tailwind to restrict width and center content.
  - Example: `<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">`
- **Flex/Grid Scaffolding:** Implement the macro-layout identified in Step 1. Create the grid tracks or flex containers without worrying about the content yet.
  - Example: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">`
- **Content Insertion:** Put placeholder text, structural `<div>` blocks, or the actual text from the screenshot into the skeleton.

## 3. Pixel-Perfect Styling (Iterative Refinement)

With the skeleton in place, apply styling layer by layer to match the reference exactly.

1. **Typography & Colors First:** Apply text colors, background colors, font families, text sizes, and leading (line heights). This immediately makes the structural clone look 80% closer to the original.
2. **Spacing (The Secret to Polish):** Apply the exact padding (`p-*`) and margins (`m-*`) extracted during analysis. Prefer using `gap-*` for spacing flex/grid children. Ensure the vertical rhythm between sections matches the screenshot perfectly.
3. **Borders, Radii & Shadows:** Add subtle details like `border-radius` (`rounded-*`), borders, and box-shadows (`shadow-*`). These micro-details are often the difference between a "good" and "perfect" clone.
4. **Positioning & Z-Index:** Handle absolute positioning for decorative elements, floating badges, or overlapping images (e.g., `relative` parent with `absolute -top-4 -right-4` child).

## 4. Responsive Adaptation

A screenshot usually only shows one viewport (desktop or mobile).
- **Mobile-First Approach:** Default your Tailwind classes to match the mobile view.
- **Scale Up:** Use `sm:`, `md:`, `lg:`, `xl:` breakpoints to match the desktop screenshot or live link behavior.
- **Logical Deductions:** If you only have a desktop screenshot, use standard UI patterns to deduce how it should stack on mobile (e.g., multi-column grids usually stack to 1 column; navbars collapse into hamburger menus).

## 5. Interactivity & Animations

Add the final layer of polish to make the clone feel alive.
- **Hover/Focus States:** Implement `hover:bg-*`, `hover:text-*`, and transition classes (`transition-all duration-300 ease-in-out`) based on live link observations or common sense.
- **Entry Animations:** If instructed or if observed on the live site, add simple Framer Motion (`initial`, `animate`, `transition`) or GSAP animations for elements appearing on scroll or load.

## Summary Checklist
- [ ] Visual analysis complete: Macro-layout, colors, and components identified.
- [ ] DevTools used (if link available) to extract exact spacing, typography, and assets.
- [ ] Structural skeleton built with semantic HTML and appropriate Flex/Grid wrappers.
- [ ] Typography, colors, and spacing iteratively applied to match the reference pixel-for-pixel.
- [ ] Responsive breakpoints tested and logically implemented for all screen sizes.
- [ ] Hover states and interactive elements added for a "live" feel.
