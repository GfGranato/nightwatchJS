const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require("chai");

Given('I access the application', () => {
    console.log('I am in the Given step')
    browser.navigateTo('https://google.com/')
})

When('I do something', () => {
    console.log('I am in the When step')
})

Then('the assert is true', () => {
    console.log('I am in the Then step')
})

let count = 0;
Given("I'm a user", () => {
  console.log("Starting test...");
});

When("I sum {int} and {int}", (a, b) => {
  count = a + b;
});

Then("The value is {int}", (value) => {
  expect(count).to.equal(value)  
});