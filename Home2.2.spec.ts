import {test,webkit,chromium} from '@playwright/test'

test('Launch browser',async()=>{

    const browser=await chromium.launch({channel:'msedge'}) // channel for opening in edge browser
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://www.redbus.in/");
    await page.url();
    await page.title();
    await page.waitForTimeout(3000);


    const browser1=await webkit.launch() // channel for opening in edge browser
    const context1=await browser.newContext()
    const page1=await context.newPage()

    await page.goto("https://www.flipkart.com");
    await page.url();
    await page.title();
    await page.waitForTimeout(3000);


})