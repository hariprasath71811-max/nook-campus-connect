const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const outDir = 'C:/Users/DELL/OneDrive/Documents/Default Project/nook';

(async () => {
  let context, browser;
  try {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      recordVideo: { dir: outDir, size: { width: 1280, height: 720 } }
    });
    const page = await context.newPage();
    await page.goto('file:///C:/Users/DELL/OneDrive/Documents/Default%20Project/nook/index.html');
    await page.waitForTimeout(2500);
    console.log('loaded');

    await page.click('button[data-filter="study"]');
    await page.waitForTimeout(2000);
    console.log('filtered study');

    await page.click('button[data-pullup]');
    await page.waitForTimeout(1200);
    await page.click('#confirmPullup');
    await page.waitForTimeout(2500);
    console.log('pullup done');

    await page.click('button[data-tab="host"]');
    await page.waitForTimeout(1500);
    console.log('host tab');

    await page.fill('#hostDesc', 'Working on Discrete Math');
    await page.fill('#hostSeats', '2');
    await page.fill('#hostIce', 'Ask me about my weekend trip');
    await page.waitForTimeout(1000);
    console.log('filled');

    // ensure no modal overlay
    await page.evaluate(() => { if (window.state && window.state.modals) window.state.modals.pullup = null; if (typeof render==='function') render(); });
    await page.waitForTimeout(500);

    await page.click('#hostSubmit', { force: true });
    await page.waitForTimeout(2500);
    console.log('submitted');

    await page.click('button[data-tab="vibes"]');
    await page.waitForTimeout(1500);
    await page.click('[data-building="0"]');
    await page.waitForTimeout(2000);
    await page.click('[data-closepanel]');
    await page.waitForTimeout(1000);

    await page.click('button[data-tab="ground"]');
    await page.waitForTimeout(1500);
    await page.click('#startGround');
    await page.waitForTimeout(2500);
    await page.evaluate(() => { window.stopBreath(); window.state.breathLeft = 0; window.finishGrounding(); });
    await page.waitForTimeout(2000);
    await page.evaluate(() => { window.state.modals.grounding = false; window.state.groundingResult = null; if (typeof render === 'function') render(); });
    await page.waitForTimeout(1500);
    const modalCount = await page.evaluate(() => document.querySelectorAll('.modal-backdrop').length + ' | pullup=' + (window.state.modals.pullup) + ' ground=' + window.state.modals.grounding);
    console.log('modal state:', modalCount);

    await page.evaluate(() => { const d = document.getElementById('uxDrawer'); if (d) d.classList.remove('closed'); });
    await page.waitForTimeout(3000);
    await page.evaluate(() => { const d = document.getElementById('uxDrawer'); if (d) d.classList.add('closed'); });
    await page.waitForTimeout(1500);

    await page.click('button[data-tab="find"]');
    await page.waitForTimeout(2000);
    console.log('done all');
  } catch (e) {
    console.error('ERR:', e.message);
  } finally {
    if (context) await context.close();
    if (browser) await browser.close();
  }

  const files = fs.readdirSync(outDir).filter(f => f.endsWith('.webm'));
  if (files.length === 0) { console.log('No webm found'); return; }
  const latest = files.map(f => ({ f, t: fs.statSync(path.join(outDir, f)).mtimeMs }))
    .sort((a,b) => b.t - a.t)[0];
  console.log('WEBM:', latest.f);
  fs.renameSync(path.join(outDir, latest.f), path.join(outDir, 'nook_demo.webm'));
  console.log('renamed to nook_demo.webm');
})();
