var feedbacks=JSON.parse(localStorage.getItem("feedbacks"));
// console.log(feedbacks);
display();

function display(){
    var result="";
    for(var i=0;i<feedbacks.length;i++){
        result+=`
        <tr>
            <td>${i}</td>
            <td>${feedbacks[i].name}</td>
            <td>${feedbacks[i].msg}</td>
            <td><input type="checkbox" id="myCheck" onclick="accepted(${i})"></td>
        </tr>
        `
    }
    manage.innerHTML=result;
}

function accepted(index){
    if(feedbacks[index].check=='on'){
        // alert(index);
        feedbacks[index].check='off';
        localStorage.setItem("feedbacks",JSON.stringify(feedbacks));
    }
    else if(feedbacks[index].check=='off'){
        // alert(index);
        feedbacks[index].check='on';
        localStorage.setItem("feedbacks",JSON.stringify(feedbacks));
    }
}

 // <td><input type="text" id="myCheck" value="${feedbacks[i].check}"></td>
//  <td><button class="btn btn-success" onclick="accept(${i})">accept</button></td>
var view=[]
accept.onclick=function(){
    // alert("hhh");
    for(var i=0;i<feedbacks.length;i++){
        if(feedbacks[i].check==='off'){
            view.push(feedbacks[i]);
            localStorage.setItem("viweFeedback",JSON.stringify(view));
            feedbacks.splice(i,1);
            localStorage.setItem("feedbacks",JSON.stringify(feedbacks));
            display();
        }
    }
}

// displayfeedback();
// function displayfeedback(){
//      var views=JSON.parse(localStorage.getItem("viweFeedback"));
//      var result="";
//      for(var i=0;i<views.length;i++){
//         result+=`<div class="card py-5 mb-5" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">${views[i].name}</h5>
//           <p class="card-text">${views[i].msg}</p>
//         </div>
//       </div>
//         `
//      }
//      final.innerHTML=result;
//     //  alert("hi");
// }

// displayfeedback();
// alert("hi");