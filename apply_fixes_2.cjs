const fs = require('fs');
const path = '/home/assistent/workspace/tmp/zito-redesign-c-exp2/src/routes/+page.svelte';
let code = fs.readFileSync(path, 'utf-8');

// 1. Add kicker to Trust Block
code = code.replace(
  '<h2>Warum Unternehmen Zito Concept holen</h2>',
  '<p class="section-kicker">Arbeitsweise</p>\n        <h2>Warum Unternehmen Zito Concept holen</h2>'
);

// 2. Remove "Für wen passend"
code = code.replace(
  /<article>\s*<h3>Für wen passend<\/h3>[\s\S]*?<\/article>/,
  ''
);

// 3. Update Check Intro Text
code = code.replace(
  'Im 20-Minuten-Check schildern Sie den Engpass in Ihrem Führungsteam. Sie erhalten eine erste Einschätzung, welche Muster gerade bremsen, welche Sofortregel helfen kann und ob eine Zusammenarbeit sinnvoll ist oder aktuell nicht nötig.',
  'Im 20-Minuten-Check schildern Sie den Engpass in Ihrem Führungsteam. Sie erhalten eine erste Einschätzung, eine mögliche Sofortregel und eine klare Empfehlung, ob Zusammenarbeit aktuell sinnvoll ist.'
);

// 4. Update Problem Intro Text
code = code.replace(
  'Die Zusammenarbeit ist oft nicht grundsätzlich kaputt. Sie ist nur an entscheidenden Stellen unscharf geworden. Genau dort entstehen Reibung, Verzögerung und stille Überlastung.',
  'Meist ist nicht das ganze Führungsteam das Problem. Aber an entscheidenden Stellen ist unklar geworden, wer führt, wer entscheidet und wer etwas sauber übergibt. Genau dort entstehen Reibung, Verzögerung und stille Überlastung.'
);

fs.writeFileSync(path, code);
console.log('Fixes 4 and 5A applied.');
