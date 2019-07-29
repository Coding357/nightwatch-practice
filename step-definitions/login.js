//Step definition for Login

const { browser } = require('nightwatch-api');
const { Given, When, And, Then} = require('cucumber');
const emailValue = 'global.admin@soprex.com';   
const passValue = 'First132.';
const loginPage = browser.page.Login()

console.log(loginPage)

Given(/^I open login page page$/, () => {
    const loginPage = browser.page.Login()
    return loginPage
        .navigate()
        .waitForElementVisible('body', 1000);
});

When(/^I enter email$/, () => {
    const loginPage = browser.page.Login()
    return loginPage
        .setValue('@emailSelector', emailValue);
});


And(/^I enter password$/, () => {
    const loginPage = browser.page.Login()
    return loginPage
        .setValue('@passSelector', passValue);
});


And(/^I click login button$/, () => {
    const loginPage = browser.page.Login()
    return loginPage
        .login()
        .pause(2000);
});
Then(/^I should be on the home page$/, () => {
    return browser
        .assert.urlContains('home')
        .pause(2000);
});


