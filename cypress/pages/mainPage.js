
class Main {

    constructor() {
        this.acceptCookiesBtn = '[id="onetrust-accept-btn-handler"]';
        this.userLoginMenu = 'a[href*="/user/login"]';
        this.myAccountMenu = 'a[href*="/user/"]';
        this.tvSeries = '#myTopnav [href*="/tv-series-locations"]';
        this.geoTools = 'a[href*="/geo-tools"]';
    }

    get AcceptCookiesBtn() {
        return cy.get(this.acceptCookiesBtn);
    }

    get UserLoginMenu() {
        return cy.get(this.userLoginMenu);
    }

    get MyAccountMenu() {
        return cy.get(this.myAccountMenu);
    }

    get TvSeries() {
        return cy.get(this.tvSeries);
    }

    get GeoTools() {
        return cy.get(this.geoTools);
    }
};

const main = new Main();
export default main;