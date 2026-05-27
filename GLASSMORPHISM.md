# Glassmorphism Feature Guide

This document explains how to use the glassmorphism (frosted glass) effects in your components.

## Available Card Variants

The `Card` component now supports four glass variants in addition to the default style:

### 1. **Default Card**
```jsx
<Card>
  <p>Regular card with standard styling</p>
</Card>
```
- Regular solid background
- Traditional shadow and border

### 2. **Glass Card** (Recommended)
```jsx
<Card variant="glass">
  <p>Frosted glass effect</p>
</Card>
```
- 30% opacity white background
- 8px backdrop blur
- Subtle white/transparent border
- Smooth hover transition with slight opacity increase

### 3. **Glass Light** (Strongest Effect)
```jsx
<Card variant="glass-light">
  <p>Strong frosted glass effect</p>
</Card>
```
- 40% opacity white background
- 12px backdrop blur (more blur than standard glass)
- More pronounced white border
- Best for hero sections or featured content

### 4. **Glass Dark** (Subtle Effect)
```jsx
<Card variant="glass-dark">
  <p>Subtle glass effect</p>
</Card>
```
- 10% opacity white background
- 16px backdrop blur (strongest blur)
- Minimal white border
- Best for overlay effects or dark theme

### 5. **Glass Small** (Minimal Effect)
```jsx
<Card variant="glass-sm">
  <p>Minimal glass effect</p>
</Card>
```
- 20% opacity white background
- 4px backdrop blur (lightest blur)
- Minimal border
- Best for nested cards or supporting elements

## Dark Mode Support

All glass variants automatically adjust for dark mode:
- In light mode: Semi-transparent white backgrounds
- In dark mode: Either white/black semi-transparent backgrounds (depending on variant)

Example:
```jsx
// This card will look different in light vs. dark mode automatically
<Card variant="glass-light">
  <p>Works in both themes</p>
</Card>
```

## Adding Glow Effects

For enhanced visual appeal, combine with glow utilities:

```jsx
<Card variant="glass" className="glass-glow">
  <p>Glass card with subtle glow</p>
</Card>

<Card variant="glass-light" className="glass-glow-lg">
  <p>Glass card with strong glow</p>
</Card>
```

## Examples in Components

### Services Card Example
```jsx
<Card variant="glass" className="glass-glow">
  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl">
    <Icon />
  </div>
  <h3 className="text-xl font-bold">Service Name</h3>
  <p>Service description with glassmorphism effect</p>
</Card>
```

### Testimonial Card Example
```jsx
<Card variant="glass-light" className="glass-glow-lg p-8">
  <p className="text-lg italic">Great service!</p>
  <p className="mt-4 font-semibold">- Client Name</p>
</Card>
```

## Combining with Other Utilities

Glass variants work seamlessly with Tailwind utilities:

```jsx
<Card 
  variant="glass" 
  className="hover:shadow-lg hover:scale-105 transition-all p-6 space-y-4"
>
  <h3>Interactive Glass Card</h3>
  <p>Scales and glows on hover</p>
</Card>
```

## Browser Compatibility

Glassmorphism effects require support for:
- `backdrop-filter` (CSS feature)
- Modern browsers: Chrome 76+, Safari 9+, Firefox 103+

Fallback: Cards degrade gracefully to solid backgrounds in older browsers.

## Performance Tips

- Glass effects work best with complex backgrounds (gradients, images)
- On simple color backgrounds, consider using the default card variant
- Use `glass-sm` for many cards on the same page (lighter blur = better performance)
- Combine with `will-change: transform` for animated glass cards for better performance

## Customizing Glass Effects

To add custom glass variants, edit `tailwind.config.js`:

```javascript
addComponents({
  '.glass-custom': {
    '@apply bg-blue-400/20 dark:bg-blue-900/30 backdrop-blur-xl border border-blue-300/30': {}
  }
});
```

Then use:
```jsx
<Card variant="glass-custom">
  <p>Custom glass effect</p>
</Card>
```
