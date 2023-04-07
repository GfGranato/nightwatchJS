const {Given, When, Then} = require('@cucumber/cucumber');

Given('the user access the application', () => {
    let landingPage = browser.maximizeWindow().page.LandingPage()
    landingPage.accesApplication().clickBtnNegateCookies()
})

When('the page loads', () => {
    let landingPage = browser.page.LandingPage()
    landingPage.validateLoadSuccessfull()
})

Then('the cypress introduction video will be visible', () => {
    let landingPage = browser.page.LandingPage()
    landingPage.validateVideoVisible()
})

When('scrolls to the end of the page', () => {
    let landingPage = browser.page.LandingPage()
    landingPage.validateVideoVisible()
})

Then('the footer should be visible', () => {
    let landingPage = browser.page.LandingPage()
    landingPage.scrollToFooter()
              .isFooterVisible()
})

Then('the option {string} should be clickable', (option) => {
    let landingPage = browser.page.LandingPage()
    landingPage.isTextPresent(option)
})

