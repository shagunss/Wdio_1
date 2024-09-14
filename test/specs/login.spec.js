// const specReporter = require('@wdio/spec-reporter');

const LoginPage = require('../pages/login.page')
describe('Demo Tests', ()=>
{
    it('Login Test', async ()=>{

        browser.url('https://the-internet.herokuapp.com/login')

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await LoginPage.checkMessage(/You logged into a secure area!/)
        

        // await $('#username').setValue('tomsmith')

        // await $('#password').setValue('SuperSecretPassword!')

        // await $('button[type = "submit"]').click()

        // await $('#flash').getText();

        // await expect($('#flash')).toHaveText(/You logged into a secure area!/)

        
    })
})