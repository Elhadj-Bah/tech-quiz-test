import { describe } from "vitest";

describe('Quiz', () => {
    it('should render the Quiz component', () => {
        cy.visit('http://localhost:3001/quiz');
        cy.get('button').contains ('Start Quiz');
    })
    it('get the question', () => {
        cy.get('button').click();
        cy.request('http://localhost:3001/quiz').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(10);
        })  
    });
                                            
