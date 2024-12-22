let btn = document.querySelector("#btn");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
 btn.addEventListener('click', () =>{
    if(password.value ==="" || email.value ===""){
        alert("all feilds must be filled out");
        return false;
    }else if( email.value.indexOf("@")===-1 || email.value.indexOf(".")===-1){
        alert("please enter a valide")
    }
 })