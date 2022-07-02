let logInItems=document.getElementsByClassName("logIn");
let logOutItems=document.getElementsByClassName("logOut");
if(localStorage.getItem("logedIn")=="1"){
    for(var i=0;i<logInItems.length;i++){
        logInItems[i].classList.remove("hide");
    }
    for(var i=0;i<logOutItems.length;i++){
        logOutItems[i].classList.add("hide");
    }

}

localStorage.setItem("userName","admin");
localStorage.setItem("password","admin");

let name=document.getElementById("name");
let pass=document.getElementById("pass");

function check(){
    if(name.value==localStorage.getItem("userName") && pass.value==localStorage.getItem("password")){
       location.href = "index.html";
       localStorage.setItem("logedIn","1");
    }
    else{
        alert("user name or password wrong ! try again .");
    }
}
