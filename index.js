#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const c = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

const log = {
  info: (msg) => console.log(`${c.cyan}ℹ${c.reset}  ${msg}`),
  success: (msg) => console.log(`${c.green}✔${c.reset}  ${msg}`),
  warn: (msg) => console.log(`${c.yellow}⚠${c.reset}  ${msg}`),
  error: (msg) => console.error(`${c.red}✖${c.reset}  ${msg}`),
  step: (msg) => console.log(`${c.gray}›${c.reset}  ${msg}`),
  title: (msg) => console.log(`\n${c.bold}${c.cyan}${msg}${c.reset}\n`),
};

const VALID_TEMPLATES = ["agency", "blog"];
const VALID_FRAMEWORKS = ["html", "nextjs"];
const DEFAULT_FRAMEWORK = "nextjs";

/**
 * Prints usage instructions and available options to the console.
 */
function showHelp() {
  console.log(`
${c.bold}${c.cyan}create-frontalign${c.reset} — FrontAlign Framework CLI

${c.bold}Usage:${c.reset}
  npx create-frontalign <project-name> --template <template> [--framework <framework>]

${c.bold}Options:${c.reset}
  --template    ${c.red}(required)${c.reset}  ${VALID_TEMPLATES.join(" | ")}
  --framework   ${c.gray}(optional)${c.reset}  ${VALID_FRAMEWORKS.join(" | ")}  [default: html]
  --help        Show this help message

${c.bold}Examples:${c.reset}
  npx create-frontalign my-site --template landing
  npx create-frontalign my-site --template landing --framework nextjs
  npx create-frontalign my-app  --template auth
  npx create-frontalign my-app  --template auth --framework nextjs
`);
}

/**
 * Parses CLI arguments from process.argv.
 * Extracts project name, --template, and --framework flags.
 * Exits early if --help or -h is passed.
 */
function parseArgs(argv) {
  const args = argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    showHelp();
    process.exit(0);
  }

  const projectName = args.find((a) => !a.startsWith("--"));

  const templateIdx = args.indexOf("--template");
  const template = templateIdx !== -1 ? args[templateIdx + 1] : null;

  const frameworkIdx = args.indexOf("--framework");
  const framework = frameworkIdx !== -1 ? args[frameworkIdx + 1] : DEFAULT_FRAMEWORK;

  return { projectName, template, framework };
}

/**
 * Validates parsed CLI arguments.
 * Checks that project name, template, and framework are all valid.
 */
function validate({ projectName, template, framework }) {
  const errors = [];

  if (!projectName) {
    errors.push("Project name is required.\n  Example: npx create-frontalign my-app --template landing");
  } else if (!/^[a-zA-Z0-9-_]+$/.test(projectName)) {
    errors.push(`"${projectName}" is not a valid project name. Use only letters, numbers, hyphens, and underscores.`);
  }

  if (!template) {
    errors.push(
      `--template flag is required.\n  Available templates: ${VALID_TEMPLATES.map((t) => c.cyan + t + c.reset).join(", ")}`
    );
  } else if (!VALID_TEMPLATES.includes(template)) {
    errors.push(
      `"${template}" is not a valid template.\n  Available templates: ${VALID_TEMPLATES.map((t) => c.cyan + t + c.reset).join(", ")}`
    );
  }

  if (!VALID_FRAMEWORKS.includes(framework)) {
    errors.push(
      `"${framework}" is not a valid framework.\n  Available frameworks: ${VALID_FRAMEWORKS.map((f) => c.cyan + f + c.reset).join(", ")}`
    );
  }

  return errors;
}

/**
 * Recursively copies a directory from src to dest.
 * Creates destination directory if it does not exist.
 */
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Recursively replaces all occurrences of {{PROJECT_NAME}} placeholder
 * in supported text files within the given directory.
 */
function replacePlaceholders(dir, projectName) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      replacePlaceholders(fullPath, projectName);
    } else {
      const textExtensions = [".json", ".html", ".css", ".js", ".ts", ".tsx", ".jsx", ".md"];
      if (textExtensions.includes(path.extname(entry.name))) {
        let content = fs.readFileSync(fullPath, "utf-8");
        content = content.replaceAll("{{PROJECT_NAME}}", projectName);
        fs.writeFileSync(fullPath, content, "utf-8");
      }
    }
  }
}

/**
 * Runs `npm install` inside the given project directory.
 * Used automatically for Next.js templates.
 */
function installDeps(projectDir) {
  try {
    log.step("Installing packages...");
    execSync("npm install", { cwd: projectDir, stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

/**
 * Detects the preferred package manager available on the system.
 * Checks for pnpm and yarn before falling back to npm.
 */
function detectPackageManager() {
  try {
    execSync("pnpm --version", { stdio: "pipe" });
    return "pnpm";
  } catch {}
  try {
    execSync("yarn --version", { stdio: "pipe" });
    return "yarn";
  } catch {}
  return "npm";
}

async function main() {
  log.title("⚡ FrontAlign CLI");

  const { projectName, template, framework } = parseArgs(process.argv);

  const errors = validate({ projectName, template, framework });
  if (errors.length > 0) {
    errors.forEach((e) => log.error(e));
    console.log(`\n${c.gray}For help: npx create-frontalign --help${c.reset}\n`);
    process.exit(1);
  }

  const targetDir = path.resolve(process.cwd(), projectName);

  const templateDir = path.join(__dirname, "templates", template, framework);

  if (!fs.existsSync(templateDir)) {
    log.error(`Template not found: ${c.cyan}${template}/${framework}${c.reset}`);
    log.error(`Expected path: ${templateDir}`);
    process.exit(1);
  }

  if (fs.existsSync(targetDir)) {
    log.error(`A folder named "${projectName}" already exists.`);
    log.error("Choose a different name or remove the existing folder.");
    process.exit(1);
  }

  log.info(`Template:   ${c.cyan}${template}${c.reset}`);
  log.info(`Framework:  ${c.cyan}${framework}${c.reset}`);
  log.info(`Directory:  ${c.cyan}${targetDir}${c.reset}`);
  console.log();

  log.step("Copying files...");
  copyDir(templateDir, targetDir);
  log.success("Files copied.");

  replacePlaceholders(targetDir, projectName);

  // For Next.js templates, attempt automatic dependency installation
  let depsInstalled = false;
  if (framework === "nextjs") {
    depsInstalled = installDeps(targetDir);
    if (depsInstalled) {
      log.success("Packages installed.");
    } else {
      log.warn("Packages could not be installed automatically. Run the install command manually.");
    }
  }

  // Print next steps based on chosen framework
  const pm = detectPackageManager();
  console.log(`\n${c.green}${c.bold}✔ Project created successfully!${c.reset}\n`);
  console.log(`${c.bold}Next steps:${c.reset}`);
  console.log(`  ${c.cyan}cd ${projectName}${c.reset}`);

  if (framework === "html") {
    console.log(`  Open ${c.cyan}index.html${c.reset} in your browser`);
  } else {
    if (!depsInstalled) {
      console.log(`  ${c.cyan}${pm} install${c.reset}`);
    }
    console.log(`  ${c.cyan}${pm} run dev${c.reset}`);
  }

  console.log();
}

main().catch((err) => {
  log.error(`Unexpected error: ${err.message}`);
  process.exit(1);
});