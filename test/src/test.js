
const { By, Key, Builder, Actions } = require('selenium-webdriver')
require('chromedriver')

async function test_case() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/addProduct')
    const addPhotoButton = await driver.findElement(By.name('input-add-photo'))
    const submitButton = await driver.findElement(By.name('button-add-product'))

    await driver.findElement(By.name('text-area-product-description'))
        .sendKeys(
            'this is the first product', Key.TAB,
            'Type du bien', Key.TAB,
            '345', Key.TAB,
            '34857', Key.TAB,
            'Vente', Key.TAB,
            '0667578987');
        
            // clicking the add image button
            
            
            const actions = await driver.actions({async: true});
            await actions.move({origin: driver.findElement(By.name('text-area-product-description'))}).press().perform();

            await setTimeout(() => {}, 3000)
            submitButton.sendKeys(Key.ENTER)
}

test_case();