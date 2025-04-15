import { test, expect } from '@playwright/test';
import { LandingPage } from '../locators/landing.page';
import { GetStartedPage } from '../locators/getStarted.page';

test.describe('Testing get started flow', () => {
    test.beforeEach(async ({page}) => {
        const landingPage = new LandingPage(page)
        await page.goto('.')
        await landingPage.getInStartedBtn.click();
    })

    test('Generated test - Validate roles options butons', async ({ page }) => {
        const getStartedPage = new GetStartedPage(page)

        await expect(getStartedPage.ownerAndOperatorRole).toBeVisible();
        await expect(getStartedPage.renterRole).toBeVisible();
        await expect(getStartedPage.brokerRole).toBeVisible();
      });

    
})
