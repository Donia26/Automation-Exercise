Feature: Homepage

  Scenario: Verify the homepage is loaded correctly
    Given I am on the Automation Exercise homepage
    Then the homepage is loaded correctly

  Scenario: Navigate to different sections from the homepage
    Given I am on the Automation Exercise homepage
    When I click on the "Products" navigation item
    Then the Products page is loaded correctly