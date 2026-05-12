# Advanced Web Animation Mastery

## Purpose
This document outlines best practices and techniques for implementing high-quality, performant animations in our frontend projects. The goal is to recreate premium animations closely, providing a polished and engaging user experience using industry-standard libraries.

## 1. Core Animation Libraries

We rely on two primary libraries depending on the project stack and specific animation needs:

### Framer Motion (For React)
Framer Motion is our go-to for declarative, component-based animations in React.
- **Usage:** Ideal for route transitions, micro-interactions, drag effects, and layout animations.
- **Best Practices:**
  - Utilize `variants` to orchestrate complex animations across multiple children.
  - Use `AnimatePresence` for unmounting animations (e.g., modals, accordions).
  - Prefer `useAnimation` and `useScroll` hooks for more complex, scroll-linked, or imperative animations.

### GSAP (GreenSock Animation Platform)
GSAP is the industry standard for complex, high-performance, and timeline-based animations.
- **Usage:** Best for elaborate sequential animations, SVG animations, and heavy DOM manipulations where Framer Motion might struggle with performance.
- **Best Practices:**
  - Use `gsap.timeline()` to chain animations easily without complex delay calculations.
  - In React, always use the `@gsap/react` hook `useGSAP()` to handle cleanup and scope animations to components correctly.

## 2. Scroll-Driven Animations

Scroll animations significantly enhance storytelling and user engagement.

### ScrollTrigger (via GSAP)
ScrollTrigger is the ultimate tool for scroll-based animations.
- **Techniques:**
  - **Pinning:** Use `pin: true` to lock sections in place while horizontal scrolling or internal animations occur.
  - **Scrubbing:** Link animation progress directly to the scrollbar using `scrub: true` or `scrub: 1` (for a slight smooth delay).
  - **Toggle Actions:** Control playback states (play, pause, reverse, reset) based on intersection points using `toggleActions`.

## 3. Parallax Effects

Parallax creates an illusion of depth by moving background and foreground elements at different speeds.

- **Implementation:**
  - **GSAP ScrollTrigger:** Map the `y` transform of a background image to the scroll position using `scrub`.
  - **Framer Motion:** Use the `useScroll` hook to get `scrollYProgress` and pass it to a `useTransform` hook to adjust the `y` value of elements.
- **Best Practice:** Keep parallax subtle. Overusing it can cause motion sickness and degrade performance. Apply it mainly to hero sections, large images, or subtle background abstract shapes. Always animate `transform` properties, never `top`/`left`.

## 4. Smooth Scrolling

Native browser scrolling can feel abrupt. Smooth scrolling provides a premium, "website-as-an-app" feel.

- **Implementation:** Use a library like **Lenis** (by Studio Freight).
- **Integration:** Lenis integrates seamlessly with GSAP ScrollTrigger. Always sync the ScrollTrigger update cycle with Lenis's `requestAnimationFrame` loop.
- **Accessibility:** Ensure smooth scrolling can be disabled if the user's OS has "reduced motion" enabled (`@media (prefers-reduced-motion: reduce)`).

## 5. Micro-Interactions & Hover Transitions

Micro-interactions are the small, subtle animations that provide feedback and delight.

- **CSS Transitions:** For simple hover states (color, opacity, slight transforms), pure CSS or Tailwind is preferred for performance.
  - Example: `transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg`.
- **Eased Hover States:** Ensure transitions have both an `in` and `out` ease so elements don't snap back abruptly when the mouse leaves.
- **Magnetic Buttons:** Use GSAP or Framer Motion to create magnetic buttons where the text and background track the mouse cursor within a specific bounding box.
- **Custom Cursors:** If the design calls for it, animate custom cursors using GSAP to lag slightly behind the native mouse position for a fluid feel.

## Summary Checklist
- [ ] Choose the right tool: Framer Motion for React state-based animations, GSAP for complex timelines/scroll.
- [ ] Smooth scrolling (Lenis) is implemented and synced with ScrollTrigger if applicable.
- [ ] Animations respect the `prefers-reduced-motion` accessibility setting.
- [ ] Parallax effects are subtle and performant (using hardware-accelerated `transform` instead of `margin`/`top`/`left`).
- [ ] React components using GSAP properly clean up their timelines using `useGSAP()` or standard cleanup functions to prevent memory leaks.
