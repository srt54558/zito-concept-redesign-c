import re

with open('/home/assistent/workspace/tmp/zito-redesign-c-exp2/src/routes/+page.svelte', 'r') as f:
    content = f.read()

# 1. Icons in "Woran Unternehmen die Zusammenarbeit früh merken"
svg1 = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>'
svg2 = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="16" x2="16" y1="2" y2="6"/></svg>'
svg3 = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>'

content = content.replace(
    '<article>\n          <strong>Entscheidungen werden terminierbar</strong>',
    f'<article>\n          {svg1}\n          <strong>Entscheidungen werden terminierbar</strong>'
)
content = content.replace(
    '<article>\n          <strong>Konflikte werden bearbeitet statt vertagt</strong>',
    f'<article>\n          {svg2}\n          <strong>Konflikte werden bearbeitet statt vertagt</strong>'
)
content = content.replace(
    '<article>\n          <strong>Die Geschäftsführung wird entlastet</strong>',
    f'<article>\n          {svg3}\n          <strong>Die Geschäftsführung wird entlastet</strong>'
)

# 2. Vorher / Nachher Structure
vorher_nachher = """
      <div class="vorher-nachher">
        <div class="vn-card vorher">
          <span class="vn-label">Vorher</span>
          <h4>Führung als Flaschenhals</h4>
          <ul>
            <li>Entscheidungen bleiben in der Abstimmung hängen</li>
            <li>Geschäftsführung ist tief im operativen Tagesgeschäft</li>
            <li>Konflikte schwelen und blockieren Projekte</li>
          </ul>
        </div>
        <div class="vn-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <div class="vn-card nachher">
          <span class="vn-label">Nachher</span>
          <h4>Handlungsfähige Führung</h4>
          <ul>
            <li>Klare Entscheidungswege und terminierte Freigaben</li>
            <li>Geschäftsführung hat Zeit für strategische Führung</li>
            <li>Spannungen werden produktiv und offen geklärt</li>
          </ul>
        </div>
      </div>
"""
content = content.replace('<div class="mini-grid results-grid">', vorher_nachher + '\n      <div class="mini-grid results-grid">')

# 3. Highlight Quote Block
quote_css_old = """.proof-quote {
    margin: 1.2rem 0 0;
    padding: 1.2rem 1.5rem;
    border-left: 4px solid oklch(0.58 0.14 35);
    border-radius: 0.7rem;
    background: oklch(0.99 0.004 92);
    font-weight: 600;
    color: oklch(0.24 0.02 80);
    font-size: 1.05rem;
  }

  .proof-quote span {
    display: block;
    margin-top: 0.6rem;
    font-size: 0.9rem;
    font-weight: 700;
    color: oklch(0.38 0.016 80);
  }"""

quote_css_new = """.proof-quote {
    margin: 3.5rem 0 2rem;
    padding: 3.5rem 2.5rem 2.5rem;
    border-radius: 1.5rem;
    background: linear-gradient(135deg, oklch(0.99 0.005 90), oklch(0.97 0.01 85));
    border: 1px solid oklch(0.85 0.015 85);
    box-shadow: 0 20px 40px -15px oklch(0 0 0 / 0.08);
    position: relative;
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 600;
    color: oklch(0.18 0.03 70);
    font-size: clamp(1.4rem, 2.5vw, 1.8rem);
    line-height: 1.4;
    text-align: center;
  }

  .proof-quote::before {
    content: "„";
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 8rem;
    color: oklch(0.56 0.14 35 / 0.15);
    font-family: Georgia, serif;
    line-height: 1;
  }

  .proof-quote span {
    display: block;
    margin-top: 1.5rem;
    font-family: 'Manrope', system-ui, sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: oklch(0.4 0.02 80);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }"""
content = content.replace(quote_css_old, quote_css_new)


