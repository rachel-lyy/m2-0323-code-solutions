import { readFile } from 'node:fs/promises';

async function getFiles(desiredFile) {
  try {
    const filePath = new URL(desiredFile, import.meta.url);
    const content = await readFile(filePath, 'utf8');
    console.log(content);
  } catch (error) {
    console.error('Error');
  }
}

async function concatFiles(files) {
  const listOfFiles = files.map(file => getFiles(file));
  const allFiles = await Promise.all(listOfFiles);
  return allFiles.join('\n');
}

const files = process.argv.slice(1);
const allFiles = await concatFiles(files);
console.log(allFiles);
