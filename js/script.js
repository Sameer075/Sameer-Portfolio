
var subTitle=document.querySelector("#multiText");


var texts=["a Student","a Web Developer","a Coder","a Programmer"];
var index=1;
var i=0;

function typingEffect(){

    var text=texts[i];
    
    subTitle.innerHTML=text.slice(0,index);
    
    index>text.length ? (index=1): index++;

    if (index > text.length) {
        i = (i + 1) % texts.length; 
        index=1;
      }

    setTimeout(()=>typingEffect(), 270);

}

typingEffect();


var date=new Date();
var year=document.querySelector("#year").innerText=date.getFullYear();
var dob=document.querySelector("#dob").innerText=date.getFullYear()-2002;