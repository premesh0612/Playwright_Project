import { test } from '@playwright/test';


test('New Tab Fill', async ({ page, context }) => {

  await page.goto('https://vinothqaacademy.com/multiple-windows/');

  // New tab open
  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('//button[@name="145newbrowsertab234"]').click()
    ]);

  // New tab vr fill
  await newTab.locator('//input[@id="nameInput"]').fill('Premesh');

  //await newTab.waitForTimeout(3000);

});



test('Multiple tab Handle', async ({ page, context }) => {

  await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');

  // 3 windows open and wait for both popups
  const [firstPopup, secondPopup] = await Promise.all([
    page.waitForEvent('popup'),
    page.waitForEvent('popup'),
    page.click('//button[@id="newTabsBtn"]')
  ]);

  // 2nd window handle is the first popup page
  const secondWindow = firstPopup;
  await secondWindow.waitForLoadState('domcontentloaded');

  // Fill method perform
  const firstNameInput = secondWindow.locator('//input[@id="firstName"]');
  await firstNameInput.waitFor({ state: 'visible', timeout: 10000 });
  await firstNameInput.fill('Premesh');

});




  test('Multiple tab Handle-2', async ({ page, context }) => {

  await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');

  // 3 windows open and wait for both popups
  const [firstPopup, secondPopup] = await Promise.all([
    page.waitForEvent('popup'),
    page.waitForEvent('popup'),
    page.click('//button[@id="newTabsBtn"]')
  ]);

  // 2nd window handle uses the second popup
  const secondWindow = secondPopup;
  await secondWindow.waitForLoadState('domcontentloaded');

  // Fill method perform
  const contactLink = secondWindow.locator('(//a[text()="Contact"])[2]');
  await contactLink.waitFor({ state: 'visible', timeout: 10000 });
  await contactLink.click();

  // Main window
  await page.bringToFront();
  await page.waitForSelector('//button[@id="newWindowBtn"]', { state: 'visible', timeout: 10000 });
  await page.evaluate(() => document.querySelector('#newWindowBtn')?.scrollIntoView({ block: 'center' }));
  await page.evaluate(() => document.querySelector('#newWindowBtn')?.click());

});

  

 test('New windows handle', async ({ page, context }) => {

  await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');


  await page.waitForSelector('//button[@id="newWindowBtn"]');

  // New tab open
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('//button[@id="newWindowBtn"]')]);

  // New tab vr fill
  await newPage.locator('//input[@id="firstName"]').fill('Premesh');

  await newPage.waitForTimeout(5000);

});



  





