module.exports = {
  'Login Test' : function (browser) {
    browser
      .url('http://login.salesforce.com')
      .waitForElementVisible('body', 20000)
      .maximizeWindow()
      .setValue("input[name='username']", 'abc@gmail.com')
      .setValue("input[name='pw']",'***************')
      .click("input[type = 'submit']")
      .pause(10000)
      .waitForElementVisible("#setupLink",20000)
  },

  'Payment Scheduler Home' : function(browser) {
    browser
      .useXpath()
      .waitForElementVisible(".//*[@id='writeId_Tab']/a",20000)
      .pause(5000)
      .click(".//*[@id='writeId_Tab']/a")
      .pause(10000)
	  .end();    
  }   
  
}