# Design Tokens

This directory contains the design token system for Base 2.0, structured to mirror the Figma variable architecture.

## Structure

```
tokens/
├── base/              # Brand Collection (Base values)
│   └── colors.css     # Raw color values
├── semantic/          # Alias Collection (Semantic tokens)
│   ├── colors.css     # Semantic color mappings
│   ├── typography.css # Typography tokens
│   ├── shadows.css    # Shadow tokens
│   ├── border-radius.css # Border radius tokens
│   └── spacing.css    # Spacing tokens
├── tokens.css         # Main entry point (imports all tokens)
├── tokens.js          # JavaScript API for tokens
└── README.md          # This file
```

## Architecture

The token system follows a three-tier architecture:

1. **Base Collection** (`base/`) - Raw values (colors, etc.)
2. **Semantic Collection** (`semantic/`) - Semantic tokens that reference base values
3. **Mapped Collection** - Multiple semantic tokens can share the same base value

## Usage

### CSS

Import the main tokens file in your CSS:

```css
@import './tokens/tokens.css';

.my-component {
  color: var(--text-primary-color);
  background-color: var(--bg-button-primary-color);
  padding: var(--space-4);
  border-radius: var(--border-radius-medium-m);
  box-shadow: var(--shadow-soft-s-both-themes);
}
```

### JavaScript

```javascript
import { getToken, tokens } from './tokens/tokens.js';

// Get a token value
const primaryColor = getToken('--text-primary-color');

// Use typed token paths
const buttonColor = getToken(tokens.colors.semantic.background.buttonPrimary);

// Set a token dynamically
setToken('--text-primary-color', '#000000');
```

## Token Categories

### Colors

#### Base Colors
- Greyscale: `--color-greyscale-100` through `--color-greyscale-1300`
- Brand: `--color-black`, `--color-white`, `--color-yellow-*`
- Semantic families: `--color-frog-*`, `--color-vitamin-*`, `--color-crimson-*`, `--color-violet-*`

#### Semantic Colors
- Text: `--text-primary-color`, `--text-secondary-color`, etc.
- Links: `--link-primary-color`, `--link-yellow-color`, etc.
- Backgrounds: `--bg-fill-primary-color`, `--bg-button-primary-color`, etc.

### Typography

Typography tokens are organized by type:
- Headlines: `--font-headline-h0-*` through `--font-headline-h3-*`
- Titles: `--font-title-t1-*` through `--font-title-t3-*`
- Body: `--font-body-b1-*` through `--font-body-b3-*`
- Captions: `--font-caption-c1-*` through `--font-caption-c3-*`

Each typography token includes:
- `size`: Font size
- `lineHeight`: Line height
- `letterSpacing`: Letter spacing
- `weight`: Font weight
- `family`: Font family

### Shadows

- Soft: `--shadow-soft-s-both-themes`, `--shadow-soft-m-both-themes`, etc.
- Medium: `--shadow-medium-s-both-themes`
- Strong: `--shadow-strong-s-both-themes-bottom`

### Border Radius

- Small: `--border-radius-small-xs` through `--border-radius-small-xl`
- Medium: `--border-radius-medium-s` through `--border-radius-medium-l`
- Large: `--border-radius-large-s` through `--border-radius-large-l`
- Extra Large: `--border-radius-extralarge-s` through `--border-radius-extralarge-l`
- Full: `--border-radius-full` (999px)

### Spacing

All spacing values are multiples of 2px:
- `--space-1` through `--space-20`
- Common patterns: `--spacing-component-padding`, `--spacing-card-padding`, etc.

## Connection Points

The token system maintains the same connection patterns as Figma:

1. **One-to-Many Mapping**: Multiple semantic tokens can map to the same base color
   - Example: `--bg-button-primary-color`, `--link-yellow-color`, `--bg-tab-active-color` all map to `--color-yellow-500`

2. **Semantic Grouping**: Tokens are organized by context (text, background, controls, etc.)

3. **Theme Support**: Tokens support light/dark themes (currently using CSS media queries)

## Best Practices

1. **Always use semantic tokens** in components, not base colors directly
2. **Reference base colors** only when creating new semantic tokens
3. **Use spacing tokens** instead of hardcoded pixel values
4. **Leverage typography tokens** for consistent text styling
5. **Use shadow tokens** for consistent elevation

## Adding New Tokens

1. Add base values to `base/colors.css` if needed
2. Create semantic mappings in `semantic/colors.css`
3. Update `tokens.js` if JavaScript access is needed
4. Document new tokens in this README

## Importing from Figma

When importing components from Figma, ensure that:
1. Figma variables map correctly to our token names
2. Multi-alias mappings are preserved
3. Theme variants are properly handled
4. Typography tokens match Figma text styles

**Source Files:**
- Icon source files (SVG) are stored in `assets/icons/` organized by size
- Illustration source files (PNG/SVG) are stored in `assets/illustrations/`
