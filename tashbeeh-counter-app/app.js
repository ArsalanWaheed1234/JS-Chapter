let val = document.getElementById("value");
let counter=0;
function increment(){
    counter++;
val.innerText=counter;
console.log(counter)
}
function decrement(){
if (counter == 0){
    counter=0;
}
else{    counter--;
    val.innerText=counter;
    console.log(counter)}
}
