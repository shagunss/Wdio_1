class LoginPage {

    get username_txt() {
        return $('#username')
    }

    get password_txt() {
        return $('#password')
    }

    get login_btn()
    {
        return $('button[type = "submit"]')
    }

    get Login_message()
    {
        return $('#flash')
    }


    async login(username, password)
    {
        await this.username_txt.setValue(username)
        await this.password_txt.setValue(password)
        await this.login_btn.click()
    }

    async checkMessage(msg)
    {
        await expect(this.Login_message).toHaveText(msg)

    }
}

module.exports = new LoginPage()