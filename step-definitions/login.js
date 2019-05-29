//Step definition for Login

const { browser } = require('nightwatch-api');
const { Given, And, Then} = require('cucumber');
const emailValue = 'global.admin@soprex.com';   
const passValue = 'First132.';
const loginPage = browser.Login()

Given(/^I open login page page$/, () => {
    return loginPage
        .navigate()
        .waitForElementVisible('body', 1000);
});

And(/^I enter email$/, () => {
    return loginPage
        .setValue('@emailSelector', emailValue);
});


And(/^I enter password$/, () => {
    return loginPage
        .setValue('@passSelector', passValue);
});


Then(/^I click login button$/, () => {
  return loginPage
    .login()
     .pause(2000);

});


