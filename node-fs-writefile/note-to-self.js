import { writeFile } from 'node:fs/promises';

async function writeToFile() {
  try {
    const statement = process.argv[2];
    await writeFile('note.txt', statement + '\n');
  } catch (error) {
    console.error('Error');
  }
}

await writeToFile();
