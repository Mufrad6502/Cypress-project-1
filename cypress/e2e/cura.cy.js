describe("Cura make appoinment",()=>{

  it("Visit The URL & make appoinment",()=>{
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").click().type("John Doe");
    cy.get("#txt-password").click().type("ThisIsNotAPassword");
    cy.get("#btn-login").click();
    cy.wait(2000)
    //Randomly selecting options from the dropdown
    cy.get('select').select(Math.floor(Math.random() * 3));
  });
})