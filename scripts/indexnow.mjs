// Submit all sitemap URLs to Bing via IndexNow. Run AFTER the site is deployed:
//   npm run build && npm run indexnow
import { readFileSync, readdirSync } from 'node:fs';

const HOST = 'jichangtuijan.top';
const KEY = '43186262f3952604ca8fae3c20bbfed4';
const dist = new URL('../dist/', import.meta.url);

const files = readdirSync(dist).filter((f) => /^sitemap-\d+\.xml$/.test(f));
const urls = files.flatMap((f) =>
  [...readFileSync(new URL(f, dist), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
);

if (urls.length === 0) {
  console.error('No URLs found in dist/sitemap-*.xml. Run "npm run build" first.');
  process.exit(1);
}

const res = await fetch('https://www.bing.com/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`Submitted ${urls.length} URLs -> HTTP ${res.status}`);
