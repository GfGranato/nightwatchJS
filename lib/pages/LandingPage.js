const landingPageActions = {
  accesApplication : function () {
    return this.navigate(this.url)
  },

  clickBtnNegateCookies: function () {
    return this. click('@btnNegateCookies')
  },

  validateLoadSuccessfull: function () {
    return this.assert.visible('@pageHeader')
  },
  
  validateVideoVisible: function () {
        return this.assert.visible('@introductionVideo')
  },

  scrollToFooter: function () {
      return this.getLocationInView('@gettingStarted')
  },

  isFooterVisible: function (element) {
    return this.assert.visible('@gettingStarted')
},

  isTextPresent: function (text) {
    let element = '';
    switch (text) {
      case 'Why Cypress':
        element = '@whyCypress'
       
      case 'Installing Cypress':
        element = '@installingCypress'
        
      case 'Write your first test':
        element = '@writeFirstStep'
        
      case 'How Cypress works':
        element = '@howCypressworks'
    }

    return this.assert.textContains(element, text)
  }
}

module.exports = {
  url: 'https://www.cypress.io',
  commands: [landingPageActions],
  elements: {
    pageHeader: 'nav[data-cy="main"]',
    introductionVideo: {
      selector: '//astro-island//video',
      locateStrategy: 'xpath'
    },
    gettingStarted:{
      selector: "//h2[.='Getting started']",
      locateStrategy: 'xpath'
    },
    whyCypress: {
      selector: "//a[contains(.,'Why Cypress')]",
      locateStrategy: 'xpath'
    },
    installingCypress: {
      selector: "(//a[contains(.,'Installing Cypress')])[last()]",
      locateStrategy: 'xpath'
    },
    writeFirstStep :{
      selector:  "//a[contains(.,'Write your first test')]",
      locateStrategy: 'xpath'
    },
    
    howCypressworks: {
      selector: "//a[contains(.,'How Cypress works')]",
      locateStrategy: 'xpath'
    },

    btnNegateCookies: {
      selector: "//button[contains(.,'Negar')]",
      locateStrategy: 'xpath'
    },
  }
};
