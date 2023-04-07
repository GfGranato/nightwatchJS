# **Nightwatch JS**

This project seeks to automate your website using the [Nightwatch JS framework](https://nightwatchjs.org) and JavaScript.\
For the automation I choose to use [Cucumber](https://cucumber.io) to document the Scenarios.\
The main branch contains the core functionality of the project, while other branches will be created for specific test cases.

## **Prerequisites**
Google chrome or Mozilla Firefox installed

## **Installation**
Check the version of your browser and make sure that it matches the version specified in the code,
To do this, update the [chromedriver](package.json) or [geckodriver](package.json) in package.json as necessary. Then, execute the following command:
 ``` 
 npm install
 ``` 
 to download the dependencies 

## **How to Use**
To execute the automation, you can run the command:
```
npm test
```
wich is defined at the [package.json](package.json) file or run the command:
```
npx nightwatch --env cucumber-js 
```
To select an specific browser, at [line 54 in nightwatch.conf.js](nightwatch.conf.js?plain=1#L54) write the desired browser like:
- firefor
- chrome
- edge

## **Architecture**
The architecture selected for the project is Page Object model.\
The scenarios are located in the test/feature folder, while the steps are located in the test/step_definitions folder. The actions and mapped elements are located in the lib/pages folder.
## **Testing**
In this example, I chose to automate the Cypress website using Nightwatch. My first scenario is to validate the landing page, and a scenario outline is used to validate the footer. More scenarios will be added in the future

## **Contributing**
Please feel free to leave comments on my social media and email me to suggest improvements for this framework's performance and organization.

## **License**
Copyright © 2023 [Guilherme Granato](https://github.com/GfGranato) \
This project is MIT licensed

## **Author**
Guilherme Granato \
 [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/guilherme-granato/)
 [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/GfGranato/)

## **Acknowledgments**
This little project helped me to learn more about testing frameworks, and feel free to use it in your own projects
