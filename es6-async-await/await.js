import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function fetchOnce() {
  try {
    const msg = await fetch('foo/bar.html');
    console.log(elapsed(), 'fetchOnce:', msg);
  } catch (error) {
    console.error('Error', error);
  }
}

async function fetchSeveral() {
  try {
    const msg = await fetch('foo1/bar.html');
    console.log(elapsed(), 'fetchSeveral1:', msg);
    const msg2 = await fetch('foo2/bar.html');
    console.log(elapsed(), 'fetchSeveral2:', msg2);
    const msg3 = await fetch('foo3/bar.html');
    console.log(elapsed(), 'fetchSeveral3:', msg3);
  } catch (error) {
    console.log('Error', error);
  }
}

async function fetchChained() {
  try {
    const msg1 = await fetch('foo-chain/bar.html');
    console.log(elapsed(), 'fetchChained1:', msg1);
    const msg2 = await fetch(msg1);
    console.log(elapsed(), 'fetchChained2:', msg2);
    const msg3 = await fetch(msg2);
    console.log(elapsed(), 'fetchChained3:', msg3);
  } catch (error) {
    console.error('Error', error);
  }
}

await fetchOnce();
await fetchOnce();
await fetchSeveral();
await fetchChained();
