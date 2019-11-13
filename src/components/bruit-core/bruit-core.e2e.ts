import { newE2EPage } from '@stencil/core/testing';

describe('bruit-core', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bruit-core></bruit-core>');

    const element = await page.find('bruit-core');
    expect(element).toHaveClass('hydrated');
  });
});
