const fs = require('fs');
const path = './src/app.css';
let css = fs.readFileSync(path, 'utf8');

// 1. Fix mobile overflow properly
// Check if .page-shell has paddings causing 100vw to break:
css = css.replace(/max-width: 1080px;/g, 'max-width: 1080px;\n    width: 100%;');

// Ensure body has box-sizing and 0 margins
if (!css.includes('margin: 0;')) {
    css = css.replace(/body\s*\{/, 'body {\n    margin: 0;\n    padding: 0;');
}

// Ensure the root element doesn't exceed screen width
css = css.replace(/\/\* mobile overflow fixes \*\/[\s\S]*/, `/* mobile overflow fixes */
html, body {
  overflow-x: hidden !important;
  max-width: 100vw;
  width: 100%;
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.page-shell,
.hero,
.section,
.check-layout,
.steps-grid,
.mini-grid,
.case-grid,
.hero-stats,
.deliverables ul,
.deliverables li,
form,
input,
textarea,
button {
  max-width: 100%;
  width: 100%;
}

.mini-grid, .case-grid, .hero-stats {
  grid-template-columns: minmax(0, 1fr) !important;
}

@media (min-width: 600px) {
  .mini-grid, .case-grid, .hero-stats {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
  }
}

img, svg, video, iframe, embed, object {
  max-width: 100%;
  height: auto;
}

/* Fix header monotony */
.site-header {
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid rgba(66, 124, 146, 0.15) !important;
  border-radius: 12px !important;
  box-shadow: 0 4px 20px -10px rgba(66, 124, 146, 0.15) !important;
}

.logo-text {
  color: #427c92 !important;
}

.desktop-nav a {
  color: #555 !important;
}

.desktop-nav a:hover {
  color: #427c92 !important;
}

.header-cta {
  border-color: #427c92 !important;
  color: #427c92 !important;
}

.header-cta:hover {
  background: #427c92 !important;
  color: white !important;
}
`);

// If we missed replacing it (in case regex failed), just append
if (!css.includes('html, body {')) {
  css += `\n/* mobile overflow fixes */\nhtml, body {\n  overflow-x: hidden !important;\n  max-width: 100vw;\n}\n`;
}

fs.writeFileSync(path, css);
console.log('Done');
