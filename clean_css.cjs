const fs = require('fs');
const path = '/home/assistent/workspace/tmp/zito-redesign-c-exp2/src/routes/+page.svelte';
let code = fs.readFileSync(path, 'utf-8');

code = code.replace(
  /\s*figcaption \{[\s\S]*?\}\s*figcaption span \{[\s\S]*?\}/,
  ''
);

fs.writeFileSync(path, code);
console.log('CSS cleaned.');
