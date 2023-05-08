import { writeFile, readFile } from 'node:fs/promises';

const sourceFile = process.argv[2];
const destination = process.argv[3];

async function processFiles() {
  try {
    const content = await readFile(sourceFile, 'utf8');
    await writeFile(destination, content + '\n');
    console.log(content);
  } catch (error) {
    console.error('Error');
  }
}

await processFiles();
