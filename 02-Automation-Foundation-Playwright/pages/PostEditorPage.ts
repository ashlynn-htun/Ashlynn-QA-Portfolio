import { Page, Locator } from '@playwright/test';

export class PostEditorPage {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly contentEditor: Locator;
  readonly tagInput: Locator;
  readonly saveDraftBtn: Locator;
  readonly publishBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.locator('#title');
    this.contentEditor = page.locator('#richContent');
    this.tagInput = page.locator('#tags');
    this.saveDraftBtn = page.getByRole('button', { name: 'Save Draft' });
    this.publishBtn = page.getByRole('button', { name: 'Publish' });
  }

  async createPost(title: string, content: string, tags: string) {
    await this.titleInput.fill(title);

    await this.contentEditor.evaluate((el, value) => {
      (el as HTMLElement).innerText = value;
    }, content);

    await this.tagInput.fill(tags);
  }

  async publish() {
    await this.publishBtn.click();
  }

  async saveDraft() {
    await this.saveDraftBtn.click();
  }
}
