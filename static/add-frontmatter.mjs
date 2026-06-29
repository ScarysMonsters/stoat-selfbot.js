import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const apiDir = join(import.meta.dirname, '..', 'docs', 'content', 'docs', 'api');

function walk(dir) {
  const files = readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = join(dir, file.name);
    if (file.isDirectory()) {
      walk(fullPath);
    } else if (file.name.endsWith('.md')) {
      const content = readFileSync(fullPath, 'utf8');
      if (content.startsWith('---')) continue;
      const firstLine = content.match(/^# (.+)/m);
      let title = firstLine ? firstLine[1] : file.name.replace('.md', '');
      title = title.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      writeFileSync(fullPath, `---\ntitle: "${title}"\n---\n\n${content}`);
    }
  }
}

walk(apiDir);
console.log('Frontmatter added to API docs');
