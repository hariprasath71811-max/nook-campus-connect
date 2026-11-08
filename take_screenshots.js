const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const outDir = 'C:/Users/DELL/OneDrive/Documents/Default Project/nook/assets';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();
  await page.goto('file:///C:/Users/DELL/OneDrive/Documents/Default%20Project/nook/index.html');
  await page.waitForTimeout(2000);

  // Screenshot 1: Find a Nook dashboard
  await page.evaluate(() => { window.state.activeTab = 'find'; window.state.filter = 'All'; if (typeof render === 'function') render(); });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, 'screenshot_1_find_a_nook.png'), fullPage: false });
  console.log('saved 1');

  // Screenshot 2: Daily Grounding modal
  await page.evaluate(() => { if (typeof openGrounding === 'function') openGrounding(); });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, 'screenshot_2_daily_grounding.png'), fullPage: false });
  console.log('saved 2');

  // Screenshot 3: Campus vibes + UX drawer
  await page.evaluate(() => {
    window.state.modals.grounding = false;
    window.state.groundingResult = null;
    window.state.activeTab = 'vibes';
    if (typeof render === 'function') render();
    const d = document.getElementById('uxDrawer'); if (d) d.classList.remove('closed');
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, 'screenshot_3_campus_vibes_drawer.png'), fullPage: false });
  console.log('saved 3');

  await browser.close();
  console.log('done');
})();
