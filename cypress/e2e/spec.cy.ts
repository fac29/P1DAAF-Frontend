describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
  });
});

describe("home page", () => {
  it("the h1 contains the correct text", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").contains("Take a Quiz");
  });

  it("the features on the homepage are correct", () => {
    // cy.get(".bg-orange-500").click();
    // cy.get(":nth-child(1) > .text-white > span").click();
    // cy.get(".mx-2").should("exist");
    cy.get("a").find("a").click();
  });
});
