module.exports = {
    //url: 
    elements: {
        languageNameDropDown: {
            selector: '.col-md-5:nth-child(1) div:nth-child(2) .ui-autocomplete-dropdown'
        },
        language: {
            selector: '//li[contains(.,"Basque")]',
            locateStrategy: 'xpath'
        },
        languageStatusDropDown: {
            selector: '.form-group > app-select .ui-autocomplete-dropdown'
        },
        languageStatusInactive: {
            selector: '.ui-autocomplete-list-item:nth-child(2)'
        },
        languageOwnerDropDown: {
            selector: '.row:nth-child(4) .ng-untouched .ui-autocomplete-dropdown'
        },
        languageOwner: {
            selector: '.ui-autocomplete-list-item:nth-child(15)'
        },
        saveButton: {
            selector: '//button[contains(.,"Save")]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        LanguageName() {
            return this
                .click('@languageNameDropDown')
                .click('@language')
        },
        LanguageStatus() {
            return this
                .click('@languageStatusDropDown')
                .click('@languageStatusInactive')
        },
        LanguageOwner() {
            return this
                .click('@languageOwnerDropDown')
                .click('@languageOwner')
        },
        SaveButton() {
            return this
                .click('@saveButton')
        }

    }]


};