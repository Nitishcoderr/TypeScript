const User = {
    name:"Nitish",
    emial:"nitish@gmail.com",
    inActive:true
}

function createUser({name:string, isPaid:boolean}){}

let newUser = {name:"Nitish",isPaid:false}

createUser(newUser)

function createCourse():{name:string, price:number}{
    return{name:'react',price:3232}
}

export{}