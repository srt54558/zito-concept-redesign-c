const fs = require('fs');

let page = fs.readFileSync('src/routes/+page.svelte', 'utf8');

// Task 2: Nav Bar Logo Fix
// Remove <span class="logo-text">Zito Concept</span> (or similar)
page = page.replace(/<span class="logo-text">Zito Concept<\/span>/g, '');

// Also remove CSS making the logo rounded.
page = page.replace(/\.logo-mark\s*\{[^}]+\}/, '.logo-mark {\n    height: 40px;\n    width: auto;\n  }');
// Let's refine the replacement using regex if needed, or I'll just see what it currently is.

fs.writeFileSync('src/routes/+page.svelte', page);
console.log('Done script');
