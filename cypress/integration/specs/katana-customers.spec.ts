import { KatanaLogin } from '../../page-objects/katana-login.page';
import { CustomerCreation } from '../../page-objects/customer-creation.page';
import { ContactCustomer } from '../../page-objects/katana-contact.page';

const login = new KatanaLogin();
const customer = new CustomerCreation();
const contact = new ContactCustomer();


describe('Customer Functionality Testing', () => {

    it('Login To Katana app and navigate to customers page',() => {

        cy.visit(Cypress.env('webURL'));        
        login.inputEmail().type(Cypress.env('userName'));
        login.inputPassword().type(Cypress.env('userPassowrd')); 
        login.signInBtn().click(); 
        login.saleTabBtn().should('be.visible');        
    });

    it('Verify create new user functionality',() => {

        cy.fixture('/data/customerData.json').then((custData) => {            

                customer.plusIconBtn().click();
                customer.customerLinkBtn().click();
                cy.log("Customer Page opened Successfully");
                customer.customerPageTxt().invoke('text').should('contain', 'Customer');

                customer.inputFirstName().type(custData.firstName);
                customer.inputLastName().type(custData.lastName);
                customer.inputCompanyName().type(custData.companyName);
                customer.inputEmail().type(custData.email, {force: true, delay:100});
                customer.inputPhone().type(custData.phone);
                customer.inputComment().type(custData.comment, {delay:100});                
                customer.inputDefaultBillingAddress().click();

                customer.BillingAddressHeader().should('have.text', 'Billing Address');

                // customer.inputFirstName().last().type(custData.firstName);
                // customer.inputLastName().last().type(custData.lastName );
                // customer.inputCompanyName().last().type(custData.companyName);       
                // customer.inputPhone().last().type(custData.phone);

                customer.inputAddressLineOne().type(custData.addressLine1, {force: true});
                customer.inputAddressLineTwo().type(custData.addressLine2, {force: true});
                customer.inputCityName().type(custData.city, {force: true});
                customer.inputStateName().type(custData.state, {force: true});
                customer.inputZipCode().type(custData.zip, {force: true});
                customer.inputCountryName().type(custData.country, {force: true});
                customer.clickOKBtn().click();

                customer.saveChangesMessage().should('be.visible').and('have.text', 'All changes saved');            

        });

    });

    it('Retrieve newly created user functionality',() => {

        contact.contactsMenuTab().click();
        contact.inputEmailToFilterCustomer().type("test@customer.com{enter}");
        contact.customerRetrievedEmail().should('contain', 'test@customer.com');

    });

    it('Update newly created user functionality',() => {

        contact.inputEmailToFilterCustomer().clear();
        contact.inputEmailToFilterCustomer().type("test@customer.com");

        contact.customerRetrievedName().first().click();
        customer.inputEmail().clear();
        customer.inputEmail().type("customer@emailupdated.com");
        customer.customerPageTxt().click();

        customer.saveChangesMessage().should('be.visible').and('have.text', 'All changes saved');
        customer.customerDialogCrossBtn().click();
        contact.inputEmailToFilterCustomer().clear();
        contact.inputEmailToFilterCustomer().type("customer@emailupdated.com{enter}");
        contact.customerEmailAddress().first().should('contain', 'customer@emailupdated.com');        


    });

    it('Delete newly created user functionality',() => {

        // Cypress.on('uncaught:exception', (err, runnable) => {

        //     return false;
        // })

        contact.inputEmailToFilterCustomer().clear();
        contact.inputEmailToFilterCustomer().type("customer@emailupdated.com{enter}");
        contact.customerRetrievedName().click();
        customer.customerDialogThreeDotBtn().click();
        customer.customerDialogDeletetBtn().click();        
        customer.customerConfirmDeleteBtn().click({ force: true });
        contact.inputEmailToFilterCustomer().clear();   
        contact.inputEmailToFilterCustomer().type("customer@emailupdated.com", {force: true});        
        contact.retrievedUserGrid().should('not.have.text');

    });

});