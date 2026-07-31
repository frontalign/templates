# create-frontalign

Official project creation CLI for the [FrontAlign](https://frontalign.dev) UI framework.

Scaffold a new FrontAlign project in seconds, with your choice of starter template and framework.

## Quick Start

```bash
npx @frontalign/create-app my-app --template agency
```

That's it — `cd my-app` and start building.

## Usage

```bash
npx @frontalign/create-app <project-name> --template <template> [--framework <framework>]
```

### Options

| Flag | Required | Description |
|---|---|---|
| `--template` | Yes | Starter template to use: `agency`, `blog` |
| `--framework` | No | Target framework: `nextjs` (default: `nextjs`) |
| `--help`, `-h` | No | Show usage help |

> **Note:** Next.js is currently the only supported framework. Support for additional frameworks (starting with Vue) is planned for future releases.

### Examples

```bash
# Agency starter (Next.js, default)
npx @frontalign/create-app my-site --template agency

# Blog starter (Next.js, default)
npx @frontalign/create-app my-blog --template blog
```

## Templates

- **agency** — A starter geared towards agency/portfolio-style landing pages.
- **blog** — A starter set up for content-driven blog sites.

Both templates are built on Next.js. Additional framework flavors (like Vue) are on the roadmap.

## What Happens When You Run It

1. Validates your project name, template, and framework choice.
2. Copies the selected template into a new folder named after your project.
3. Replaces placeholders (like the project name) inside the generated files.
4. Automatically runs `npm install` (or `pnpm`/`yarn` if detected).
5. Prints the next steps to get your dev server running.

## Requirements

- Node.js >= 18

## Learn More

Visit [frontalign.dev](https://frontalign.dev) for full documentation on the FrontAlign framework, components, and customization options.

## License

MIT