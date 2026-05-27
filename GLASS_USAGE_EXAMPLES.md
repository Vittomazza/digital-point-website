# Quick Glassmorphism Usage Examples

## How to Use Glass Variants in Your Components

### For Your ServicesSection

To update your ServicesSection cards to use glassmorphism, change:

**Current:**
```jsx
<Card className="h-full bg-white border-2 border-slate-200 hover:border-blue-400 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
```

**To (Option 1 - Subtle Glass):**
```jsx
<Card variant="glass" className="h-full p-8 rounded-2xl transition-all duration-300 glass-glow relative overflow-hidden">
```

**Or (Option 2 - Strong Glass):**
```jsx
<Card variant="glass-light" className="h-full p-8 rounded-2xl transition-all duration-300 glass-glow-lg relative overflow-hidden">
```

**Or (Option 3 - Dark Glass with Blur):**
```jsx
<Card variant="glass-dark" className="h-full p-8 rounded-2xl transition-all duration-300 glass-glow relative overflow-hidden">
```

---

## Simple Test Component

Create a test component to preview all glass variants:

```jsx
// components/GlassPreview.jsx
import React from 'react';
import { Card } from './ui/card';

export const GlassPreview = () => {
  return (
    <div className="p-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">
        Glassmorphism Variants
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Default */}
        <Card className="p-8 h-64 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg mb-2">Default</h3>
            <p className="text-sm opacity-70">Standard card styling</p>
          </div>
          <code className="text-xs bg-slate-100 p-2 rounded">variant="default"</code>
        </Card>

        {/* Glass */}
        <Card variant="glass" className="p-8 h-64 flex flex-col justify-between glass-glow">
          <div>
            <h3 className="font-bold text-lg mb-2">Glass</h3>
            <p className="text-sm opacity-70">Frosted glass effect</p>
          </div>
          <code className="text-xs bg-white/20 p-2 rounded">variant="glass"</code>
        </Card>

        {/* Glass Light */}
        <Card variant="glass-light" className="p-8 h-64 flex flex-col justify-between glass-glow-lg">
          <div>
            <h3 className="font-bold text-lg mb-2">Glass Light</h3>
            <p className="text-sm opacity-70">Strong glass effect</p>
          </div>
          <code className="text-xs bg-white/20 p-2 rounded">variant="glass-light"</code>
        </Card>

        {/* Glass Dark */}
        <Card variant="glass-dark" className="p-8 h-64 flex flex-col justify-between glass-glow">
          <div>
            <h3 className="font-bold text-lg mb-2">Glass Dark</h3>
            <p className="text-sm opacity-70">Subtle glass effect</p>
          </div>
          <code className="text-xs bg-white/20 p-2 rounded">variant="glass-dark"</code>
        </Card>

        {/* Glass Small */}
        <Card variant="glass-sm" className="p-8 h-64 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg mb-2">Glass Small</h3>
            <p className="text-sm opacity-70">Minimal glass effect</p>
          </div>
          <code className="text-xs bg-white/20 p-2 rounded">variant="glass-sm"</code>
        </Card>
      </div>
    </div>
  );
};
```

---

## Using Glass in Different Sections

### Hero Section with Glass Overlay
```jsx
<Card variant="glass-light" className="glass-glow-lg p-12 max-w-2xl mx-auto">
  <h2 className="text-3xl font-bold mb-4">Welcome to Our Services</h2>
  <p className="text-lg mb-6">Experience modern design with glassmorphism effects</p>
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all">
    Get Started
  </button>
</Card>
```

### Feature Cards Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {features.map((feature) => (
    <Card key={feature.id} variant="glass" className="glass-glow p-6 hover:scale-105 transition-transform">
      <feature.icon className="w-8 h-8 mb-4 text-blue-600" />
      <h3 className="font-bold mb-2">{feature.title}</h3>
      <p className="text-sm opacity-70">{feature.description}</p>
    </Card>
  ))}
</div>
```

### Testimonial/Quote Cards
```jsx
<Card variant="glass-dark" className="glass-glow p-8 border-l-4 border-blue-500">
  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
  <p className="font-semibold">{testimonial.author}</p>
  <p className="text-sm opacity-70">{testimonial.title}</p>
</Card>
```

### Pricing Cards (with emphasis)
```jsx
<Card 
  variant={isPopular ? "glass-light" : "glass"} 
  className={`p-8 transition-all ${isPopular ? "glass-glow-lg scale-105" : "glass-glow"}`}
>
  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
  <p className="text-4xl font-bold mb-2">${plan.price}</p>
  <p className="text-sm opacity-70 mb-6">{plan.description}</p>
  <ul className="space-y-2 mb-8">
    {plan.features.map((feature) => (
      <li key={feature} className="text-sm">✓ {feature}</li>
    ))}
  </ul>
  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all">
    Choose Plan
  </button>
</Card>
```

---

## Tips for Best Results

1. **Use with complex backgrounds**: Glass effects look best when there's a detailed background (gradient, image, or pattern) behind them
2. **Contrast matters**: Ensure text is readable over the glass effect
3. **Color consistency**: Match the glass tint with your brand colors
4. **Performance**: Use `glass-sm` for many cards on the same page
5. **Hover effects**: Combine with `hover:scale-105` or `hover:shadow-lg` for better interactivity

---

## Testing Your Implementation

After adding glassmorphism to your components:

1. Test in light mode (default)
2. Test in dark mode
3. Test with different background colors/gradients
4. Test hover states
5. Check performance on slower devices
