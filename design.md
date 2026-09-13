# Design

## Purpose

Define the visual and interaction rules for the university website.

This document is the design source of truth for UI decisions.
Prefer existing project patterns over creating new ones.

---

## Design Direction

* Clean, modern, and academic.
* Professional without feeling corporate.
* Information-first rather than decoration-first.
* Clear hierarchy and generous whitespace.
* Simple enough to navigate without explanation.
* Consistent across all pages.

The website should feel like a **real university information system**, not a marketing template or SaaS dashboard.

---

## Visual System

### Colors

Use the university brand colors as the foundation.

* Primary: University brand color
* Accent: Secondary university brand color
* Background: Neutral/light
* Foreground: Dark neutral
* Muted: Neutral gray
* Border: Subtle neutral
* Success / Warning / Error: Semantic colors

Rules:

* Primary color should guide important actions and navigation.
* Accent colors should be used sparingly.
* Maintain sufficient contrast.
* Do not introduce arbitrary colors for individual sections.
* Reuse existing theme tokens instead of hardcoding colors.

### Typography

* Use the project's primary font consistently.
* Strong but restrained heading hierarchy.
* Body text should prioritize readability.
* Keep paragraphs reasonably short.
* Use font weight and spacing before introducing more font sizes.

Hierarchy:

1. Page title
2. Section heading
3. Supporting text
4. Body text
5. Metadata

### Spacing

* Use a consistent spacing scale.
* Prefer whitespace over additional containers.
* Keep related content close together.
* Give major sections enough separation to establish hierarchy.
* Avoid both cramped layouts and excessive empty space.

### Shape

* Use subtle or moderate corner radii.
* Buttons should not automatically become pills.
* Cards should not be heavily rounded.
* Use borders and spacing to define structure before shadows.

### Elevation

* Prefer flat layouts.
* Use subtle shadows only when elevation improves understanding.
* Do not add shadows to every container.

---

## Layout

* Use a consistent max-width content container.
* Maintain consistent horizontal page padding.
* Establish a clear content hierarchy.
* Avoid layouts that stretch text across excessively wide areas.
* Use full-width sections only when they have a clear purpose.

### Responsive

Design mobile-first.

* Preserve hierarchy on smaller screens.
* Stack content when necessary.
* Keep primary actions accessible.
* Avoid horizontal scrolling unless the content genuinely requires it.
* Do not simply shrink the desktop layout.

---

## Navigation

Primary navigation should provide access to major university areas such as:

* About
* Academics
* Admissions
* Student Services
* Research
* News & Events
* Contact

Rules:

* Keep navigation predictable.
* Clearly indicate the current page or section.
* Keep important destinations easy to reach.
* Mobile navigation should remain simple.
* Do not hide essential information behind unnecessary interactions.

---

## Components

Prefer existing components and design-system primitives.

Use:

* **Button** — actions
* **Link** — navigation
* **Card** — grouping related content when useful
* **Tabs** — closely related views
* **Dialog** — focused decisions and confirmations
* **Sheet** — secondary information without leaving the current context
* **Table** — structured data
* **Input / Select** — forms and filtering

Rules:

* Reuse existing components before creating new ones.
* Do not create a component only for visual novelty.
* Keep component behavior predictable.
* Components should have a clear purpose.

---

## Content

* Use clear, direct language.
* Prefer university terminology over generic marketing language.
* Keep headings concise.
* Make important information scannable.
* Avoid unnecessary introductory text.
* Never invent university information.
* Do not use placeholder content in production UI.

---

## Interaction

Every interactive page should account for:

* Loading
* Empty
* Error
* Success
* Disabled states where appropriate

Rules:

* Provide clear feedback after important actions.
* Validate forms close to the relevant field.
* Confirm destructive actions.
* Make focus and hover states visible.
* Keep animations subtle and purposeful.
* Never use animation to compensate for weak layout or content.

---

## Accessibility

* Use semantic HTML.
* Maintain sufficient color contrast.
* Ensure keyboard accessibility.
* Provide meaningful labels for controls.
* Provide alt text for informative images.
* Do not communicate meaning through color alone.
* Interactive elements must have clear focus states.

---

## Homepage

The homepage is the **entry point to university information**, not a purely promotional landing page.

Priority:

1. University identity
2. Primary actions
3. Important announcements
4. Key university information
5. News and events
6. Supporting content

Do not add sections simply to make the homepage longer.

---

## Information Pages

Information pages should prioritize finding and understanding information.

Structure:

* Page title
* Short context when necessary
* Main information
* Related information or actions

Use search, filtering, tabs, or grouping only when the amount of information justifies them.

---

## News & Events

Prioritize:

* Title
* Date
* Category when useful
* Short summary
* Relevant action

Keep news listings easy to scan.

Do not overload each item with unnecessary metadata.

---

## Avoid

Do not introduce these unless there is a clear product reason:

* Excessive cards
* Excessive rounded corners
* Decorative gradients
* Unnecessary badges
* Fake statistics
* Redundant sections
* Excessive icons
* Dashboard-style layouts on normal information pages
* Large decorative illustrations that compete with content
* Excessive animations
* Multiple visual styles for the same component
* New libraries for problems the existing stack can solve
* UI added merely to "fill space"

---

## AI Implementation Rules

Before changing or creating UI:

1. Read this document.
2. Inspect existing components for reusable patterns.
3. Follow the existing theme and design tokens.
4. Reuse existing components where possible.
5. Keep the implementation consistent with nearby pages.
6. Only introduce new patterns when the existing system cannot reasonably solve the problem.

When a design decision is unspecified:

**Prefer:**

* Simplicity over decoration
* Consistency over novelty
* Usability over visual complexity
* Existing patterns over new patterns
* Clear information hierarchy over more components
* Real content over filler

Do not make unrelated refactors while implementing a UI feature.
