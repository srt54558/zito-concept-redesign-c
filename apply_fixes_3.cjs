const fs = require('fs');
const path = '/home/assistent/workspace/tmp/zito-redesign-c-exp2/src/routes/+page.svelte';
let code = fs.readFileSync(path, 'utf-8');

// 5B
code = code.replace(
  'Innerhalb von 6 bis 12 Wochen wird sichtbar, wo Entscheidungen stecken, welche Rollen unklar sind und welche Konflikte die Zusammenarbeit blockieren. Daraus entstehen klare Regeln, belastbare Zuständigkeiten und konkrete Vereinbarungen für den Führungsalltag.',
  'Innerhalb von 6 bis 12 Wochen wird klar, wo Entscheidungen hängen bleiben, welche Rollen im Alltag nicht tragen und welche Konflikte Zusammenarbeit blockieren. Daraus entstehen klare Regeln, belastbare Zuständigkeiten und verbindliche Vereinbarungen für den Führungsalltag.'
);

// 5C
code = code.replace(
  'Es geht nicht um Workshop-Inszenierung. Es geht um echte Situationen aus dem Führungsalltag und um Vereinbarungen, die danach tatsächlich tragen.',
  'Es geht nicht um Workshop-Routine oder saubere Folien. Es geht um reale Situationen aus dem Führungsalltag und um Vereinbarungen, die danach im Alltag tatsächlich halten.'
);

// 5D
code = code.replace(
  'Wenn Freigaben hängen bleiben, liegt das Problem selten nur an Tempo',
  'Wenn Freigaben hängen bleiben, liegt das Problem fast nie nur am Tempo'
);

// 5E
code = code.replace(
  'Zito Concept unterstützt Führungsteams dabei, Zuständigkeiten zu klären, Konflikte sauber zu bearbeiten und Entscheidungen wieder in Tagen statt Wochen voranzubringen.',
  'Zito Concept hilft Führungsteams, Zuständigkeiten zu klären, Konflikte offen zu bearbeiten und Entscheidungen wieder in Tagen statt Wochen voranzubringen.'
);

// Mailto on Form
code = code.replace(
  /<form class="check-form" onsubmit=\{\(e\) => e\.preventDefault\(\)\}>/,
  '<form class="check-form" action="mailto:hello@example.com" method="post" enctype="text/plain">'
);

fs.writeFileSync(path, code);
console.log('Fixes 5B-E and form mailto applied.');
