function table(){
    let userInput =document.querySelector("#userInput").value;
    let range =document.querySelector("#range").value;
    let result=""
    for (let i=1; i<= range ; i++){
       result +=`${userInput}  X  ${i}  =  ${userInput*i} \n`
    }
    document.querySelector("#result").innerText=result
}


