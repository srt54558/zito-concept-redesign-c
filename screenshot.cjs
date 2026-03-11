const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  
  // Desktop Header
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto('http://localhost:4190', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  // Take screenshot of just the header
  const header = await page.locator('.site-header');
  if (await header.count() > 0) {
    await header.first().screenshot({ path: 'header-fix.png' });
  } else {
    await page.screenshot({ path: 'header-fix.png', clip: { x: 0, y: 0, width: 1280, height: 200 } });
  }
  await page.close();

  // Mobile full page to show no overflow
  const mobilePage = await browser.newPage({ viewport: { width: 375, height: 667 } });
  await mobilePage.goto('http://localhost:4190', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);
  
  // Take full page screenshot on mobile
  await mobilePage.screenshot({ path: 'mobile-fix-v3.png', fullPage: true });
  await mobilePage.close();

  await browser.close();
  console.log('Screenshots captured.');
})();
