# Instagram Desktop Homefeed Design System

## Purpose
Create a polished desktop web recreation of the Instagram home feed experience for design/prototyping purposes. Focus on responsive desktop layouts (1280px+), clean spacing, modern performance, and reusable components.

---

## Core Principles
- Minimal, airy, content-first UI
- Strong visual hierarchy
- Consistent 8px spacing system
- Rounded surfaces and subtle borders
- Fast perceived performance
- Familiar social interactions
- Accessible contrast and keyboard navigation

---

## Layout Structure (Desktop)

### Canvas Width
- Full viewport width
- Max content container: 1440px
- Center aligned

### Three Column Grid
- Left Sidebar: 244px fixed
- Center Feed: 470px
- Right Rail: 320px
- Column Gap: 32px

```text
| Sidebar | gap | Feed | gap | Right Rail |
```

### Sticky Regions
- Sidebar sticky top: 24px
- Right rail sticky top: 24px

---

## Spacing Scale
- 4px xs
n- 8px sm
- 12px md
- 16px base
- 24px lg
- 32px xl
- 48px 2xl

Use multiples of 8 whenever possible.

---

## Color Tokens

### Light Mode
- Background: #FFFFFF
- App Surface: #FAFAFA
- Border: #DBDBDB
- Primary Text: #262626
- Secondary Text: #8E8E8E
- Link Blue: #0095F6
- Danger Red: #ED4956
- Story Ring Gradient: linear-gradient(45deg,#FEDA75,#FA7E1E,#D62976,#962FBF,#4F5BD5)

### Dark Mode
- Background: #000000
- Surface: #121212
- Border: #262626
- Primary Text: #F5F5F5
- Secondary Text: #A8A8A8

---

## Typography
- Font Stack: Inter, SF Pro Text, Segoe UI, Arial, sans-serif
- Base Size: 14px
- Body Line Height: 1.45
- Username: 14px / 600
- Caption: 14px / 400
- Meta Text: 12px / 400
- Nav Labels: 16px / 500

---

## Radius Tokens
- Small: 8px
- Medium: 12px
- Large: 16px
- Avatar: 999px

---

## Shadows
- Card Shadow: 0 1px 2px rgba(0,0,0,.06)
- Hover Shadow: 0 8px 24px rgba(0,0,0,.08)

---

## Components

## 1. Sidebar Navigation
Width: 244px

Items:
- Logo mark
- Home
- Search
- Explore
- Reels
- Messages
- Notifications
- Create
- Profile
- More

States:
- Default
- Hover (surface tint)
- Active (bold icon/text)

Spacing:
- Row height 48px
- Icon gap 16px
- Padding x 12px

---

## 2. Stories Row
Container Width: 470px
Height: 118px

Story Item:
- Avatar 56px
- Gradient ring 2px
- Username label below
- Gap 16px horizontal
- Horizontal scroll hidden scrollbar

---

## 3. Feed Post Card
Width: 470px
Border radius: 12px
Background: transparent or white depending style mode
Margin bottom: 24px

Sections:

### Header
- Avatar 32px
- Username + verified badge
- Meta dot separator
- More menu icon
- Padding: 12px 0

### Media
- 1:1 square default
- 4:5 portrait supported
- Overflow hidden
- Background placeholder shimmer

### Actions Row
- Like
- Comment
- Share
- Save (right aligned)
- Icon size 24px
- Gap 16px
- Padding top 12px

### Meta Block
- Likes count
- Caption (username bold + text)
- View comments link
- Timestamp
- Add comment input row

---

## 4. Right Rail
Width: 320px

Modules:
- Current profile mini card
- Suggested for you list
- Footer links

Suggestion Item:
- Avatar 44px
- Username
- Mutual/follow text
- Follow CTA button
- Row height 56px

---

## Interactions

### Hover
- Buttons opacity: 0.7
- Cards slight shadow lift

### Like Animation
- Heart burst scale 1 -> 1.2 -> 1
- 220ms ease-out

### Double Click Media
- Center heart overlay

### Skeleton Loading
- Gray pulse placeholders for stories/posts

---

## Responsive Rules

### 1280px+
Show all three columns

### 1024px–1279px
Hide right rail

### 768px–1023px
Collapse sidebar icons only
Center feed remains

### <768px
Switch to mobile layout (separate system)

---

## Accessibility
- Keyboard focus rings visible
- Alt text on media
- Contrast ratio AA minimum
- Buttons minimum target 40x40px

---

## Motion Guidelines
- Use subtle transitions 150ms–250ms
- Avoid excessive parallax
- Preserve instant scrolling feel

---

## CSS Variables Example

```css
:root {
  --bg: #ffffff;
  --text: #262626;
  --muted: #8e8e8e;
  --border: #dbdbdb;
  --blue: #0095f6;
  --radius-md: 12px;
  --space-2: 8px;
  --space-4: 16px;
}
```

---

## React Component Tree

```text
AppShell
 ├── Sidebar
 ├── FeedLayout
 │    ├── StoriesBar
 │    ├── PostCard[]
 └── RightRail
      ├── ProfileCard
      └── SuggestionsList
```

---

## Implementation Recommendations
- React + Tailwind CSS
- Virtualized feed for long lists
- Lazy-load images
- IntersectionObserver for autoplay/video triggers
- Zustand or Context for UI state

---

## Premium Polish Extras
- Frosted sidebar in dark mode
- Smooth story snap scrolling
- Smart image dominant-color placeholders
- Realistic micro-animations
- Desktop keyboard shortcuts (J/K navigation)

---

## Deliverable Goal
A high-fidelity desktop feed clone that feels native, fast, elegant, and production-grade while staying modular.

