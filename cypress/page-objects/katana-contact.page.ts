/// <reference types="cypress" />
export class ContactCustomer {

    contactsMenuTab() {
        return cy.get('a[id="contactsTab"]');
    }

    inputEmailToFilterCustomer() {
        return cy.get('input[data-testid="emailFilterInput"]');
    }

    customerRetrievedEmail() {
        return cy.xpath('//span[contains(text(),"test@customer.com")]');
    }
    customerRetrievedName() {
        return cy.get('a[data-testid="cellName"]');
    }   

    customerEmailAddress() {
        return cy.xpath('//span[contains(text(),"customer@emailupdated.com")]');
    }

    retrievedUserGrid() {
        return cy.xpath('//div[@class="ag-center-cols-viewport"]');
    }

    

    
    

    
}




