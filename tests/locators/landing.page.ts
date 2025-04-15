import { expect, type Locator, type Page } from "@playwright/test";

export class LandingPage {
  readonly page: Page;
  readonly getInStartedBtn: Locator;

  constructor(page: Page) {
    this.page = page
    this.getInStartedBtn = page.getByTitle('Get Started')
  }
}