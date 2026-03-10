<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="page-shell">
  <header class="site-header">
    <div class="logo-wrap">
      <img src="/assets/zito-logo.png" alt="Zito Concept" class="logo-mark" />
      
    </div>
    <nav class="desktop-nav">
      <a href="#zusammenarbeit">Zusammenarbeit</a>
      <a href="#wirkung">Wirkung</a>
      <a href="#ablauf">Ablauf</a>
      <a href="#check">Check buchen</a>
    </nav>
    <a class="header-cta" href="#check">20-Minuten-Check buchen</a>
  </header>
	{@render children()}
<footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <strong>Zito Concept</strong>
        <p>Begleitung für Führungsteams, wenn Entscheidungen, Rollen und Zusammenarbeit unter Druck geraten.</p>
      </div>
      <div class="footer-links">
        <a href="#kontakt">Kontakt</a>
        <a href="mailto:kontakt@zito-concept.de">E-Mail</a>
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>
    </div>
  </footer>
</div>
