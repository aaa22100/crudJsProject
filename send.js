var senderName=document.getElementById("senderName");
var message=document.getElementById("message");
var check=document.getElementById("check")
var feedbacks=[];

sendBtn.onclick=function(){
    var feedback={
        name:senderName.value,
        msg:message.value,
        check:check.value
    }
    feedbacks.push(feedback);
    console.log(feedbacks);
    localStorage.setItem("feedbacks",JSON.stringify(feedbacks));
    alert("your message has been sent !");
    clear();
}

function clear(){
    senderName.value="" ;
    message.value="";
}


// displayfeedback();
