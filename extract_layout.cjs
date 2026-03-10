const fs = require('fs');

let page = fs.readFileSync('src/routes/+page.svelte', 'utf8');

// 1. Extract <style>
const styleMatch = page.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) {
  console.log("No style block found.");
  process.exit(1);
}
let css = styleMatch[1];
fs.writeFileSync('src/app.css', css);

// 2. Remove <style> from +page.svelte
page = page.replace(/<style>[\s\S]*?<\/style>/, '');

// 3. Update +layout.svelte to include app.css
let layout = fs.readFileSync('src/routes/+layout.svelte', 'utf8');
layout = layout.replace('<script lang="ts">', `<script lang="ts">\n\timport '../app.css';`);
fs.writeFileSync('src/routes/+layout.svelte', layout);

// 4. Extract Header and Footer into layout? Wait, if we do that, we need to extract the parts.
// Actually, maybe we can just create the legal pages with the <div class="page-shell">, <header>, <footer> and NO <style> because app.css is now global!
// Svelte styles aren't global by default if in <style>, but wait: we put it in app.css, so it IS global!
// This is perfectly fine and standard SvelteKit way.
// Let's just leave <header> and <footer> in +page.svelte OR move them to +layout.svelte.
// Moving to layout is cleaner.
const headerMatch = page.match(/<div class="page-shell">\s*<header class="site-header">[\s\S]*?<\/header>/);
const footerMatch = page.match(/<footer class="site-footer">[\s\S]*?<\/footer>\s*<\/div>/);

if (headerMatch && footerMatch) {
  const header = headerMatch[0];
  const footer = footerMatch[0];
  
  // Replace in layout
  layout = layout.replace('{@render children()}', `${header}\n\t{@render children()}\n${footer}`);
  fs.writeFileSync('src/routes/+layout.svelte', layout);
  
  // Remove from page
  page = page.replace(headerMatch[0], '');
  page = page.replace(footerMatch[0], '');
  
  // Also remove the <div class="page-shell"> closing tag? Wait, footerMatch included </div>.
}

fs.writeFileSync('src/routes/+page.svelte', page);

console.log("Layout extracted");
