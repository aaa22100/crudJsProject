
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("navbar").style.backgroundColor = "white";
    } else {
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }
}

var httpRequest=new XMLHttpRequest();
httpRequest.open("get","https://corona.ps/API/governorates");
httpRequest.send();
var cases=[];
//console.log(httpRequest);
httpRequest.addEventListener('readystatechange',function(){
    if(httpRequest.readyState==4){
        cases=JSON.parse(httpRequest.response).data.Governorates;
    }
    displayCases();
});
//console.log(posts);


function displayCases(){
    var cols=``;
    for(var i=0;i<cases.length;i++){
        if(i%2==0){
            cols+=`<div class="shadow p-3 mb-5 bg-body rounded apiCard" class="card MyColor" style="width: 18rem;">
            <div class="card-body" >
              <h5 class="card-title MyColor">${cases[i].Name}</h5>
              <p class="card-text MyColor">${cases[i].Cases}</p>
            </div>
          </div>
            `
        }
        else{
            cols+=`<div class="shadow p-3 mb-5 bg-body rounded apiCard" class="card MyCol" style="width: 18rem;">
        <div class="card-body" >
          <h5 class="card-title MyCol">${cases[i].Name}</h5>
          <p class="card-text MyCol">${cases[i].Cases}</p>
        </div>
      </div>
        `
        }
   }
    document.getElementById('cases').innerHTML=cols;
}
