/// <reference types="cypress" />
export class KatanaLogin {

    inputEmail() {

        return cy.get('input[name="email"]');

    }
    inputPassword() {

        return cy.get('input[name="password"]');

    }
    signInBtn() {

        return cy.get('button[name="submit"]');

    }
    saleTabBtn() {
        return cy.get('#salesTab', { timeout: 30000 });
    }
    
}