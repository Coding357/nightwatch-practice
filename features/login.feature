//Feature file for Login

Feature: Login page

Scenario: Login into account

  Given I open login page
  When I enter email
  And I enter password
  And I click login button
  Then I should be on the home page
  