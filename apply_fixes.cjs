const fs = require('fs');
const path = '/home/assistent/workspace/tmp/zito-redesign-c-exp2/src/routes/+page.svelte';
let code = fs.readFileSync(path, 'utf-8');

// Fix 1
code = code.replace(
  '<h2>Ziel ist nicht mehr Gespräch. Ziel ist wieder Führbarkeit.</h2>',
  '<h2>Ziel ist nicht mehr Abstimmung. Ziel ist wieder klare Führung.</h2>'
);

// Fix 2: Remove caption
code = code.replace(
  /<figcaption>[\s\S]*?<\/figcaption>/,
  ''
);

// Fix 2: CSS adjustment for hero-stats
// Separate hero-stats from mini-grid
code = code.replace(
  /\.hero-stats,\s*\.mini-grid,\s*\.case-grid \{/,
  '.mini-grid,\n  .case-grid {'
);

code = code.replace(
  /\.hero-stats article,\s*\.mini-grid article,\s*\.case-grid article,\s*\.check-notes article \{/,
  '.mini-grid article,\n  .case-grid article,\n  .check-notes article {'
);

code = code.replace(
  /\.hero-stats strong,\s*\.mini-grid strong \{/,
  '.mini-grid strong {'
);

code = code.replace(
  /\.hero-stats span,\s*\.mini-grid span \{/,
  '.mini-grid span {'
);

const customHeroStatsCSS = `
  .hero-stats {
    margin-top: 0.5rem;
    display: flex;
    gap: 1rem;
    grid-column: 1 / -1;
    flex-wrap: wrap;
  }
  .hero-stats article {
    flex: 1 1 150px;
    padding: 0.8rem 1rem;
    border-radius: 0.7rem;
    background: transparent;
    border: none;
    border-left: 3px solid oklch(0.8 0.016 84);
  }
  .hero-stats strong {
    display: block;
    font-size: 0.95rem;
    margin-bottom: 0.1rem;
    color: oklch(0.2 0.03 72);
  }
  .hero-stats span {
    font-size: 0.85rem;
    color: oklch(0.4 0.02 80);
  }
`;

code = code.replace(
  /(\.mini-grid,\s*\.case-grid \{)/,
  customHeroStatsCSS + '\n  $1'
);

// Move hero-stats on mobile under the text but not under the image. Actually, DOM order is: text, image, stats.
// Let's change DOM order: text, stats, image in the hero section to keep it clean and out of the way.
code = code.replace(
  /(<div class="hero-actions">[\s\S]*?<\/div>\s*<\/div>)\s*<figure class="portrait-card">([\s\S]*?)<\/figure>\s*<div class="hero-stats">([\s\S]*?)<\/div>/,
  `$1

      <div class="hero-stats">$3</div>

      <figure class="portrait-card">$2</figure>`
);

// Fix 3: Add Trust Block
const trustBlock = `
    <section class="section trust-person">
      <div>
        <h2>Warum Unternehmen Zito Concept holen</h2>
        <p class="section-intro">Nicht für Motivationsimpulse, sondern wenn Führung im Alltag wieder klar werden muss. Zito Concept arbeitet mit realen Fällen aus dem Führungsalltag, benennt Spannungen offen und übersetzt sie in klare Zuständigkeiten, Entscheidungen und verbindliche nächste Schritte.</p>
      </div>
    </section>
`;

code = code.replace(
  /(<\/section>\s*)(<section class="section challenge">)/,
  `$1${trustBlock}\n    $2`
);

fs.writeFileSync(path, code);
console.log('Fixes applied.');
