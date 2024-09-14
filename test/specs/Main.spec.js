// const specReporter = require('@wdio/spec-reporter');

describe('First test', () =>{

    it('my first login test', async () =>{

        await browser.url('https://www.google.com')

        await $('[name="q"]').setValue('iphone 11')
        await browser.keys('Enter')
        await browser.pause(2000)

        
    })
})