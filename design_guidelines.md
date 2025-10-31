# Design Guidelines: Compute-Politik AI Forecasting Dashboard

## Design Approach

**Selected Approach**: Hybrid Design System + Data Dashboard Reference

**Primary System**: Carbon Design System (IBM) - optimized for data-heavy enterprise applications with strong information hierarchy

**Reference Inspiration**: 
- Linear's clean typography and modern data displays
- Stripe Dashboard's clarity with sophisticated data presentation
- Observable's focus on interactive data visualization
- Vercel Analytics' modern metrics styling

**Core Principle**: Scientific credibility meets modern web sophistication. This dashboard must command authority while remaining approachable for policymakers.

---

## Typography System

### Font Families
- **Primary Interface**: Inter (via Google Fonts)
  - Headings: 600-700 weight
  - Body: 400-500 weight
  - Data/Numbers: 500-600 weight (tabular-nums enabled)
- **Monospace** (for code/data): JetBrains Mono 400-500

### Type Scale
- **Hero/Landing**: text-5xl to text-6xl (48-60px), font-semibold
- **Page Titles**: text-3xl to text-4xl (30-36px), font-semibold
- **Section Headers**: text-2xl (24px), font-semibold
- **Card Titles**: text-lg to text-xl (18-20px), font-medium
- **Body Text**: text-base (16px), font-normal
- **Data Labels**: text-sm (14px), font-medium
- **Captions/Metadata**: text-xs to text-sm (12-14px), font-normal
- **Large Metrics**: text-4xl to text-5xl (36-48px), font-bold, tabular-nums

---

## Layout System

### Spacing Primitives
**Core Units**: Tailwind spacing of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-4 to p-6
- Section spacing: py-12 to py-20
- Card gaps: gap-6 to gap-8
- Form field spacing: space-y-4
- Tight groupings: gap-2 to gap-3

### Container Strategy
- **Full Dashboard**: max-w-screen-2xl with px-6 to px-8
- **Content Sections**: max-w-7xl
- **Charts/Visualizations**: Full width within container
- **Reading Content**: max-w-4xl

### Grid Systems
- **Main Dashboard Layout**: 12-column grid
  - Sidebar: col-span-2 to col-span-3
  - Main content: col-span-9 to col-span-10
- **Card Grids**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- **Metrics Display**: grid-cols-2 lg:grid-cols-4
- **Scenario Cards**: grid-cols-1 lg:grid-cols-2

---

## Component Library

### Navigation & Structure

**Top Navigation Bar**
- Fixed header, h-16, border-b, backdrop-blur
- Logo left, tab navigation center, user actions right
- Tabs: horizontal flex with px-6, py-4, border-b-2 active indicator

**Sidebar (Dashboard View)**
- w-64 to w-72, fixed left, full height
- Navigation items: py-3, px-4, rounded-lg
- Collapsible sections with chevron indicators
- Active state: medium weight, slight indent

**Tab System**
- Horizontal tabs below header
- Clean underline indicator (2px height)
- Generous spacing: px-6 to px-8 per tab
- Smooth transition on active state

### Data Visualization Components

**Primary Chart Container**
- Card with rounded-lg, border
- Header: p-6 with title and metadata row
- Chart area: p-6, min-h-96 to min-h-[500px]
- Legend: Bottom or right placement, text-sm

**Interactive Sliders Panel**
- Grouped in card with p-6
- Each slider: space-y-3
- Label row: flex justify-between (name + current value)
- Range input: w-full, h-2 track
- Value display: text-lg, font-semibold, tabular-nums

**Metric Cards**
- Compact: p-6, rounded-lg, border
- Label: text-sm, font-medium, uppercase tracking
- Value: text-3xl to text-4xl, font-bold, tabular-nums
- Change indicator: text-sm with arrow icon
- Sparkline: Optional mini-chart, h-12

