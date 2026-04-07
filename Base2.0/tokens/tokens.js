/**
 * Design Tokens - JavaScript Export
 * 
 * Provides programmatic access to design tokens for use in JavaScript.
 * This mirrors the CSS custom properties structure.
 */

/**
 * Get a CSS custom property value
 * @param {string} propertyName - The CSS custom property name (e.g., '--color-black')
 * @param {Element} element - Optional element to get computed style from (defaults to document.documentElement)
 * @returns {string} The computed value of the CSS custom property
 */
export function getToken(propertyName, element = document.documentElement) {
  return getComputedStyle(element).getPropertyValue(propertyName).trim();
}

/**
 * Set a CSS custom property value
 * @param {string} propertyName - The CSS custom property name
 * @param {string} value - The value to set
 * @param {Element} element - Optional element to set the property on (defaults to document.documentElement)
 */
export function setToken(propertyName, value, element = document.documentElement) {
  element.style.setProperty(propertyName, value);
}

/**
 * Design Tokens Object
 * Provides typed access to token names
 */
export const tokens = {
  colors: {
    base: {
      greyscale: {
        100: '--color-greyscale-100',
        200: '--color-greyscale-200',
        250: '--color-greyscale-250',
        300: '--color-greyscale-300',
        400: '--color-greyscale-400',
        500: '--color-greyscale-500',
        600: '--color-greyscale-600',
        700: '--color-greyscale-700',
        800: '--color-greyscale-800',
        900: '--color-greyscale-900',
        1000: '--color-greyscale-1000',
        1050: '--color-greyscale-1050',
        1100: '--color-greyscale-1100',
        1150: '--color-greyscale-1150',
        1200: '--color-greyscale-1200',
        1300: '--color-greyscale-1300',
      },
      brand: {
        black: '--color-black',
        white: '--color-white',
        yellow: {
          200: '--color-yellow-200',
          300: '--color-yellow-300',
          400: '--color-yellow-400',
          500: '--color-yellow-500',
          600: '--color-yellow-600',
        },
      },
      positive: {
        400: '--color-frog-400',
        600: '--color-frog-600',
        700: '--color-frog-700',
      },
      warning: {
        100: '--color-vitamin-100',
        200: '--color-vitamin-200',
        600: '--color-vitamin-600',
        700: '--color-vitamin-700',
      },
      negative: {
        100: '--color-crimson-100',
        600: '--color-crimson-600',
        700: '--color-crimson-700',
      },
      info: {
        100: '--color-violet-100',
        200: '--color-violet-200',
        300: '--color-violet-300',
        400: '--color-violet-400',
        500: '--color-violet-500',
        600: '--color-violet-600',
        700: '--color-violet-700',
        800: '--color-violet-800',
      },
    },
    semantic: {
      text: {
        primary: '--text-primary-color',
        secondary: '--text-secondary-color',
        disabled: '--text-generic-disabled-color',
        highlight: '--text-highlight-color',
        info: '--text-info-color',
        alert: '--text-alert-color',
        success: '--text-success-color',
      },
      link: {
        primary: '--link-primary-color',
        yellow: '--link-yellow-color',
        ghost: '--link-ghost-color',
      },
      background: {
        fillPrimary: '--bg-fill-primary-color',
        fillSecondary: '--bg-fill-secondary-color',
        cardPrimary: '--bg-card-primary-color',
        cardSecondary: '--bg-card-secondary-color',
        buttonPrimary: '--bg-button-primary-color',
        buttonSecondary: '--bg-button-secondary-color',
      },
    },
  },
  typography: {
    fontFamily: {
      display: '--font-family-display',
      text: '--font-family-text',
      textCond: '--font-family-text-cond',
    },
    fontWeight: {
      regular: '--font-weight-regular',
      medium: '--font-weight-medium',
      bold: '--font-weight-bold',
      heavy: '--font-weight-heavy',
    },
    headline: {
      h0: {
        size: '--font-headline-h0-size',
        lineHeight: '--font-headline-h0-lineHeight',
        letterSpacing: '--font-headline-h0-letterSpacing',
        weight: '--font-headline-h0-weight',
        family: '--font-headline-h0-family',
      },
      h1: {
        size: '--font-headline-h1-size',
        lineHeight: '--font-headline-h1-lineHeight',
        letterSpacing: '--font-headline-h1-letterSpacing',
        weight: '--font-headline-h1-weight',
        family: '--font-headline-h1-family',
      },
      h2: {
        size: '--font-headline-h2-size',
        lineHeight: '--font-headline-h2-lineHeight',
        letterSpacing: '--font-headline-h2-letterSpacing',
        weight: '--font-headline-h2-weight',
        family: '--font-headline-h2-family',
      },
      h3: {
        size: '--font-headline-h3-size',
        lineHeight: '--font-headline-h3-lineHeight',
        letterSpacing: '--font-headline-h3-letterSpacing',
        weight: '--font-headline-h3-weight',
        family: '--font-headline-h3-family',
      },
    },
    title: {
      t1: {
        size: '--font-title-t1-size',
        lineHeight: '--font-title-t1-lineHeight',
        letterSpacing: '--font-title-t1-letterSpacing',
        weight: '--font-title-t1-weight',
        family: '--font-title-t1-family',
      },
      t2: {
        size: '--font-title-t2-size',
        lineHeight: '--font-title-t2-lineHeight',
        letterSpacing: '--font-title-t2-letterSpacing',
        weight: '--font-title-t2-weight',
        family: '--font-title-t2-family',
      },
      t3: {
        size: '--font-title-t3-size',
        lineHeight: '--font-title-t3-lineHeight',
        letterSpacing: '--font-title-t3-letterSpacing',
        weight: '--font-title-t3-weight',
        family: '--font-title-t3-family',
      },
    },
    body: {
      b1: {
        size: '--font-body-b1-size',
        lineHeight: '--font-body-b1-lineHeight',
        letterSpacing: '--font-body-b1-letterSpacing',
        weight: '--font-body-b1-weight',
        family: '--font-body-b1-family',
      },
      b2: {
        size: '--font-body-b2-size',
        lineHeight: '--font-body-b2-lineHeight',
        letterSpacing: '--font-body-b2-letterSpacing',
        weight: '--font-body-b2-weight',
        family: '--font-body-b2-family',
      },
      b3: {
        size: '--font-body-b3-size',
        lineHeight: '--font-body-b3-lineHeight',
        letterSpacing: '--font-body-b3-letterSpacing',
        weight: '--font-body-b3-weight',
        family: '--font-body-b3-family',
      },
    },
    caption: {
      c1: {
        size: '--font-caption-c1-size',
        lineHeight: '--font-caption-c1-lineHeight',
        letterSpacing: '--font-caption-c1-letterSpacing',
        weight: '--font-caption-c1-weight',
        family: '--font-caption-c1-family',
      },
      c2: {
        size: '--font-caption-c2-size',
        lineHeight: '--font-caption-c2-lineHeight',
        letterSpacing: '--font-caption-c2-letterSpacing',
        weight: '--font-caption-c2-weight',
        family: '--font-caption-c2-family',
      },
      c3: {
        size: '--font-caption-c3-size',
        lineHeight: '--font-caption-c3-lineHeight',
        letterSpacing: '--font-caption-c3-letterSpacing',
        weight: '--font-caption-c3-weight',
        family: '--font-caption-c3-family',
      },
    },
  },
  shadows: {
    soft: {
      sBothThemes: '--shadow-soft-s-both-themes',
      sLightTheme: '--shadow-soft-s-light-theme',
      mBothThemes: '--shadow-soft-m-both-themes',
      lBothThemes: '--shadow-soft-l-both-themes',
    },
    medium: {
      sBothThemes: '--shadow-medium-s-both-themes',
    },
    strong: {
      sBothThemesBottom: '--shadow-strong-s-both-themes-bottom',
    },
  },
  borderRadius: {
    small: {
      xs: '--border-radius-small-xs',
      s: '--border-radius-small-s',
      m: '--border-radius-small-m',
      l: '--border-radius-small-l',
      xl: '--border-radius-small-xl',
    },
    medium: {
      s: '--border-radius-medium-s',
      m: '--border-radius-medium-m',
      l: '--border-radius-medium-l',
    },
    large: {
      s: '--border-radius-large-s',
      m: '--border-radius-large-m',
      l: '--border-radius-large-l',
    },
    extralarge: {
      s: '--border-radius-extralarge-s',
      m: '--border-radius-extralarge-m',
      l: '--border-radius-extralarge-l',
    },
    full: '--border-radius-full',
  },
  spacing: {
    0.5: '--space-0-5',
    1: '--space-1',
    1.5: '--space-1-5',
    2: '--space-2',
    3: '--space-3',
    4: '--space-4',
    5: '--space-5',
    6: '--space-6',
    7: '--space-7',
    8: '--space-8',
    10: '--space-10',
    12: '--space-12',
    14: '--space-14',
    16: '--space-16',
    20: '--space-20',
  },
};

/**
 * Helper function to get token value by path
 * @param {string} path - Dot-separated path (e.g., 'colors.semantic.text.primary')
 * @returns {string} The token property name
 */
export function getTokenPath(path) {
  const keys = path.split('.');
  let value = tokens;
  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      throw new Error(`Token path "${path}" not found`);
    }
  }
  return value;
}
