
class azafashionHomePage {

    get headerMostLovedCollections() {
      return $('//p[contains(text(), "Most Loved Collections") and contains(@class, "text-lg")]');
    }
  
    get linkViewAllCollections() {
      return $('//p[contains(text(), "Most Loved Collections")]/parent::div//a[text()="View All"]');
    }
  
    get sliderWrapper() {
      return $('(//div[contains(@class, "sliderWrapper_last")])[3]');
    }
    get collectionLinks() {
      return $$('//p[contains(text(), "Most Loved Collections")]/parent::div/following-sibling::div//div[contains(@class, "slick-slide")]//a');
    }
    get VCcollectionLinks() {
      return $$('//p[contains(text(), "Most Loved Collections")]/parent::div/following-sibling::div//div[contains(@class, "slick-slide")]//a[@href="/designer-collections/illuminate-by-varun-chakkilam/134"]');
    }


  collectionTitle(position) {
    return $(`(//p[contains(text(), "Most Loved Collections")]/parent::div/following-sibling::div//div[contains(@class, "slick-slide")])[${position}]`);
  }

  get productName(){
      return $('(//p[contains(@class, "font-semibold")]/following-sibling::p[contains(@class, "font-light")])[1]')
  }

  get productPrice() {
    return $('(//span[contains(@class, "font-semibold") and contains(text(), "₹")])[1] | (//p[contains(@class, "font-semibold") and contains(text(), "₹")])[1]');
  }
  get pdpproductPrice(){
    return $('(//span[contains(@class, "font-bold")])[1]')
  }

  // XPath for the product details link
    get productLink() {
    return $('//a[contains(@href, "/products/varun-chakkilam-anchor-embroidered-open-jacket-and-kurta-set/453176")]');
  }
  
  }
  
  export default  new azafashionHomePage()

