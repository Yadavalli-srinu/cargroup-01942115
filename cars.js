let text=document.getElementById("text")
let output=document.getElementById("output")
function btn(){
    let capacity=6;
    let users=Number(text.value);
    let result=Math.ceil(users/capacity);
    output.textContent=result+"Cars required";
}
