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

  describe("Home page functionality", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
    });

    it("renders the homepage title", () => {
      cy.get(".text-4xl").contains("Take a Quiz");
    });
    it("renders the Start Quiz button", () => {
      cy.get(".bg-orange-500").should("exist");
    });
    it("clicks to start the quiz with dropdown selections (Geography & hard)", () => {
      cy.get(":nth-child(1) > .bg-blue-500")
        .select(2)
        .invoke("val")
        .should("eq", "Geography");
      cy.get(":nth-child(2) > .bg-blue-500")
        .select(3)
        .invoke("val")
        .should("eq", "hard");
      cy.get(".bg-orange-500").should("exist").click();
    });

    // Working on this now to start testing the questions

    // it("clicks to answer each question", () => {
    //   cy.get('[data-value="Rockies"]').should("exist").click();
    //   // cy.get(":nth-child(2) > .bg-blue-500")
    //   //   .select(3)
    //   //   .invoke("val")
    //   //   .should("eq", "hard");
    //   // cy.get(".bg-orange-500").should("exist").click();
    // });
  });
});
