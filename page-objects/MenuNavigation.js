module.exports = {
    url: 'http://spxws04:9658/#/home/customers',
    elements: {
        translationMenu: {
            //locateStrategy:'css',
            selector: '.aside-sub-menu-toggle'
        },
        languageMenu: {
            locateStrategy: 'xpath',
            selector: '//a[contains(text(),"Languages")]'
        },
        AddNewLanguage: {
            selector: ".btn-link:nth-child(2)"
        },
    },
    commands: [{
        addNewLanguage() {
            return this
                .click('@translationMenu')
                .click('@languageMenu')
                .click('@AddNewLanguage');
        }
    }]
};