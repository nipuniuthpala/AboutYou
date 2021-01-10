describe('About You testscenarios' ,function() {

 it ('Validate a user can successfully select an item after search and add to cart',function(){
      // go to the target web
   
     cy.logIn.logIn()
     cy.get('button[id="onetrust-accept-btn-handler"]').should('be.visible').click({force:true})
        
     cy.get('button[data-test-id="SearchButton"]').click()
     cy.get('input[placeholder="Suche nach Marken, Artikeln & mehr..."]').type(cy.search.search())
     cy.get('[title="Shirts & Tops"]').eq(1).click()
     cy.get('div[data-test-id="CategorySuggestionItemName"]').then(($msg)=>{
      const text=$msg.text()
      expect(text).contains("Shirts")})
     cy.get('[data-test-id="ProductImage"]').eq(1).click({force:true})
     cy.get('button[id="onetrust-accept-btn-handler"]').click({force:true})
     cy.get('[data-test-id="SizeBubble_available"]').eq(1).click()
     
     cy.get('[data-test-id="A2BButton"]').click()     
     cy.get('button[class="checkoutButton--3DjT- regular--2Nvoz"]').eq(1).click()
   
 })

   
  it('Validate a exisiting user can login to the system and checkout an order',function(){
  
    cy.get('input[name="email"]').type(cy.email.email())
    cy.get('input[name="password"]').eq(0).type(cy.password.password())
    cy.get('button[data-testid="SubmitLogin"]').eq(0).click({force:true})
    cy.get('span[class="continue"]').click()
    cy.get('input[id="hasSubscribedNewsletter"]').click({force:true})
    cy.get('span[class="confirm"]').click()
  })


  it('Validate a new user can login to the system after the registration and checkout an item',function(){
    
    cy.logIn.logIn()
    cy.get('button[id="onetrust-accept-btn-handler"]').should('be.visible').click()
    cy.get('li[data-test-id="UserAccount"]').click()
    cy.get('div[class="sc-fzXfME flFoqX"]').click({force:true})
    cy.get('input[data-testid="EmailField"]').eq(0).click({force:true})
    cy.get('input[data-testid="EmailField"]').eq(0).type(cy.newEmail.newEmail())
    cy.get('input[data-testid="FirstnameField"]').eq(0).click({force:true})
    cy.get('input[data-testid="FirstnameField"]').eq(0).type(cy.name.name())
    cy.get('input[data-testid="LastNameField"]').eq(0).click({force:true})
    cy.get('input[data-testid="LastNameField"]').eq(0).type(cy.name.name())
    cy.get('input[name="password"]').eq(0).click({force:true})
    cy.get('input[name="password"]').eq(0).type(cy.password.password())
    cy.get('input[data-testid="CheckboxSubscribeToNewsLetter"]').eq(0).click({force:true})
    cy.get('button[id="onetrust-accept-btn-handler"]').click({force:true})
    cy.get('button[data-testid="RegisterSubmitButton"]').click({force:true})
    cy.get('div[data-test-id="Notification"]').then(($msg)=>{
      const text=$msg.text()
      expect(text).to.eq("Registrierung erfolgreich.Willkommen bei About You!")})
      cy.get('button[data-test-id="SearchButton"]').click()
      cy.get('input[placeholder="Suche nach Marken, Artikeln & mehr..."]').type("Shirt")
      cy.get('[title="Shirts & Tops"]').eq(1).click()
      cy.get('[data-test-id="ProductImage"]').eq(1).click()
      cy.get('[data-test-id="SizeBubble_available"]').eq(1).click()
      
      cy.get('[data-test-id="A2BButton"]').click()     
      cy.get('button[class="checkoutButton--3DjT- regular--2Nvoz"]').eq(1).click()
      cy.get('input[name="streetHouseNumber"]').eq(0).type(cy.address.address())
      cy.get('input[name="zipCode"]').eq(0).type(cy.zip.zip())
      cy.get('input[name="city"]').eq(0).type(cy.city.city())
      cy.get('input[name="birthDate"]').eq(0).type(cy.bdate.bdate())
      cy.get('div[class="is-selected delivery-option-selection__option delivery-option-sameAsBilling"]').click()
      cy.get('button[type="submit"]').eq(0).click({force:true})
    
    

})
   
 
})