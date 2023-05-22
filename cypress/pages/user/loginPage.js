class Login {

    constructor() {
        this.signUpHereLink = 'a[href*="register"]'
        this.emailInput = '[id="email"]';
        this.passwordInput = '[id="password1"]';
        this.loginBtn = '[title="Login"]';
    }

    get SignUpHereLink() {
        return cy.get(this.signUpHereLink).first();
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

    login (userName, password){
        this.EmailInput.type(userName);
        this.PasswordInput.type(password);
        this.LoginBtn.click();
    }
};

const login = new Login();
export default login;