import { readFile } from 'node:fs/promises';

try {
  const desiredFile = process.argv[2];
  const filePath = new URL(desiredFile, import.meta.url);
  const content = await readFile(filePath, 'utf8');
  console.log(content);
} catch (error) {
  console.error('Error');
}
