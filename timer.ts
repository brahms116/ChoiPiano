import { setTimeout } from "timers"



const wait = (ms:number)=>{
    return new Promise(resolve=>{setTimeout(resolve,ms)})
}

export default wait