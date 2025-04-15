import { expect, type Locator, type Page } from "@playwright/test";

export class GetStartedPage {
  readonly page: Page;
  readonly ownerAndOperatorRole: Locator;
  readonly renterRole: Locator
  readonly brokerRole: Locator

  constructor(page: Page) {
    this.page = page
    this.ownerAndOperatorRole = page.getByRole('link', { name: 'Select Owner & Operator role' })
    this.renterRole = page.getByRole('link', { name: 'Select Renter role' })
    this.brokerRole = page.getByRole('link', { name: 'Select Broker role' })
  }
}