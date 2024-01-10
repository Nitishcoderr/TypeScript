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



// function getValue(myVal:number) : boolean {
//     if(myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }


const getHello = (s:string) : string => {
    return ""
}

const heros = ["thor","spiderman","ironman"]

heros.map(hero=>{
    return `Hero is ${hero}`
})


function consoleError(errMsg:string):void{
    console.log(errMsg);

}


function handleError(errMsg:string):never{
    throw new Error(errMsg)

}


export {}