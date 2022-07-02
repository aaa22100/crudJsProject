// let logInItems=document.getElementsByClassName("logIn");
function logOut(){
    localStorage.setItem("logedIn","0");
    for(var i=0;i<logInItems.length;i++){
        logInItems[i].classList.add("hide");
    }
    for(var i=0;i<logOutItems.length;i++){
        logOutItems[i].classList.remove("hide");
    }
    // alert("yes");
}