"use strict";
// class User{
//     email:string;
//     name:string;
//     private readonly city:string = "";
//     constructor(email:string,name:string) {
//         this.email = "email";
//         this.name = "name";
//         this.city = "city"
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "delhi";
    }
    get getAppleEmail() {
        return `Your Apple Email is ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more thann 1');
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const nitish = new User("n@gmial.com", "nitish");
// nitish.city = 'Bangalore'; 
