function addTwo(num:number){
    return num + 2
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,isPaid:boolean){}

function login(email:string,name:string,isPaid:boolean = true){}

addTwo(5)
getUpper("thor")
signUpUser("niti","nit@gmail.com",true)
login("Nir@gmail","Raj")

export {}