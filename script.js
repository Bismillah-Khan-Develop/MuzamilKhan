let fval = "";
let inbox = document.querySelector("#numinput")
let numbers = document.querySelectorAll(".numbers");
Array.from(numbers).forEach((number)=>{
    number.addEventListener("click",(e)=>{
         if(e.target.innerHTML == "="){
            fval = eval(fval)
            inbox.value = fval;
         }else if (e.target.innerHTML == "C"){
            fval = ""
            inbox.value = fval
         }else{
            fval = fval + e.target.innerHTML
         inbox.value = fval;
         }
    })
})