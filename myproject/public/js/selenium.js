const {Builder} = require('selenium-webdriver');

async function example(){
    let driver = await new Builder().forBrowser('chromedriver').build();

    await driver.get('https://www.google.com/')
}

example();