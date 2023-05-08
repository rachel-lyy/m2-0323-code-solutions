import { writeFile } from 'node:fs/promises';

async function randomNumGenerator() {
  try {
    const randomNumber = Math.random();
    await writeFile('random.txt', randomNumber + '\n');
  } catch (error) {
    console.error('Error');
  }
}

await randomNumGenerator();
