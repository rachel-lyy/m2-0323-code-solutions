import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  const msg = await fetch('foo', true);
  console.log(elapsed(), 'throwOnce:', msg);
}

async function throwSeveral() {
  const msg = await fetch('foo1', true);
  console.log(elapsed(), 'throwSeveral1:', msg);
  const msg2 = await fetch('foo3', true);
  console.log(elapsed(), 'throwSeveral2:', msg2);
  const msg3 = await fetch('foo3', true);
  console.log(elapsed(), 'throwSeveral2:', msg3);
}

async function throwChained() {
  const msg1 = await fetch('foo-chain', true);
  console.log(elapsed(), 'throwChained1:', msg1);
  const msg2 = await fetch(msg1, true);
  console.log(elapsed(), 'throwChained2:', msg2);
  const msg3 = await fetch(msg2, true);
  console.log(elapsed(), 'throwChained3:', msg3);
}

try {
  await throwOnce();
} catch (error) {
  console.log(elapsed(), 'throwOnce Error:', error.message);
}

try {
  await throwSeveral();
} catch (error) {
  console.log(elapsed(), 'throwSeveral Error:', error.message);
}

try {
  await throwChained();
} catch (error) {
  console.log(elapsed(), 'throwChained Error:', error.message);
}
