const fs = require('fs');

let page = fs.readFileSync('src/routes/+page.svelte', 'utf8');

// We want to add these rules inside the <style> block.
const cssToAdd = `
  .hero-content {
    grid-column: 1;
    grid-row: 1;
  }
  .portrait-card {
    grid-column: 2;
    grid-row: 1;
  }
  .hero-stats {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`;

page = page.replace('.hero-stats {', cssToAdd + '\n  .hero-stats {');

// Also reset for mobile
const mobileReset = `
    .hero-content, .portrait-card, .hero-stats {
      grid-column: auto;
      grid-row: auto;
    }
`;

page = page.replace('.hero,', mobileReset + '\n    .hero,');

fs.writeFileSync('src/routes/+page.svelte', page);
console.log('Done CSS');
