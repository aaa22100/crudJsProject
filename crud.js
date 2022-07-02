var courseNameInput=document.getElementById("courseName");
var courseCategoryInput=document.getElementById("courseCategory");
var coursePriceInput=document.getElementById("coursePrice");
var courseDescInput=document.getElementById("courseDesc");
var addBtn=document.getElementById("addBtn");
var inputs=document.getElementsByClassName("inputs");
var deleteAllBtn=document.getElementById("deleteAllBtn");
var beforPrice=document.getElementById("beforPrice");
document.querySelector("#myFileInput").addEventListener("change",function(){
    const reader=new FileReader();
    reader.addEventListener("load",()=>{
        localStorage.setItem("recentImg",reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});
var currentIndex=0;
if(JSON.parse(localStorage.getItem("coursesList"))==null){
    var courses=[];
}
else{
    var courses=JSON.parse(localStorage.getItem("coursesList"));
    displayData();
}
addBtn.onclick=function(){
   if(addBtn.innerHTML=="Add Course"){
       addCourse();
   }
   else if(addBtn.innerHTML=="update course"){
       updateCourse();
    }
    displayData();
    clearForm();
}

function addCourse(){
    var course={
        name:courseNameInput.value,
        category:courseCategoryInput.value,
        price:coursePriceInput.value,
        beforPrice:beforPrice.value,
        desc:courseDescInput.value,
        imgUrl:localStorage.getItem("recentImg")
    }
    courses.push(course);
    localStorage.setItem("coursesList",JSON.stringify(courses));
}
function displayData(){
    var result="";
    for(var i=0;i<courses.length;i++){
        result+=`
        <tr>
            <td>${i}</td>
            <td>${courses[i].name}</td>
            <td>${courses[i].category}</td>
            <td>${courses[i].price}</td>
            <td>${courses[i].beforPrice}</td>
            <td>${courses[i].desc}</td>
            <td><button id="deleteBtn" onclick="deleteCourse(${i})">delete</button></td>
            <td><button id="updateBtn" onclick="getCourseData(${i})">update</button></td>
            <td><img id="imgPreview" style="width:50px ;" src="${courses[i].imgUrl}"/></td>
        </tr>
        `
    }
    data.innerHTML=result;
}

function clearForm(){
   for(var i=0;i<inputs.length;i++){
       inputs[i].value="";
   }
   addBtn.innerHTML="Add Course";
   courseName.classList.remove('is-valid');
   courseCategory.classList.remove('is-valid');
   coursePrice.classList.remove('is-valid');
   addBtn.disabled="true";
}

function deleteCourse(index){
    courses.splice(index,1);
    localStorage.setItem("coursesList",JSON.stringify(courses));
    displayData();
}

deleteAllBtn.onclick=function(){
    localStorage.removeItem("coursesList");
    courses=[];
    data.innerHTML="";
}

function search(inputName){
    var result="";
    for(var i=0;i<courses.length;i++){
        if(courses[i].name.toLowerCase().includes(inputName.toLowerCase())){
            result+=`
            <tr>
                <td>${i}</td>
                <td>${courses[i].name}</td>
                <td>${courses[i].category}</td>
                <td>${courses[i].price}</td>
                <td>${courses[i].beforPrice}</td>
                <td>${courses[i].desc}</td>
                <td><button id="deleteBtn" onclick="deleteCourse(${i})">delete</button></td>
                <td><button id="updateBtn" onclick="getCourseData(${i})">update</button></td>
                <td><img id="imgPreview" style="width:50px ;" src="${courses[i].imgUrl}"/></td>
            </tr>
            `
        }
    }
    data.innerHTML=result;
}

function getCourseData(index){
    addBtn.removeAttribute("disabled");
    var course=courses[index];
    courseNameInput.value=courses[index].name;
    courseCategoryInput.value=courses[index].category;
    coursePriceInput.value=courses[index].price;
    beforPrice.value=courses[index].beforPrice;
    courseDescInput.value=courses[index].desc;
    addBtn.innerHTML="update course";
    currentIndex=index;

}

function updateCourse(){
    var course={
        name:courseNameInput.value,
        category:courseCategoryInput.value,
        price:coursePriceInput.value,
        beforPrice:beforPrice.value,
        desc:courseDescInput.value
    }
    courses[currentIndex].name=course.name;
    courses[currentIndex].category=course.category;
    courses[currentIndex].price=course.price;
    courses[currentIndex].beforPrice=beforPrice.value;
    courses[currentIndex].desc=course.desc;
    courses[currentIndex].imgUrl=localStorage.getItem("recentImg");
    localStorage.setItem("coursesList",JSON.stringify(courses));
    courseName.classList.remove('is-valid');
    courseCategory.classList.remove('is-valid');
}

courseName.onkeyup=function(){
    let courseName=document.querySelector("#courseName");
    let namePattern=/^[A-Z][a-z]{2,20}$/;
    if(namePattern.test(courseName.value)){
        // addBtn.removeAttribute("disabled");
        courseName.classList.add('is-valid');
        courseName.classList.remove('is-invalid');
    }
    else{
        // addBtn.disabled="true";
        courseName.classList.add('is-invalid');
        courseName.classList.remove('is-valid');
    }

}

courseCategory.onkeyup=function(){
    let Pattern=/[A-Za-z]{2,15}$/;
    if(Pattern.test(courseCategory.value)){
        addBtn.removeAttribute("disabled");
        courseCategory.classList.add('is-valid');
        courseCategory.classList.remove('is-invalid');
    }
    else{
        addBtn.disabled="true";
        courseCategory.classList.add('is-invalid');
        courseCategory.classList.remove('is-valid');
    }

}

coursePrice.onkeyup=function(){
    let pricePattern=/(^[1-9]$|^[1-9][0-9]$|^[1-9][0-9][0-9]$|^[1-9][0-9][0-9][0-9]$)/;
    if(pricePattern.test(coursePrice.value)){
        coursePrice.classList.add('is-valid');
        coursePrice.classList.remove('is-invalid');
    }
    else{
        coursePrice.classList.remove('is-valid');
        coursePrice.classList.add('is-invalid');
    }
}
