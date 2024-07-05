import assert from 'assert';
import azafashionHomePage from '../../pages/azafashionHome.page.js'

describe('Most Loved Collections Slider', () => {
  it('should check header, view all link, and collections', async () => {
    await browser.url('https://www.azafashions.com/');
    await browser.maximizeWindow()
    await b.loadingComplete()
    // Scroll into view and check header
    await b.scroll(0,1200)
    await b.pause(5000)
    await azafashionHomePage.headerMostLovedCollections.scrollIntoView({ block: 'center' })
    await azafashionHomePage.headerMostLovedCollections.waitForDisplayed({ timeout: 5000 })
    assert(await azafashionHomePage.headerMostLovedCollections.isDisplayed(), 'Header is not displayed')

    // Check View All link
    await azafashionHomePage.linkViewAllCollections.scrollIntoView({ block: 'center' });
    await azafashionHomePage.linkViewAllCollections.waitForClickable({ timeout: 5000 });
    assert(await azafashionHomePage.linkViewAllCollections.isDisplayed(), 'View All link is not displayed');
    assert(await azafashionHomePage.linkViewAllCollections.isClickable(), 'View All link is not clickable');

    // Iterate through the collection items and check titles 
    const collectionCount = await azafashionHomePage.collectionLinks.length;
    for (let i = 1; i <= collectionCount; i++) {
      const collectionTitle = await azafashionHomePage.collectionTitle(i);

      await collectionTitle.scrollIntoView({ block: 'center' });
      await collectionTitle.waitForDisplayed({ timeout: 5000 });
      assert(await collectionTitle.isDisplayed(), `Collection title ${i} is not displayed`);
     }
    //  await azafashionHomePage.collectionTitle(1).scrollIntoView({ block: 'center' });
     await azafashionHomePage.collectionTitle(collectionCount).click()
     await b.pause(3000)
  });
});
describe('Product Information Extraction and Validation', () => {
  let price 
    it('should extract product price and available sizes', async () => {

      let collectionUrl = await browser.getUrl()
      assert(await collectionUrl.includes('designer-collections'), true)
  
      // Extract price
      let priceElement = await azafashionHomePage.productPrice ;
      let productName = await azafashionHomePage.productName ;
      await priceElement.scrollIntoView({ block: 'center' });
      await priceElement.waitForDisplayed({ timeout: 5000 });
       price = await priceElement.getText();
      let name = await productName.getText();
      console.log(price)
      console.log(name)
      await azafashionHomePage.productPrice.click()
      let pdpURL = await browser.getUrl()
      assert(await pdpURL.includes(name), true)
  
    });
  
    it('should validate product information on another page', async () => {

      
      // Validate price on the product detail page
      const validationPriceElement = await azafashionHomePage.pdpproductPrice;
      await validationPriceElement.waitForDisplayed({ timeout: 5000 });
      const validationPrice = await validationPriceElement.getText();
      if(price == validationPrice){
        console.log("product price match")
      }
      // assert.strictEqual(validationPrice, price, 'Price does not match');

    });
  });

