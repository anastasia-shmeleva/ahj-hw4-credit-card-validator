import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 500,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should add .valid class', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#widget-container');
    const input = await form.$('#card_number');
    await input.type('347439603177587');
    const submit = await form.$('#submitform');
    submit.click();
    await page.waitFor('#card_number.valid');
  });
});
