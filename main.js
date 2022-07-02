var courseNameInput=document.getElementById("courseName");
var courseCategoryInput=document.getElementById("courseCategory");
var coursePriceInput=document.getElementById("coursePrice");
var courseDescInput=document.getElementById("courseDesc");
var addBtn=document.getElementById("addBtn");
var inputs=document.getElementsByClassName("inputs");
var deleteAllBtn=document.getElementById("deleteAllBtn");
if(JSON.parse(localStorage.getItem("coursesList"))==null){
    var courses=[];
}
else{
    var courses=JSON.parse(localStorage.getItem("coursesList"));
    displayData();
}

function displayData(){
    var result="";
    for(var i=0;i<courses.length;i++){
        result+=
        `<div class="card" style="width: 18rem;">
        <img src="${courses[i].imgUrl}" class="card-img-top" alt="course img" />
        <div class="card-body">
          <h4 class="card-title">${courses[i].name}</h4>
          <h5 class="card-title">${courses[i].category}</h5>
          <p class="card-text">${courses[i].desc}</p>
          <a class="btn btn-warning">${courses[i].price}</a>
          <p class="bg-white">${courses[i].beforPrice}</p>
        </div>
      </div>
        `
    }
    data.innerHTML=result;
}