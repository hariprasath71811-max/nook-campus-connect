const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file:///C:/Users/DELL/OneDrive/Documents/Default%20Project/nook/Nook_UXDC_Presentation.html');
  await page.waitForTimeout(1000);
  await page.pdf({
    path: 'C:/Users/DELL/OneDrive/Documents/Default Project/nook/Nook_UXDC_Presentation.pdf',
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  await browser.close();
  console.log('PDF generated');
})();
