# FrontAlign Templates

A collection of ready-to-use HTML templates built with the FrontAlign framework. Each template is minimal, responsive, and easy to customize.

## Available Templates

### Agency
A modern agency landing page template.

**Sections included:**
- Navbar with responsive toggle
- Hero section with gradient background
- Services section with icon cards
- Client logo marquee
- Contact section
- Footer

## Getting Started

### 1. Download

Clone the repository and navigate to the template you want:

```bash
git clone https://github.com/frontalign/templates/{template}.git
cd frontalign/templates/{template}
```

### 2. Install FrontAlign

Via CDN — add to your `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/frontalign/dist/frontalign.min.css">
<script src="https://cdn.jsdelivr.net/npm/frontalign/dist/frontalign.min.js" defer></script>
```

Via npm:

```bash
npm install frontalign
```

### 3. Initialize

```javascript
const fa = new FrontAlign();
```

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
        borderRadius: '8px'
    },
    fonts: [
        {
            family: 'Inter',
            alias: 'body',
            category: 'sans-serif',
            weights: '400,500,600'
        }
    ]
});
```

## File Structure

```
templates/
├── agency-starter/
│   ├── index.html
│   ├── assets/
│   │   └── images

```

## License

Templates are released under the [MIT License](https://www.frontalign.dev/license).  
Feel free to use them in personal and commercial projects.

---

Made with love by [Eyruz Badalzada](https://eyruz.com) · [frontalign.dev](https://www.frontalign.dev)
