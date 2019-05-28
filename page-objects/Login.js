module.exports = {
    url: 'http://spxws04:9658/#/login',
    elements: {
        emailSelector:'#userMail',
        passSelector: '#password',
        logInButtonSelector: 'button[type="submit"]',
    },
    commands: [{
        login() {
            //const page = this;  --> sad je ovo visak
            return this 
                .click('@logInButtonSelector');
        }
    }]
};