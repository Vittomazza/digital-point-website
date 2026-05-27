# Glassmorphism Quick Reference

## Glass Variants At A Glance

| Variant | Background | Blur | Best For | Opacity | 
|---------|-----------|------|----------|---------|
| `glass` | 30% white | 8px | General use | Medium |
| `glass-light` | 40% white | 12px | Featured content | High |
| `glass-dark` | 10% white | 16px | Subtle effects | Low |
| `glass-sm` | 20% white | 4px | Nested/supporting | Light |

## Glow Utilities

- `.glass-glow` - Subtle glow effect (light mode)
- `.glass-glow-lg` - Strong glow effect (light mode)
- Both automatically adjust for dark mode

## Quick Copy-Paste Examples

### Featured Card
```jsx
<Card variant="glass-light" className="glass-glow-lg p-8 rounded-2xl">
  {/* Content */}
</Card>
```

### Service Card Grid
```jsx
<div className="grid grid-cols-3 gap-6">
  {services.map(s => (
    <Card key={s.id} variant="glass" className="glass-glow p-6 hover:scale-105 transition-transform">
      {/* Service content */}
    </Card>
  ))}
</div>
```

### Subtle Overlay
```jsx
<Card variant="glass-dark" className="glass-glow absolute inset-0">
  {/* Overlay content */}
</Card>
```

### Multiple Card Layout
```jsx
<div className="space-y-4">
  {/* Main card - featured */}
  <Card variant="glass-light" className="glass-glow-lg p-8">Main</Card>
  
  {/* Supporting cards */}
  <Card variant="glass" className="glass-glow p-6">Secondary</Card>
  <Card variant="glass-sm" className="p-4">Tertiary</Card>
</div>
```

## Customization in Tailwind

Add custom glass effects in `tailwind.config.js`:

```javascript
// Add to plugins function
addComponents({
  '.glass-custom-blue': {
    '@apply bg-blue-400/20 dark:bg-blue-900/30 backdrop-blur-xl border border-blue-300/30': {}
  }
});
```

Then use:
```jsx
<Card variant="glass-custom-blue" className="p-6">
  Custom blue glass
</Card>
```

## Properties You Can Modify

### Opacity Values
- `bg-white/10` (10% opacity)
- `bg-white/20` (20% opacity)
- `bg-white/30` (30% opacity)
- `bg-white/40` (40% opacity)
- `bg-white/50` (50% opacity)

### Blur Amounts
- `backdrop-blur-sm` (4px)
- `backdrop-blur-md` (8px)
- `backdrop-blur-lg` (12px)
- `backdrop-blur-xl` (16px)
- `backdrop-blur-2xl` (20px)

### Border Opacity
- `border-white/5` (5% opacity)
- `border-white/10` (10% opacity)
- `border-white/20` (20% opacity)
- `border-white/30` (30% opacity)

## Dark Mode Handling

The component automatically provides proper variants for dark mode:

```
Light mode:  bg-white/30 → white semi-transparent
Dark mode:   dark:bg-white/10 → white semi-transparent (darker)
```

No extra work needed! Just use the variant and it adapts.

## Combining Utilities

```jsx
{/* All of these work together */}
<Card 
  variant="glass" 
  className="
    glass-glow                    // Add glow effect
    p-8                          // Padding
    rounded-2xl                  // Border radius
    hover:scale-105              // Scale on hover
    hover:shadow-lg              // Extra shadow on hover
    transition-all               // Smooth transitions
    duration-300                 // Transition speed
    cursor-pointer               // Click hint
  "
>
  Content
</Card>
```

## Common Use Cases

### 1. Service/Feature Cards
```jsx
variant="glass" className="glass-glow hover:scale-105 transition-transform"
```

### 2. Testimonials
```jsx
variant="glass-dark" className="glass-glow border-l-4 border-blue-500"
```

### 3. Pricing Tiers
```jsx
variant={isBest ? "glass-light" : "glass"} 
className={isBest ? "glass-glow-lg scale-105" : "glass-glow"}
```

### 4. Modal/Overlay
```jsx
variant="glass-dark" className="glass-glow fixed inset-0"
```

### 5. Hero Section
```jsx
variant="glass-light" className="glass-glow-lg p-12 max-w-2xl"
```

## Performance Considerations

- ✅ `glass-sm` (4px blur) - Lightweight, use for many cards
- ⚠️ `glass` (8px blur) - Balanced performance and effect
- ⚠️ `glass-light` (12px blur) - More processing needed
- ⚠️ `glass-dark` (16px blur) - Maximum blur, use sparingly

## Browser Support

Works in:
- ✅ Chrome 76+
- ✅ Safari 9+
- ✅ Firefox 103+
- ✅ Edge 79+

Degrades gracefully in older browsers with solid background colors.

## Troubleshooting

**Glass effect not visible?**
- Ensure there's a background image or complex gradient behind the card
- Check that dark mode isn't making contrast too low

**Performance issues?**
- Switch to `glass-sm` variant (lighter blur)
- Reduce number of glass cards on same page
- Use `will-change: transform` for animated cards

**Text hard to read?**
- Increase opacity of text color
- Add text shadow with `drop-shadow`
- Use darker background or lighter text
