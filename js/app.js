const email=document.getElementById("email");
const btn=document.querySelector(".button");
const isubmit=document.querySelector(".i-submit");
const errorE=document.querySelector(".error-E");
const boxInputE=document.querySelector(".inputE");
btn.addEventListener("click",()=>{
    btn.classList.add("active");
    if(email.value.includes("@") && email.value.includes(".com")){
        errorE.classList.remove("Visible");
        btn.classList.remove("active");
        isubmit.classList.remove("active");
        boxInputE.classList.remove("active");
        
    }else{
        errorE.classList.add("Visible");
        isubmit.classList.add("active");
        boxInputE.classList.add("active");
    }
})
