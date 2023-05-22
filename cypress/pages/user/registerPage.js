class Register {

    constructor() {
        this.firstNameInput = '[id="firstname"]';
        this.surnameInput = '[id="surname"]';
        this.emailInput = '[id="email"]';
        this.passwordInput = '[id="password1"]';
        this.repeatPasswordInput = '[id="password2"]';
        this.acceptTerms = '[id="cbAgr"]';
        this.captcha = '[id="recaptcha-anchor"]'
        this.registerBtn = '[id="btnfind"]';
        this.successMsgLabel = '.message.success';
    }

    get FirstNameInput() {
        return cy.get(this.firstNameInput);
    }

    get SurnameInput() {
        return cy.get(this.surnameInput);
    }

    get EmailInput() {
        return cy.get(this.emailInput);
    }

    get PasswordInput() {
        return cy.get(this.passwordInput);
    }

    get RepeatPasswordInput() {
        return cy.get(this.repeatPasswordInput);
    }

    get AcceptTerms() {
        return cy.get(this.acceptTerms);
    }

    get Captcha() {
        return cy.get(this.captcha);
    }

    get RegisterBtn() {
        return cy.get(this.registerBtn);
    }

    get SuccessMsgLabel() {
        return cy.get(this.successMsgLabel);
    }

    registerUser(){
        const aleatoryString = Math.random().toString(36).slice(2);
        this.FirstNameInput.type('testName')
        this.SurnameInput.type('testSurname')
        this.EmailInput.type(aleatoryString + '@gmail.com')
        this.PasswordInput.type('123654789Test$$')
        this.RepeatPasswordInput.type('123654789Test$$').debug()
        this.AcceptTerms.click()

        cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
            .then($iframe => {
                const $body = $iframe.contents().find('body');
                cy.wrap($body)
                    .find("span[role='checkbox']")
                    .click()
            })

        this.RegisterBtn.click()
    }
};

const register = new Register();
export default register;