import { test } from '@playwright/test';

test('File Download Demo', async ({ page }) => {

  // Open website
  await page.goto('https://the-internet.herokuapp.com/download');

  // Wait for download
  const downloadPromise = page.waitForEvent('download');

  // Click file link
  await page.click('text=some-file.txt');

  // Capture download object
  const download = await downloadPromise;

  // Get original file name
  const fileName = await download.suggestedFilename();

  // Save file
  await download.saveAs(`downloads/${fileName}`);

  console.log('Downloaded File:', fileName);

});