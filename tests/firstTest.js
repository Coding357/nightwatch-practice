module.exports = { 
    'First test case' (browser) {
        const emailValue = 'global.admin@soprex.com'   
        const passValue = 'First132.'
        
        const loginPage = browser.page.Login();
        const MenuNavigation = browser.page.MenuNavigation();      
        const ModalWindow = browser.page.ModalWindow();      
        
        loginPage
            .navigate()
            .setValue('@emailSelector', emailValue)
            .setValue('@passSelector', passValue)
            .login()
            .pause(2000);
           
        MenuNavigation
            .addNewLanguage()
            .pause(2000);
        
        ModalWindow
            .LanguageName()
            .LanguageStatus()
            .LanguageOwner()
            .pause(2000)
            .SaveButton()
            .pause(500)
            .saveScreenshot('tests_output/proba.png');
    }
}