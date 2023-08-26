describe('App', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  })
  it("should display the title",()=>{
    cy.get("h1").contains("My React App");
  });
})