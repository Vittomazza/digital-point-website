/**
 * Visual Demo Component - Shows all glassmorphism variants
 * 
 * This is a reference component demonstrating all available glass variants.
 * Copy and paste this into your app to see the effects in action.
 * 
 * Usage:
 * import { GlassVisualDemo } from './GLASS_VISUAL_DEMO';
 * 
 * Then add to your app:
 * <GlassVisualDemo />
 */

import React from 'react';
import { Card } from './src/components/ui/card';

export const GlassVisualDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Glassmorphism Variants
          </h1>
          <p className="text-xl text-white/70">
            All available glass effect variants for your cards
          </p>
        </div>

        {/* Individual Variants Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Default Card */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Default Card</h2>
            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Standard Card</h3>
                  <p className="text-sm opacity-70">
                    Traditional card with solid background, no glass effect.
                  </p>
                  <code className="text-xs bg-slate-100 p-2 rounded block mt-4">
                    &lt;Card&gt;Content&lt;/Card&gt;
                  </code>
                </div>
              </div>
            </Card>
          </div>

          {/* Glass Variant */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Glass Variant</h2>
            <Card variant="glass" className="p-8 glass-glow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Frosted Glass</h3>
                  <p className="text-sm opacity-70">
                    30% opacity, 8px blur. Perfect for general use and balanced effect.
                  </p>
                  <code className="text-xs bg-white/20 p-2 rounded block mt-4">
                    variant="glass"
                  </code>
                </div>
              </div>
            </Card>
          </div>

          {/* Glass Light Variant */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Glass Light</h2>
            <Card variant="glass-light" className="p-8 glass-glow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Strong Glass Effect</h3>
                  <p className="text-sm opacity-70">
                    40% opacity, 12px blur. Best for featured content and hero sections.
                  </p>
                  <code className="text-xs bg-white/20 p-2 rounded block mt-4">
                    variant="glass-light"
                  </code>
                </div>
              </div>
            </Card>
          </div>

          {/* Glass Dark Variant */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Glass Dark</h2>
            <Card variant="glass-dark" className="p-8 glass-glow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Subtle Glass Effect</h3>
                  <p className="text-sm opacity-70">
                    10% opacity, 16px blur. Ideal for subtle overlays and supporting elements.
                  </p>
                  <code className="text-xs bg-white/20 p-2 rounded block mt-4">
                    variant="glass-dark"
                  </code>
                </div>
              </div>
            </Card>
          </div>

          {/* Glass Small Variant */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Glass Small</h2>
            <Card variant="glass-sm" className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Minimal Glass Effect</h3>
                  <p className="text-sm opacity-70">
                    20% opacity, 4px blur. Great for performance and nested cards.
                  </p>
                  <code className="text-xs bg-white/20 p-2 rounded block mt-4">
                    variant="glass-sm"
                  </code>
                </div>
              </div>
            </Card>
          </div>

          {/* Glow Effects */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">With Glow Effects</h2>
            <Card variant="glass" className="p-8 glass-glow hover:glass-glow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Glass with Glow</h3>
                  <p className="text-sm opacity-70">
                    Combine glass variants with glow utilities for enhanced appearance.
                  </p>
                  <code className="text-xs bg-white/20 p-2 rounded block mt-4">
                    className="glass-glow"
                  </code>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Interactive Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              variant="glass" 
              className="glass-glow p-6 cursor-pointer hover:scale-105 hover:glass-glow-lg transition-all duration-300"
            >
              <h3 className="font-bold mb-2">Hover Me</h3>
              <p className="text-sm opacity-70">Scales up and glow increases</p>
            </Card>

            <Card 
              variant="glass-light" 
              className="glass-glow-lg p-6 cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="font-bold mb-2">Hover Me</h3>
              <p className="text-sm opacity-70">Slides up on hover</p>
            </Card>

            <Card 
              variant="glass-dark" 
              className="glass-glow p-6 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="font-bold mb-2">Hover Me</h3>
              <p className="text-sm opacity-70">Shadow enhances on hover</p>
            </Card>
          </div>
        </div>

        {/* Grid Example */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Grid Layout Example</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <Card 
                key={num}
                variant="glass" 
                className="glass-glow p-6 hover:scale-105 transition-transform"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4" />
                <h3 className="font-bold mb-2">Service {num}</h3>
                <p className="text-sm opacity-70">
                  Description of service {num}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Usage Code */}
        <div className="bg-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Usage Code</h2>
          <pre className="text-white overflow-auto">
            {`import { Card } from './components/ui/card';

// Basic glass card
<Card variant="glass" className="p-8">
  Content here
</Card>

// With glow effect
<Card variant="glass" className="p-8 glass-glow">
  Content here
</Card>

// With hover effects
<Card 
  variant="glass-light" 
  className="p-8 glass-glow-lg hover:scale-105 transition-all"
>
  Interactive content
</Card>

// All variants
<Card variant="glass" />        {/* Standard glass */}
<Card variant="glass-light" />  {/* Strong effect */}
<Card variant="glass-dark" />   {/* Subtle effect */}
<Card variant="glass-sm" />     {/* Light blur */}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default GlassVisualDemo;
