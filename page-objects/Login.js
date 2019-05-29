//Page Object for Login

module.exports = {
    url: 'http://spxws04:9658/#/login',
    elements: {
        logInButtonSelector: 'button[type="submit"]'
    },
    commands: [{
        login() {
            return this 
                .click('@logInButtonSelector');
        }
    }]
};