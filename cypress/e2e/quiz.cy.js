describe("Quiz", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the Quiz component", () => {
    cy.get("button").contains("Start Quiz");
  });

  it("get the question", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });
});