# 4. Process visualization
steps_grid_css_old = """.steps-grid {
    margin-top: 1.5rem;
    display: grid;
    gap: 1rem;
  }

  .step-card {
    display: flex;
    gap: 1rem;
    padding: 1.2rem;
    border-radius: 0.9rem;
    background: white;
    border: 1px solid oklch(0.86 0.014 85);
  }

  .step-num {
    width: 2.5rem;
    height: 2.5rem;
    aspect-ratio: 1;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background: oklch(0.56 0.14 35);
    flex: none;
  }

  .step-content strong {
    display: block;
    font-size: 1.05rem;
    margin-bottom: 0.3rem;
  }

  .step-content span {
    font-size: 0.95rem;
    color: oklch(0.3 0.02 80);
  }"""

steps_grid_css_new = """.steps-grid {
    margin-top: 2.5rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    position: relative;
  }

  @media (min-width: 900px) {
    .steps-grid::before {
      content: "";
      position: absolute;
      top: 2rem;
      left: 10%;
      right: 10%;
      height: 2px;
      background: dashed 2px oklch(0.8 0.016 84);
      z-index: 0;
    }
  }

  .step-card {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.2rem;
    padding: 2rem 1.5rem;
    border-radius: 1.2rem;
    background: white;
    border: 1px solid oklch(0.86 0.014 85);
    box-shadow: 0 10px 30px -10px oklch(0 0 0 / 0.05);
  }

  .step-num {
    width: 3rem;
    height: 3rem;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, oklch(0.59 0.15 32), oklch(0.56 0.14 35));
    box-shadow: 0 0 0 6px white, 0 4px 10px oklch(0.56 0.14 35 / 0.3);
    flex: none;
    margin-top: -3.5rem;
  }

  .step-content strong {
    display: block;
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
    font-family: 'Playfair Display', Georgia, serif;
    color: oklch(0.2 0.03 72);
  }

  .step-content span {
    font-size: 0.95rem;
    color: oklch(0.3 0.02 80);
    line-height: 1.5;
  }"""

content = content.replace(steps_grid_css_old, steps_grid_css_new)

# Additional CSS
extra_css = """
  .icon {
    color: oklch(0.56 0.14 35);
    margin-bottom: 0.8rem;
  }

  .vorher-nachher {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin: 2rem 0 3rem;
    background: white;
    padding: 1.5rem;
    border-radius: 1.2rem;
    border: 1px solid oklch(0.86 0.014 85);
  }

  @media (max-width: 768px) {
    .vorher-nachher {
      flex-direction: column;
    }
    .vn-arrow {
      transform: rotate(90deg);
    }
  }

  .vn-card {
    flex: 1;
    padding: 1.5rem;
    border-radius: 0.8rem;
  }

  .vn-card.vorher {
    background: oklch(0.98 0.005 90);
    border: 1px solid oklch(0.9 0.01 85);
  }

  .vn-card.nachher {
    background: oklch(0.97 0.03 140);
    border: 1px solid oklch(0.88 0.04 140);
  }

  .vn-label {
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    margin-bottom: 1rem;
  }

  .vn-card.vorher .vn-label {
    background: oklch(0.9 0.01 85);
    color: oklch(0.4 0.02 80);
  }

  .vn-card.nachher .vn-label {
    background: oklch(0.88 0.04 140);
    color: oklch(0.25 0.05 140);
  }

  .vn-card h4 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.2rem;
    margin: 0 0 0.8rem 0;
    color: oklch(0.2 0.03 72);
  }

  .vn-card ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.6rem;
  }

  .vn-card li {
    font-size: 0.95rem;
    color: oklch(0.3 0.02 80);
    position: relative;
    padding-left: 1.2rem;
  }

  .vn-card.vorher li::before {
    content: "✕";
    position: absolute;
    left: 0;
    color: oklch(0.6 0.1 20);
    font-size: 0.8rem;
    top: 0.15rem;
  }

  .vn-card.nachher li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: oklch(0.4 0.1 140);
    font-size: 0.9rem;
    top: 0.1rem;
  }

  .vn-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 999px;
    background: white;
    border: 1px solid oklch(0.86 0.014 85);
    color: oklch(0.5 0.02 80);
    flex-shrink: 0;
    box-shadow: 0 4px 10px -4px oklch(0 0 0 / 0.1);
  }
"""

content = content.replace('</style>', extra_css + '\n</style>')

with open('/home/assistent/workspace/tmp/zito-redesign-c-exp2/src/routes/+page.svelte', 'w') as f:
    f.write(content)

