Feature: Example
    As a user
    I want to check my Example
    So I can use the application

    Scenario: Validate introduction video
        Given the user access the application
        When the page loads
        Then the cypress introduction video will be visible

    Scenario Outline: Validate getting started footer options
        Given the user access the application
        When scrolls to the end of the page
        Then the footer should be visible
        And the option "<option>" should be clickable
        Examples:
            | option                |
            | Why Cypress           |
            | Installing Cypress    |
            | Write your first test |
            | How Cypress works     |
