const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:4187');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: '/home/assistent/workspace/tmp/zito-redesign-c-exp2/screenshot-final-hero.png', fullPage: false });
  await browser.close();
})();
