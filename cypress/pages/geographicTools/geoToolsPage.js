class GeoTools {

    constructor() {
        this.latitudeLongitudeFinderTool = '.whitebg [title="Latitude and Longitude Finder"]';
        this.addressToLatLongTool = 'a[href*="/convert-address-to-lat-long.html"]';
        this.latitudeLongitudToAddressTool = 'a[href*="/Show-Latitude-Longitude.html"]';
        //Latitude and Longitude Finder
        this.addressFinderInput = '[id="place"]'
        //Get Lat Long from Address
        this.addressInput = '[placeholder="Type address here to get lat long"]'
        this.findBtn = '[id="btnfind"]'
        this.latLongText = '[id="latlngspan"]'
        this.gpsCoordinatesLat = '[id="dms-lat"]'
        this.gpsCoordinatesLong = '[id="dms-lng"]'
        //Latitude and Longitude to Address
        this.latitudeReverseInput = '[id="latitude"]'
        this.longitudeReverseInput = '[id="longitude"]'
        this.convertBtn = '[title="Show Lat Long converted address on Map"]'
        this.reverseGeocodedAddressField = '[id="address"]'
    }

    get LatitudeLongitudeFinderTool() {
        return cy.get(this.latitudeLongitudeFinderTool);
    }

    get AddressToLatLongTool() {
        return cy.get(this.addressToLatLongTool);
    }

    get LatitudeLongitudToAddressTool() {
        return cy.get(this.latitudeLongitudToAddressTool);
    }

    get AddressFinderInput() {
        return cy.get(this.addressFinderInput);
    }

    get AddressInput() {
        return cy.get(this.addressInput);
    }

    get FindBtn() {
        return cy.get(this.findBtn);
    }

    get LatLongText() {
        return cy.get(this.latLongText);
    }

    get GpsCoordinatesLat() {
        return cy.get(this.gpsCoordinatesLat);
    }

    get GpsCoordinatesLong() {
        return cy.get(this.gpsCoordinatesLong);
    }

    get LatitudeReverseInput() {
        return cy.get(this.latitudeReverseInput);
    }

    get LongitudeReverseInput() {
        return cy.get(this.longitudeReverseInput);
    }

    get ConvertBtn() {
        return cy.get(this.convertBtn);
    }

    get ReverseGeocodedAddressField() {
        return cy.get(this.reverseGeocodedAddressField);
    }
};

const geoTools = new GeoTools();
export default geoTools;