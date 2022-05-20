
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(1000)
})

test('I can draw 5 robot cards', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
    let cards = await driver.findElement(By.xpath('(//div/div[contains(@class, "bot-card")])[1]'))
    const displayed = await cards.isDisplayed()
    expect(displayed).toBe(true)
  
    await driver.sleep(1000)
})

// test ('I can pick my team', async () => {
//     await driver.findElement(By.xpath('//div/h3[text()="Globotron"]'))
// })