//Feature file for Login

Feature: Login page

Scenario: Login into account

  Given I open login page
  And I enter email
  And I enter password
  Then I click login button
  