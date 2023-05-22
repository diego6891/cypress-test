/// <reference types="cypress" />
import main from "../pages/mainPage.js";
import user from "../pages/user/userPage.js";
import register from "../pages/user/registerPage.js";
import login from "../pages/user/loginPage.js";
import tvSeries from "../pages/tvSeries/tvSeriesPage.js";
import geoTools from "../pages/geographicTools/geoToolsPage.js";

describe('Basic page interactions', () => {

    describe('Create new account', () => {

        it.skip('is able to create a new account', () => {
            cy.visit('/');
            main.AcceptCookiesBtn.click()
            main.UserLoginMenu.click()
            login.SignUpHereLink.click()
            register.registerUser()
            register.SuccessMsgLabel.invoke('text')
                .should('equal', 'Registered succesfully. Thank you for joining to latlong.net.')
        })
    })

    describe('Using existing account', () => {

        beforeEach(() => {
            cy.visit('/')
            main.AcceptCookiesBtn.click()
            main.UserLoginMenu.click()
            login.login("diegoiriarte@live.com.ar", "diegox");
        })

        it('is able to login', () => {
            cy.url().should('eq', 'https://www.latlong.net/user/')
        }) 

        it('is able to update Name, Surname and About Me fields on the My Account Information section', () => {
            user.ProfileMenu.click();
            
            const randomFirstname = Math.random().toString(36).slice(2);
            const randomSurname = Math.random().toString(36).slice(2);
            const randomAboutMe = Math.random().toString(36).slice(2);
            
            user.FirstNameInput.clear().type(randomFirstname)
            user.SurnameInput.clear().type(randomSurname)
            user.AboutMeInput.clear().type(randomAboutMe);
            user.SaveBtn.click()
    
            user.SuccessMsgLabel.invoke('text')
                .should('equal','Your profile succesfully updated.');
            user.FirstNameInput.invoke('val')
                .should('equal',randomFirstname);
            user.SurnameInput.invoke('val')
                .should('equal',randomSurname);
            user.AboutMeInput.invoke('val')
                .should('equal',randomAboutMe);
        })

        it('is able to edit location values', () => {
            main.MyAccountMenu.click()
            user.MyLocationsMenu.click()
            user.FirstEditLink.click()

            const aleatoryLocationName = Math.random().toString(36).slice(2);
            const aleatoryLatitude = Math.floor(Math.random() * 98) + 1;
            const aleatoryLongitude = Math.floor(Math.random() * 98) + 1;
            const aleatoryInfo = Math.random().toString(36).slice(2)

            user.LocationNameInput.clear().type(aleatoryLocationName)
            user.LatitudeInput.clear().type(aleatoryLatitude)
            user.LongitudeInput.clear().type(aleatoryLongitude)
            user.CountryDropdown.select("Albania")
            user.ListLocationCheck.uncheck()
            user.LocationInfoInput.clear().type(aleatoryInfo)

            user.SaveBtn.click()

            user.SuccessMsgLabel.invoke('text')
                .should('equal','Your location succesfully saved.');
            user.LocationNameInput.invoke('val')
                .should('equal',aleatoryLocationName);
            user.LatitudeInput.invoke('val')
                .should('equal', aleatoryLatitude+'.000000');
            user.LongitudeInput.invoke('val')
                .should('equal',aleatoryLongitude+'.000000');
            user.CountryDropdown.get('[selected="selected"]').invoke('text')
                .should('equal','Albania');
            user.ListLocationCheck.should('not.be.checked');
            user.LocationInfoInput.invoke('val')
                .should('equal',aleatoryInfo);
            user.CountryDropdown.select("Argentina")
            user.SaveBtn.click()
        })

        describe('Geographic Tools', () => {

            describe('Latitude and Longitude Finder feature', () => {

                it('provides the correct latitude and longitude after typing the city name and country', () => {
                    main.GeoTools.click()
                    geoTools.LatitudeLongitudeFinderTool.click()
    
                    geoTools.AddressFinderInput.type('Santa Fe, Argentina')
                    geoTools.FindBtn.click()
    
                    geoTools.LatLongText.invoke('text')
                            .should('equal','(-31.610659, -60.697292)');
                    geoTools.GpsCoordinatesLat.invoke('text')
                            .should('equal',"31° 36' 38.3724'' S");
                    geoTools.GpsCoordinatesLong.invoke('text')
                            .should('equal',"60° 41' 50.2512'' W");
                })
            })
    
            describe('Address to Latitude and Longitude feature', () => {
            
                it('provides the correct latitude and longitude after typing an address', () => {
                    main.GeoTools.click()
                    geoTools.AddressToLatLongTool.click()
    
                    geoTools.AddressInput.type('60TH St, Olds, AB T0M1P0')
                    geoTools.FindBtn.click()
    
                    geoTools.LatLongText.invoke('text')
                            .should('equal','(51.795021, -114.089157)');
                    geoTools.GpsCoordinatesLat.invoke('text')
                            .should('equal',"51° 47' 42.0756'' N");
                    geoTools.GpsCoordinatesLong.invoke('text')
                            .should('equal',"114° 5' 20.9652'' W");
                })
            })
    
            describe('Latitude and Longitude to Address feature', () => {
            
                it('it provides the correct address after typing the latitude and longitude', () => {
                    main.GeoTools.click()
                    geoTools.LatitudeLongitudToAddressTool.click()
    
                    geoTools.LatitudeReverseInput.type('-31.610659')
                    geoTools.LongitudeReverseInput.type('-60.697292')
                    geoTools.ConvertBtn.click()
    
                    geoTools.ReverseGeocodedAddressField.invoke('text')
                            .should('contain',"Calle Martínez 2685, S3016DNU Santa Fe Santa Fe");
                })
            })
        })
    })

    describe('TV Series', () => {
    
        it('leaves a comment on a TV Series', () => {
            cy.visit('/')
            main.AcceptCookiesBtn.click()
            main.TvSeries.click()
            tvSeries.Card13ReasonsWhy.click()

            cy.url().should('include', 'https://www.latlong.net/location/13-reasons-why-locations-235')

            tvSeries.CommentNameInput.type('test1')
            tvSeries.CommentTextInput.type('test2')
            tvSeries.SendBtn.click()

           tvSeries.ApprobalMsg.invoke('text')
                    .should('equal','Your comment saved successfully and will publish after approval.');
        })
    })
})