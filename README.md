# **Nightwatch JS**

This project seeks to automate your website using the [Nightwatch JS framework](https://nightwatchjs.org) and JavaScript.\
For the automation I choose to use [Cucumber](https://cucumber.io) to documentate the Scenarios.\
The main branch is the base of this project, while other branches will be used for specific tests.

## **Prerequisites**
Google chrome or Mozilla Firefox installed

## **Installation**
Check the version of your browser and use the same version at the code, to do so update the [chromedriver](package.json) or [geckodriver](package.json) at package.json.
Then, execute the command:
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
In test/feature folder are the scenarios and in test/step_definitions are located the Steps.\
in lib/pages are the Actions and mapped elements

## **Testing**
In this example, for Nightwatch I picked the Cypress website to automate, so my first scenario is validate the Landing page and a scenario outline to validate the footer.
More scenarios will be added in the future.

## **Contributing**
Please, feel free to leave some comments at my social medias and email me to update this framework performance and organization.

## **Author**
Guilherme Granato \
 [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/guilherme-granato/)
 [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/GfGranato/)

## **Acknowledgments**
This little project helped me to learn more about testing frameworks and feel free to use it at your projects.
