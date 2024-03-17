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


class User{

    protected _courseCount = 1

    private readonly city:string = "delhi";
    constructor(
        public email:string,
        public name:string,
        // private userId:string
        ) {

        }

        get getAppleEmail() : string{
            return `Your Apple Email is ${this.email}`
        }

        get courseCount() : number{
            return this._courseCount
        }

        set courseCount(courseNum) {
            if(courseNum <= 1){
                throw new Error('Course count should be more thann 1')
            }
            this._courseCount = courseNum
        }
}


class SubUser extends User {
    isFamily : boolean  = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const nitish = new User("n@gmial.com","nitish")

// nitish.city = 'Bangalore'; 