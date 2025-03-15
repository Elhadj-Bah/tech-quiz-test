import Quiz from "../../client/src/components/Quiz";

describe("<Quiz />", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "/api/questions/random",
      },
      {
        fixture: "questions.json",
        statusCode: 200,
      }
    ).as("getRandomQuestion");
  });

  it("get the question", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
  });

  /*
  it("should render the End Quiz Button", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    // add test to grab other HTML
  });
  */
});
