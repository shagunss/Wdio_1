const { expect } = require('chai');
describe('Login_Test', async()=>{

it('Login Pass', async()=>{
    //webdriverio
   await browser.url('https://practicetestautomation.com/practice-test-login/')

    // console.log(await browser.getTitle())
    await $("#username").setValue('student')
    await $("#password").setValue('Password123')

    await $("#submit").click()
    const welcomeMessage = await $("//h1[contains(text(),'Logged In Successfully')]");
        
    // Get the actual text from the element
    const actualText = await welcomeMessage.getText();
    
    // Assert that the text is as expected
    const expectedText = "Logged In Successfully";
    await browser.waitUntil(
        async () => (await welcomeMessage.getText()) == 'Logged In Successfully', //here test case will pass
        {
            timeout: 5000, // wait for up to 5 seconds
            timeoutMsg: 'Expected text did not appear after login'
        }
    );
    expect(actualText).to.equal(expectedText);
    await browser.pause(3000)

    


})


})








