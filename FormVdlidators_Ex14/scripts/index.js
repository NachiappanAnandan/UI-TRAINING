const form  = document.getElementsByTagName("form")[0];


const regex = {
    firstname:/^[a-zA-Z]{1,30}$/,
    lastname:/^[[a-zA-Z]{1,30}$/,
    email:/^\w+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/g,
    contact:/^[0-9]{10}$/,
    pincode:/^[0-9]{6}/,
    cardNumber:/[0-9]{16}/,
    cardExpiry:/^[2-9][0-9][2-9][3-9]/,
    ccv:/^[0-9]{3,4}$/

}

const complete =() => {
    form.querySelectorAll("input").forEach(element => {
       if(element.value == ""){
        element.classList.add("colorChange")
        element.nextElementSibling.textContent =element.name +" is required.";
        element.nextElementSibling.style.display = "block";      
       }else if(!regex[element.id].test(element.value)){ 
       element.nextElementSibling.innerHTML =element.name +" is not valid.";
       }else{
         element.classList.remove("colorChange");
          element.nextElementSibling.style.display = "none";      
       }
    });    
}