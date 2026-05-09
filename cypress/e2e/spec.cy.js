describe ("Pizza Pages Projects", ()=>{
  describe('Navigation Tests', () => {
   beforeEach(function () {
    cy.visit('http://localhost:5173/');
    });
  it('should redirect to the order page via the button of Acıktım', () => {
    //arrange
    //act
    cy.get('[data-cy="order-link-2"]').click()
    //assets
    cy.contains("Sipariş Oluştur").should("be.visible");
    cy.url().should("include", "/order")
  });
  it('should redirect to the order page via the button-1 of Sipariş Ver', () => {
    //arrange
    //act
    cy.get('[data-cy="order-link-3"]').click()
    //assets
    cy.contains("Sipariş Oluştur").should("be.visible");
    cy.url().should("include", "/order")
  });
  it('should redirect to the order page via the button-2 of Sipariş Ver', () => {
    //arrange
    //act
    cy.get('[data-cy="order-link-4"]').click()
    //assets
    cy.contains("Sipariş Oluştur").should("be.visible");
    cy.url().should("include", "/order")
  });
  it('should redirect to the order page via the button-3 of Sipariş Ver', () => {
    //arrange
    //act
    cy.get('[data-cy="order-link-1"]').click()
    //assets
    cy.contains("Sipariş Oluştur").should("be.visible");
    cy.url().should("include", "/order")
  });
})
describe('Order Input Tests', () => {
   beforeEach(function () {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="order-link-1"]').click();
    });
    it('should allow to submit(4 Selections)', () => {
    //act
    cy.get('[data-cy="radio-L"]').click()
    cy.get('[data-cy="dropdown"]').select("İnce")
    cy.get('[data-cy="checkbox-Sosis"]').click()
    cy.get('[data-cy="checkbox-Soğan"]').click()
    cy.get('[data-cy="checkbox-Sucuk"]').click()
    cy.get('[data-cy="checkbox-Biber"]').click()
    cy.get('[data-cy="input-name"]').type("İhsan Şahin")
    cy.get('[data-cy="input-button"]').click()
    //assets
    cy.contains("SİPARİŞ ALINDI").should("be.visible");
    cy.url().should("include", "/success")
  });
  it('should allow to submit(10 Selections)', () => {
    //act
    cy.get('[data-cy="radio-L"]').click()
    cy.get('[data-cy="dropdown"]').select("İnce")
    cy.get('[data-cy="checkbox-Sosis"]').click()
    cy.get('[data-cy="checkbox-Soğan"]').click()
    cy.get('[data-cy="checkbox-Sucuk"]').click()
    cy.get('[data-cy="checkbox-Biber"]').click()
    cy.get('[data-cy="checkbox-Sarımsak"]').click()
    cy.get('[data-cy="checkbox-Mısır"]').click()
    cy.get('[data-cy="checkbox-Ananas"]').click()
    cy.get('[data-cy="checkbox-Tavuk Izgara"]').click()
    cy.get('[data-cy="checkbox-Kabak"]').click()
    cy.get('[data-cy="checkbox-K. Jambonu"]').click()
    cy.get('[data-cy="input-name"]').type("İhsan Şahin")
    cy.get('[data-cy="input-button"]').click()
    //assets
    cy.contains("SİPARİŞ ALINDI").should("be.visible");
    cy.url().should("include", "/success")
  });  
})
describe('Disabled Button Tests', () => {
   beforeEach(function () {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="order-link-1"]').click();
    });
    it('The button should be disabled unless the pizza-size is selected', () => {
    //act
    cy.get('[data-cy="dropdown"]').select("Kalın")
    cy.get('[data-cy="checkbox-Sosis"]').click()
    cy.get('[data-cy="checkbox-Soğan"]').click()
    cy.get('[data-cy="checkbox-Sucuk"]').click()
    cy.get('[data-cy="checkbox-Biber"]').click()
    cy.get('[data-cy="checkbox-Sarımsak"]').click()
    cy.get('[data-cy="input-name"]').type("İhsan Şahin")
    //assets
    cy.get('[data-cy="input-button"]').should('be.disabled')
  });
  it('The button should be disabled unless the dough thickness is selected', () => {
    //act
    cy.get('[data-cy="radio-S"]').click()
    cy.get('[data-cy="checkbox-Sosis"]').click()
    cy.get('[data-cy="checkbox-Soğan"]').click()
    cy.get('[data-cy="checkbox-Sucuk"]').click()
    cy.get('[data-cy="checkbox-Biber"]').click()
    cy.get('[data-cy="input-name"]').type("İhsan Şahin")
    //assets
    cy.get('[data-cy="input-button"]').should('be.disabled')
  });
  it('The button should be disabled unless at least 4 additional items are selected', () => {
    //act
    cy.get('[data-cy="radio-M"]').click()
     cy.get('[data-cy="dropdown"]').select("Süper İnce")
    cy.get('[data-cy="checkbox-Sosis"]').click()
    cy.get('[data-cy="checkbox-Sucuk"]').click()
    cy.get('[data-cy="checkbox-Biber"]').click()
    cy.get('[data-cy="input-name"]').type("İhsan Şahin")
    //assets
    cy.get('[data-cy="input-button"]').should('be.disabled')
    cy.contains("En az 4 - En fazla 10 adet seçim yapılmalı.").should("be.visible");
  });
  it('the button and an error message should be disabled unless a maximum of 10 additional items are selected', () => {
    //act
    cy.get('[data-cy="radio-L"]').click()
    cy.get('[data-cy="dropdown"]').select("Orta (Normal)")
    cy.get('[data-cy="checkbox-Sosis"]').click()
    cy.get('[data-cy="checkbox-Soğan"]').click()
    cy.get('[data-cy="checkbox-Sucuk"]').click()
    cy.get('[data-cy="checkbox-Biber"]').click()
    cy.get('[data-cy="checkbox-Sarımsak"]').click()
    cy.get('[data-cy="checkbox-Mısır"]').click()
    cy.get('[data-cy="checkbox-Ananas"]').click()
    cy.get('[data-cy="checkbox-Tavuk Izgara"]').click()
    cy.get('[data-cy="checkbox-Kabak"]').click()
    cy.get('[data-cy="checkbox-K. Jambonu"]').click()
    cy.get('[data-cy="checkbox-Cheddar"]').click()
    cy.get('[data-cy="input-name"]').type("İhsan Şahin")
    //assets
     cy.get('[data-cy="input-button"]').should('be.disabled')
    cy.contains("En az 4 - En fazla 10 adet seçim yapılmalı.").should("be.visible");
  });
  it('If the full name field does not contain at least 3 characters, the button and an error message should be disabled ', () => {
    //act
    cy.get('[data-cy="radio-L"]').click()
    cy.get('[data-cy="dropdown"]').select("Orta (Normal)")
    cy.get('[data-cy="checkbox-Sosis"]').click()
    cy.get('[data-cy="checkbox-Soğan"]').click()
    cy.get('[data-cy="checkbox-Sucuk"]').click()
    cy.get('[data-cy="checkbox-Biber"]').click()
    cy.get('[data-cy="checkbox-Sarımsak"]').click()
    cy.get('[data-cy="checkbox-Mısır"]').click()
    cy.get('[data-cy="checkbox-Ananas"]').click()
    cy.get('[data-cy="checkbox-Tavuk Izgara"]').click()
    cy.get('[data-cy="checkbox-Kabak"]').click()
    cy.get('[data-cy="checkbox-K. Jambonu"]').click()
    cy.get('[data-cy="input-name"]').type("İh")
    //assets
    cy.get('[data-cy="input-button"]').should('be.disabled')
    cy.contains("Ad soyad en az 3 hane olmalı").should("be.visible");
  });
  it('Error Modal Test', () => {
    cy.intercept("Post", "https://reqres.in/api/pizza", {
      statusCode: 500,
      body: { error: "Sunucu Hatası"}
    }).as("postError")
    //act
    cy.get('[data-cy="radio-L"]').click()
    cy.get('[data-cy="dropdown"]').select("Orta (Normal)")
    cy.get('[data-cy="checkbox-Sosis"]').click()
    cy.get('[data-cy="checkbox-Soğan"]').click()
    cy.get('[data-cy="checkbox-Sucuk"]').click()
    cy.get('[data-cy="checkbox-Biber"]').click()
    cy.get('[data-cy="checkbox-Sarımsak"]').click()
    cy.get('[data-cy="checkbox-Mısır"]').click()
    cy.get('[data-cy="checkbox-Ananas"]').click()
    cy.get('[data-cy="checkbox-Tavuk Izgara"]').click()
    cy.get('[data-cy="checkbox-Kabak"]').click()
    cy.get('[data-cy="checkbox-K. Jambonu"]').click()
    cy.get('[data-cy="input-name"]').type("İhsan Şahin")
    cy.get('[data-cy="input-button"]').click()
    cy.wait("@postError")
    //assets
    cy.get('[data-cy="modal"]').should("be.visible")
    cy.contains('İnternet bağlantısı nedeniyle bir hata oluştu. Lütfen bağlantınızı kontrol ediniz.').should("be.visible")
  });
  });
})
