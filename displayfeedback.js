function displayfeedback(){
    var views=JSON.parse(localStorage.getItem("viweFeedback"));
    var result="";
    for(var i=0;i<views.length;i++){
       result+=`<div class="card py-5 mb-5" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">${views[i].name}</h5>
         <p class="card-text">${views[i].msg}</p>
       </div>
     </div>
       `
    }
    final.innerHTML=result;
    // alert("hi");
}
displayfeedback();