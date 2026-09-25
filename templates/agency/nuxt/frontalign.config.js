export default {
  jit: {
    scan: [],
    safelist: ['button', 'is-primary', 'is-active'],
    extensions: ['mdx'],
    debug: false,
    concurrency: 50
  },

theme: {
primary: '#2563eb',
body: '#ffffff',
bodyText: '#111827',
font: 'Inter, sans-serif',

    extend: {
      'brand-surface': '#f8fafc',
      'brand-border': '#e2e8f0'
    },

    dark: {
      body: '#0f172a',
      bodyText: '#e5e7eb',

      extend: {
        'brand-surface': '#111827',
        'brand-border': '#334155'
      }
    },

    breakpoints: {
      sm: '640px',
      md: '866px',
      lg: '1140px',
      xl: '1409px',
      '2xl': '1794px'
    }

},

fonts: [
{
family: 'Inter',
weights: '400;500;600;700',
alias: 'inter',
category: 'sans-serif'
}
],

classes: {
'hero-card': {
'background': 'var(--brand-surface)',
'border': '1px solid var(--brand-border)',
'border-radius': '1rem',
'padding': '2rem',

      dark: {
        'background': 'var(--brand-surface)',
        'border-color': 'var(--brand-border)'
      }
    },

    'text-gradient': 'background: linear-gradient(90deg, #2563eb, #60a5fa); -webkit-background-clip: text; color: transparent;'

}
}

