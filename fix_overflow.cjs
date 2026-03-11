const fs = require('fs');
let css = fs.readFileSync('src/app.css', 'utf8');

// comprehensive overflow fixes
const mobileFixes = `

/* OVERFLOW ROBUSTNESS FOR MOBILE */
* {
  min-width: 0; /* Prevents flex/grid blowouts */
  word-wrap: break-word;
  overflow-wrap: break-word;
}

body, html {
  max-width: 100vw;
  overflow-x: hidden !important;
}

.page-shell {
  overflow-x: clip; /* Contains absolute/relative overflow */
}

/* Ensure padding doesn't push elements out */
.proof-quote {
  padding-left: clamp(1rem, 5vw, 2.5rem);
  padding-right: clamp(1rem, 5vw, 2.5rem);
}

.hero, .section, .vorher-nachher, .vn-card, .portrait-card, .step-card {
  padding-left: clamp(1rem, 5vw, 2rem) !important;
  padding-right: clamp(1rem, 5vw, 2rem) !important;
}

/* Fix any grid/flex blowout */
.hero, .mini-grid, .case-grid, .steps-grid, .check-layout, .hero-actions, .vorher-nachher {
  max-width: 100%;
}

@media (max-width: 480px) {
  .hero-actions {
    display: flex !important;
    flex-direction: column;
    width: 100%;
  }
  .hero-actions .btn {
    width: 100%;
    margin: 0;
  }
}
`;

if (!css.includes('OVERFLOW ROBUSTNESS FOR MOBILE')) {
  css += mobileFixes;
  fs.writeFileSync('src/app.css', css);
}

