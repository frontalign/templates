# FrontAlign Templates

A growing collection of free, ready-to-use HTML templates built with the [FrontAlign](https://www.frontalign.dev) framework. Each template is minimal, responsive, and easy to customize.

---

## Getting Started

### 1. Clone a Template

```bash
git clone https://github.com/frontalign/templates.git
cd templates/<template-name>
```

### 2. Install FrontAlign

**Via CDN** — add to your `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/frontalign/dist/frontalign.min.css">
<script src="https://cdn.jsdelivr.net/npm/frontalign/dist/frontalign.min.js" defer></script>
```

**Via npm:**

```bash
npm install frontalign
```

### 3. Initialize

```javascript
const fa = new FrontAlign();
```

That's it. FrontAlign silently takes over — smart observers watch the DOM, lazy-load components as they appear, and wire everything automatically.

---

## Customization

Each template uses CSS variables for easy theming. Override them in your own stylesheet:

```css
:root {
    --primary: oklch(55% 0.2 250);
    --font-family: 'Inter', sans-serif;
    --border-radius: 8px;
}
```

Or pass a config object when initializing:

```javascript
const fa = new FrontAlign({
    theme: {
        primary: 'oklch(55% 0.2 250)',
        spaceMd: '1rem',
        spaceXl: '2rem',
    },
    fonts: [
        {
            family: 'Inter',
            alias: 'body',
            category: 'sans-serif',
            weights: '400,500,600'
        }
    ],
    classes: {
        'code-block': {
            'background': '#f4f4f5',
            'color': '#1a1a2e',
            dark: {
                'background': '#0d0d0d',
                'color': '#e4e4e7',
            }
        }
    }
});
```

---

## File Structure

```
templates/
├── template-name/
│   ├── index.html
│   └── assets/
│       └── images/
```

---

## License

Templates are released under the [MIT License](https://www.frontalign.dev/license).
Feel free to use them in personal and commercial projects.

---

Made with love by [Eyruz Badalzada](https://eyruz.com) · [frontalign.dev](https://www.frontalign.dev)
