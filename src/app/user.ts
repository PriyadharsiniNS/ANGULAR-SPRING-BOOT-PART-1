export class User {
    email : string;
    password: string;
    username : string;
    mobileNumber : string;
    userRole : string;
  confirmPassword: any;

    constructor()
    {
        this.email = '';
        this.password = '';
        this.username = '';
        this.mobileNumber = '';
        this.userRole = '';
    }
}
