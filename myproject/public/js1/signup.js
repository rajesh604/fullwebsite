var ipcon;
var text;
var string_html;
var string_complete;

import {Builder, Browser, By, Key} from 'selenium-webdriver';
import fs from 'fs';

async function example(latitude,longitude) {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('http://www.google.com/ncr');
    driver.manage().window().maximize();
    await driver.findElement(By.name('q')).sendKeys('google maps', Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div[1]/a')).click();
    await driver.findElement(By.xpath('//*[@id="searchboxinput"]')).sendKeys(`${latitude},${longitude}`,Key.RETURN);
    await new Promise(r => setTimeout(r, 24000));
    driver.findElement(By.xpath('//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[4]/div[5]/button')).click();
    await new Promise(r => setTimeout(r, 10000));
    await driver.findElement(By.xpath('//*[@id="modal-dialog"]/div/div[2]/div/div[3]/div/div/div/div[2]/button[2]')).click()
    await new Promise(r => setTimeout(r, 10000));
    let hello = await driver.findElement(By.xpath('//*[@id="modal-dialog"]/div/div[2]/div/div[3]/div/div/div/div[3]/div[1]/input')).getAttribute("value");
    string_html = hello;
  } finally {
    driver.quit();
  }
};

async function examplse() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://api64.ipify.org/?format=json');
    driver.manage().window().minimize();
    // let hello = await driver.get(By.xpath('/html/body/pre')).getText();
    let hello = await driver.getPageSource();
    let mySubString = hello.substring(
      hello.indexOf("{"),   // from character ':'
      hello.lastIndexOf("}") + 1	// to character ';'
    );
    let v = await JSON.parse(mySubString);
    ipcon = await v.ip;
  } finally{
    driver.quit();
  }
};

await examplse();

await new Promise(r => setTimeout(r, 1000));

async function google(ipc) {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://tools.keycdn.com/geo');
    driver.manage().window();
    await driver.findElement(By.xpath('//*[@id="host"]')).clear();
    await driver.findElement(By.xpath('//*[@id="host"]')).sendKeys(ipc,Key.ENTER);
    await new Promise(r => setTimeout(r, 4000));
    // await new Promise(r => setTimeout(r, 1000));
    text = await driver.findElement(By.xpath('//*[@id="geoResult"]/div[1]/dl[1]/dd[6]')).getText();
  } finally {
    driver.quit();
  }
};

await google(ipcon);
await new Promise(r => setTimeout(r, 1000));
console.log(text)
let latitude = text.substring(
  text.indexOf(""),   // from character ':'
  text.lastIndexOf(" (lat)") + 1	// to character ';'
);

await new Promise(r => setTimeout(r, 1000));
let longitude = text.substring(
  text.indexOf("/ ") + 2,   // from character ':'
  text.lastIndexOf(" (long)") + 1	// to character ';'
);

await new Promise(r => setTimeout(r, 1000));
await example(latitude,longitude);
await new Promise(r => setTimeout(r, 1000));
string_complete = `<div id="googleframe" class="display">${string_html}</div>`
fs.writeFile('C:/Users/bunnysunny/vs_code/myproject/templates/partials/google.hbs', string_complete, function (err){
  if (err) throw err;
});