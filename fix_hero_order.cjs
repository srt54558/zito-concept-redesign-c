const fs = require('fs');

let page = fs.readFileSync('src/routes/+page.svelte', 'utf8');

// Find the section hero and reorder
// We can just use a regex replacement to swap .hero-stats and .portrait-card.

// Actually, let's see exactly what's inside <section class="hero">.
// It starts around line 31 and ends around line 63.
