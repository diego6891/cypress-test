class User {

    constructor() {
        this.profileMenu = 'a[href*="profile"]';
        this.myLocationsMenu = 'a[href*="my-locations"]';
        this.saveBtn = '[id="btnfind"]';
        //My Account Information
        this.firstNameInput = '[id="firstname"]';
        this.surnameInput = '[id="surname"]';
        this.aboutMeInput = '[id="aboutme"]';
        this.successMsgLabel = '.message.success';
        //My Locations
        this.firstEditLink = 'a[href*="edit-location?id="]';
        this.locationNameInput = '[id="locname"]';
        this.latitudeInput = '[id="loclat"]';
        this.longitudeInput = '[id="loclng"]';
        this.countryDropdown = '[id="country_id"]';
        this.listLocationCheck = '[id="locpriv"]';
        this.locationInfoInput = '[id="locinfo"]';
    }

    get EmailInput() {
        return cy.get(this.emailInput);
    }

    get PasswordInput() {
        return cy.get(this.passwordInput);
    }

    get LoginBtn() {
        return cy.get(this.loginBtn);
    }

    get ProfileMenu() {
        return cy.get(this.profileMenu);
    }

    get MyLocationsMenu() {
        return cy.get(this.myLocationsMenu);
    }

    get FirstNameInput() {
        return cy.get(this.firstNameInput);
    }

    get SurnameInput() {
        return cy.get(this.surnameInput);
    }

    get AboutMeInput() {
        return cy.get(this.aboutMeInput);
    }

    get SaveBtn() {
        return cy.get(this.saveBtn);
    }

    get SuccessMsgLabel() {
        return cy.get(this.successMsgLabel);
    }

    //My Locations
    get FirstEditLink() {
        return cy.get(this.firstEditLink).first();
    }

    get LocationNameInput() {
        return cy.get(this.locationNameInput).first();
    }

    get LatitudeInput() {
        return cy.get(this.latitudeInput).first();
    }

    get LongitudeInput() {
        return cy.get(this.longitudeInput).first();
    }

    get CountryDropdown() {
        return cy.get(this.countryDropdown).first();
    }

    get ListLocationCheck() {
        return cy.get(this.listLocationCheck).first();
    }

    get LocationInfoInput() {
        return cy.get(this.locationInfoInput).first();
    }
};

const user = new User();
export default user;