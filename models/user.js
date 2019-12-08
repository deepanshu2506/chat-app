sha256 = require('js-sha256').sha256;

class User{
    constructor(firstname,lastname,username,password,email,mobile){
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = sha256(password);
        this.email = email;
        this.mobile = mobile;

    }
}

module.exports = User;