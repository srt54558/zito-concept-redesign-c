const fs = require('fs');
const path = '/home/assistent/workspace/tmp/zito-redesign-c-exp2/src/routes/+page.svelte';
let code = fs.readFileSync(path, 'utf-8');

// Just in case, re-apply the strict exact text from the latest message
code = code.replace(
  'ob Zusammenarbeit aktuell sinnvoll ist.',
  'ob eine Zusammenarbeit aktuell sinnvoll ist.'
);

// Ensure "Für wen passend" is truly gone (I already removed it, but verifying)
code = code.replace(/<article>\s*<h3>Für wen passend<\/h3>[\s\S]*?<\/article>/g, '');

fs.writeFileSync(path, code);
console.log('Final polish applied.');
