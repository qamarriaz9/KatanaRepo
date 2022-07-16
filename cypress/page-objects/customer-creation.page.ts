/// <reference types="cypress" />
export class CustomerCreation {

    plusIconBtn() {
        return cy.get('#globalAdd');
    }

    customerLinkBtn() {
        return cy.get('a[href="/customer"]');
    }

    customerPageTxt() {
        return cy.get('span.MuiTypography-caption:nth-child(1)', { timeout: 30000 });
    }

    inputFirstName() {

        return cy.get('input[name="firstName"]');

    }

    inputLastName() {

        return cy.get('input[name="lastName"]');

    }

    inputCompanyName() {

        return cy.get('input[name="company"]');

    }

    inputDisplayName() {

        return cy.get('input[id="displayNamePicker"]');

    }


    

    inputEmail() {

        return cy.get('input[name="email"]');

    }

    inputPhone() {

        return cy.get('input[name="phone"]');

    }

    inputComment() {

        return cy.get('input[name="comment"]');

    }

    inputDefaultBillingAddress() {

        return cy.get('input[name="defaultBillingAddress"]');

    }
    BillingAddressHeader() {

        return cy.xpath('//h2[contains(text(),"Billing Address")]');

    }
    inputAddressLineOne() {

        return cy.get('input[name="line1"]');

    }

    inputAddressLineTwo() {

        return cy.get('input[name="line2"]');

    }

    inputCityName() {

        return cy.get('input[name="city"]');

    }

    inputStateName() {

        return cy.get('input[name="state"]');

    }
    inputZipCode() {

        return cy.get('input[name="zip"]');

    }
    inputCountryName() {

        return cy.get('input[name="country"]');

    }

    clickOKBtn() {

        return cy.get('#submitButton');

    }

    saveChangesMessage() {

        return cy.xpath('//div[contains(text(),"All changes saved")]');

    }

    customerDialogCrossBtn() {
        return cy.get('button.MuiButtonBase-root.MuiIconButton-root.print-hide');
    }

    customerDialogThreeDotBtn() {
        return cy.xpath('//span[@class="print-hide"]/button[1]');
    }

    customerDialogDeletetBtn() {
        return cy.xpath('//span[contains(text(),"Delete")]');
    }

    customerConfirmDeleteDialogHeader() {
        return cy.xpath('h2[class="MuiTypography-root MuiTypography-h6"]');
    }

    customerConfirmDeleteBtn() {
        return cy.get('button[data-testid="confirmDeleteButton"]');
    }


}