import React from 'react';
import  Quiz from '../../src/components/Quiz'; 

describe('<Quiz />', () => {
    it('should render the Quiz component', () => {
        cy.mount(<Quiz />);
        beforeEach(() => {
            cy.intercept ('GET', '/api/questions/random', {
                body: [

                    {
                        "question": "How do you start a comment in Python?",
                        "answers": [
                          { "text": "//", "isCorrect": false },
                          { "text": "/*", "isCorrect": false },
                          { "text": "#", "isCorrect": true },
                          { "text": "<!--", "isCorrect": false }
                        ]
                       }
                ]
       
    }).as ('getQuestion');
    cy.get('button').contains ('Start Quiz');
    cy.get('button').click();
    cy.wait('@getQuestion');
        })
    }
    )
    it('get the question', () => {
        cy.get('button').click();
        cy.request('http://localhost:3001/quiz').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('question');
        } ) 
});