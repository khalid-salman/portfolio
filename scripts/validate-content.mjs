import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);

const contentFiles = [
  { file: 'content/site.json', schema: 'schemas/site.schema.json' },
  { file: 'content/impact.json', schema: 'schemas/impact.schema.json' },
  { file: 'content/projects.json', schema: 'schemas/projects.schema.json' },
  { file: 'content/skills.json', schema: 'schemas/skills.schema.json' },
  { file: 'content/experience.json', schema: 'schemas/experience.schema.json' },
  { file: 'content/certifications.json', schema: 'schemas/certifications.schema.json' },
  { file: 'content/education.json', schema: 'schemas/education.schema.json' },
  { file: 'content/technologies.json', schema: 'schemas/technologies.schema.json' },
];

function loadJson(relativePath) {
  const fullPath = join(root, relativePath);
  return JSON.parse(readFileSync(fullPath, 'utf-8'));
}

function formatErrors(errors) {
  return errors
    .map((e) => `  - ${e.instancePath || '/'}: ${e.message}`)
    .join('\n');
}

let failed = false;

for (const { file, schema: schemaPath } of contentFiles) {
  const schema = loadJson(schemaPath);
  const data = loadJson(file);
  const validate = ajv.compile(schema);

  if (!validate(data)) {
    console.error(`✗ ${file}\n${formatErrors(validate.errors ?? [])}`);
    failed = true;
  } else {
    console.log(`✓ ${file}`);
  }
}

const projects = loadJson('content/projects.json');
const slugs = new Set();

for (const project of projects) {
  if (slugs.has(project.slug)) {
    console.error(`✗ Duplicate project slug: ${project.slug}`);
    failed = true;
  }
  slugs.add(project.slug);

  const diagramPath = join(root, 'public', project.diagram.path.replace(/^\//, ''));
  if (!existsSync(diagramPath)) {
    console.error(
      `✗ Missing diagram for project "${project.slug}": expected public${project.diagram.path}`,
    );
    failed = true;
  }

  if (project.screenshot) {
    const screenshotPath = join(root, 'public', project.screenshot.path.replace(/^\//, ''));
    if (!existsSync(screenshotPath)) {
      console.error(
        `✗ Missing screenshot for project "${project.slug}": expected public${project.screenshot.path}`,
      );
      failed = true;
    }
  }

  if (project.architectureDiagram) {
    const archPath = join(root, 'public', project.architectureDiagram.path.replace(/^\//, ''));
    if (!existsSync(archPath)) {
      console.error(
        `✗ Missing architecture diagram for project "${project.slug}": expected public${project.architectureDiagram.path}`,
      );
      failed = true;
    }
  }
}

const technologiesDoc = loadJson('content/technologies.json');
for (const tech of technologiesDoc.technologies) {
  const iconPath = join(root, 'public', tech.icon.replace(/^\//, ''));
  if (!existsSync(iconPath)) {
    console.error(`✗ Missing tech icon for "${tech.slug}": expected public${tech.icon}`);
    failed = true;
  }
}

if (!failed) {
  console.log('✓ diagram files verified');
  console.log('✓ tech icon files verified');
  console.log('Content validation passed.');
  process.exit(0);
}

console.error('\nContent validation failed.');
process.exit(1);
