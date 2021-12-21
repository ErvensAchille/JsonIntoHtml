// import library puppeteer

const puppeteer = require ('puppeteer');
// create async function

async function scrapeProduct (url){
  // start up browser
  const browser = await puppeteer.launch();
  // start new page
  const page = await browser.newPage();
  // go to url
  await page.goto(url);

// X path returning an array. This is pulling out the first item of the array or the zero index into a variable called el
const [el] = await page.$x('//*[@id] ="exampleXpath"');
 // Get IMGURL. pull the source attribute out of that element. Do that with the get property method.
const src = await el.getProperty('src');
// pull out string
const imgURL = await src.jsonValue();

// X path returning an array. This is pulling out the first item of the array or the zero index into a variable called el
const [el2] = await page.$x('//*[@id] ="exampleXpath"');
// get text content
const text = await el2.getProperty('textContent');
const title = await src.jsonValue();

const [el3] = await page.$x('//*[@id] ="exampleXpath"');
const txt2 = await el.getProperty('textContent');
const price = await txt2.jsonValue();

console.log({imgURL,title,price})
  browser.closer();
}

scrapeProduct(example url)
