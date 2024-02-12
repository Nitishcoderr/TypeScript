const User = {
    name:"Nitish",
    email:"nitish@gmail.com",
    inActive:true
}

// function createUser({name:string, isPaid:boolean}){}

// let newUser = {name:"Nitish",isPaid:false}

// createUser(newUser)

function createCourse():{name:string, price:number}{
    return{name:'react',price:3232} 
}

// TYPE ALIASES-Type Aliases allow defining types with a custom name (an Alias).
// type User = {
//     name:string;
//     email:string;
//     isActive:boolean
// }


// function createUser(user:User): User{
//     return {name:"",email:"",isActive:true}
// }

// createUser({name:"",email:"",isActive:true})
 

type User = {
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    cardDetail?:number
}

let myUser:User = {
    _id:"124",
    name:"d",
    email:"erre@gmail.com",
    isActive:false
}

type cardNumber = {
    cardNumber:string
}
type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}

myUser.name="efewrf"
export{}  