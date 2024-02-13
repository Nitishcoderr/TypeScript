let score:number | string  = 33

score = 44

score = "hello"

type User = {
    name:string;
    id:number
}

type Admin = {
    username:string;
    id:number
}

let nitish: User | Admin = {name:"nitish",id:23}

nitish =  {username:"nk",id:43}


function getId(id:number|string){
    console.log(`DB id is:${id}`);

    getId(3)
    getId("3")
    
}


function getDbID(id:number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
}


//  ARRAY

let data: number[] = [1,2,3]
let data2: string[] = ["1","2","3"]
let data3:(string | number)[] = [1,2,'3']





export {}