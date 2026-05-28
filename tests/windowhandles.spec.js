import { test } from '@playwright/test';


test.only('New Tab Fill', async ({ page, context }) => {

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

  // 3 windows open
  await page.click('//button[@id="newTabsBtn"]');

  await page.waitForTimeout(5000);

  // Saglya windows store
  const pages = context.pages();

  // 2nd window handle
  const secondWindow = pages[1];

  //windows vr focus anate
   await secondWindow.bringToFront();

  // Fill method perform
  await secondWindow.locator('//input[@id="firstName"]').fill('Premesh');

   await secondWindow.waitForTimeout(5000);


  });




  test('Multiple tab Handle-2', async ({ page, context }) => {

  await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');

  // 3 windows open
  await page.click('//button[@id="newTabsBtn"]');

  await page.waitForTimeout(5000);

  // Saglya windows store
  const pages = context.pages();

  // 2nd window handle
  const secondWindow = pages[2];

   // Page load wait
 // await secondWindow.waitForLoadState();

  // Fill method perform
  await secondWindow.locator('(//a[text()="Contact"])[2]').click();

   await secondWindow.waitForTimeout(5000);



    // Main window
  const mainWindow = pages[0];

  // Main tab front ला आण
  await mainWindow.bringToFront();

  // Main window vr click action
  await mainWindow.locator('//button[@id="newWindowBtn"]').click();

  await mainWindow.waitForTimeout(3000);


  });

  

 test('New windows handle', async ({ page, context }) => {

  await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');

  // New tab open
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('//button[@id="newWindowBtn"]')]);

  // New tab vr fill
  await newPage.locator('//input[@id="firstName"]').fill('Premesh');

  await newPage.waitForTimeout(5000);

});



  





