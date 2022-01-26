describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Tuesday", () => {
    cy.visit("/")
    cy.contains("li", "Tuesday")
      .click()
      .should("have.css", "background-color", "rgb(242, 242, 242)");
  })

  //This doesnt work, says [data-testid=day] should exist but it doesnt
  // it("should navigate to Tuesday", () => {
  //   cy.visit("/")
    
  //   cy.contains("[data-testid=day]", "Tuesday")
  //     .click()
  //     .should("have.class", "day-list__item--selected")
  // })

  //This below doesnt work
  // it("should navigate to Tuesday", () => {
  //   cy.visit("/")
  //   cy.contains("li", "Tuesday")
  //     .click()
  //     .should("have.css", "background-color", "rgb(242, 242, 242)");
  // })

});