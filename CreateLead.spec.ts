import {test} from  '@playwright/test'

test('create lead',async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click();
    await page.locator(`text='
                CRM/SFA
              '`).click();
    await page.locator(`text='Leads'`).click();
    await page.waitForTimeout(12000)
    await page.locator(".x-panel-header-text").nth(4).click();
    await page.locator(".x-form-element  input").nth(16).fill("Testleaf");
    await page.locator(".x-form-element  input").nth(17).fill("Sagaya");
    await page.locator(".x-form-element  input").nth(18).fill("Nivanjalin");
    await page.locator(".x-form-element  input").nth(19).fill("91");
    await page.locator(".x-form-element  input").nth(21).fill("9090909090");
    await page.locator(".x-form-element  input").nth(22).fill("sagayanivanjalin@gmail.com");
    await page.locator(".x-btn-center").nth(4).click();

})