**Confidence Interval Visualization**
- Shaded area for uncertainty bands
- Dashed lines for confidence bounds
- Clear legend explaining percentile ranges
- Tooltip on hover showing exact values

### Interactive Controls

**Scenario Selector Cards**
- Large clickable cards: p-6, rounded-xl, border-2
- Icon/emoji at top (48x48 or text-4xl)
- Title: text-xl, font-semibold
- Description: text-sm, 2-3 lines
- Hover state: transform scale-105, transition-transform
- Selected state: thicker border

**Form Inputs & Controls**
- Input fields: h-12, px-4, rounded-lg, border
- Dropdowns: Same dimensions as inputs
- Buttons Primary: h-12, px-8, rounded-lg, font-medium
- Buttons Secondary: Same size, different treatment
- Icon buttons: w-10 h-10, rounded-lg

**Data Table**
- Striped rows for readability
- Header: font-semibold, text-sm, uppercase, tracking-wide
- Cells: py-4, px-6
- Sortable columns with arrow indicators
- Sticky header on scroll

### Information Display

**Timeline Component**
- Vertical line with milestone markers
- Date labels: text-sm, font-medium
- Event cards: Connected with horizontal line
- Icon indicators for event types

**Sankey Diagram Container**
- Full width within section
- Min height: 600px for desktop
- Interactive hover states showing flow values
- Clear labels with text-sm to text-base

**Impact Breakdown Panel**
- Stacked percentage bars or pie charts
- Color-coded segments
- Legend with percentages: text-sm, tabular-nums
- Breakdown list below with precise values

**Data Provenance Cards**
- Compact format: p-4, rounded-md, border
- Source name: font-medium
- Link: text-sm, underline-offset-2
- Confidence badge: Inline, text-xs, rounded-full, px-3, py-1
- Last updated: text-xs, opacity-70

### Content Sections

**Hero Section (Landing)**
- Full viewport: min-h-screen
- Centered content: max-w-4xl
- Hero stat: text-6xl to text-7xl, font-bold
- Subtitle: text-xl to text-2xl, max-w-2xl
- CTA buttons: h-14, px-10, rounded-lg, text-lg
- Background: Subtle gradient or pattern

**Feature Section (What-If Scenarios)**
- 2-column grid on desktop
- Before/After comparison cards
- Large arrow icon between states (text-4xl)
- Impact metrics in badge format
- Compact timeline showing changes

**Validation Section**
- Historical event cards: 3-column grid
- Event name + date header
- Chart showing actual vs predicted
- Accuracy percentage prominently displayed
- Methodology note in text-xs

**Footer**
- Multi-column layout: grid-cols-1 md:grid-cols-3
- Logo and tagline left
- Links center (Methodology, Data Sources, About)
- Contact and social right
- py-12, border-t

---

## Images

**Hero Section**: Large background image showing semiconductor manufacturing floor or data center (1920x1080 minimum). Apply subtle overlay (opacity-10 to opacity-20) to ensure text readability. Blur background behind CTAs using backdrop-blur-md.

**Scenario Cards**: Icon-based illustrations rather than photos - use large emoji or SVG icons (e.g., 🌏 for geopolitical, 🎓 for talent, ⚠️ for crisis).

**Historical Validation**: Small thumbnail charts (400x300) showing actual historical data trends embedded in event cards.

---

## Animation & Interactions

**Critical**: Animations used sparingly and purposefully
- Chart transitions: 300ms ease for data updates
- Slider value changes: Immediate visual feedback
- Tab switching: 200ms fade transition
- Hover states: 150ms ease for subtle elevation
- Loading states: Simple skeleton screens or progress bars
- NO distracting scroll animations or parallax effects

---

## Accessibility Standards

- All interactive controls: min-h-12 (48px touch target)
- Form labels: Always visible, not placeholder-only
- Chart data: Always provide data table alternative
- Focus indicators: 2px offset ring on all interactive elements
- Contrast: Ensure all text meets WCAG AA standards
- Keyboard navigation: Full support for all interactive features