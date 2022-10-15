var btn=document.querySelector("#iconb i");
var text1=document.querySelector("#size #one");
var text2=document.querySelector("#size #two");
var text3=document.querySelector("#size #three");
var s1,s2,s3,bkcopy1,bkcopy2,bkcopy3,sc1;
var textcopy1=text1.textContent;
var textcopy2=text2.textContent;
var textcopy3=text3.textContent;
btn.addEventListener('click',function()
{
s1=setInterval(function(){
if(bkcopy1!==''){
    bkcopy1=text1.textContent;
    bkcopy1=bkcopy1.slice(0,bkcopy1.length-1);
    text1.textContent=bkcopy1;

}
else{
    text1.textContent='';
    clearInterval(s1);
}
},100)
s2=setInterval(function(){
    if(bkcopy2!==''){
        bkcopy2=text2.textContent;
        bkcopy2=bkcopy2.slice(0,bkcopy2.length-1);
        text2.textContent=bkcopy2;
    
    }
    else{
        text2.textContent='';
        clearInterval(s2);
    }
    },100)
    s3=setInterval(function(){
        if(bkcopy3!==''){
            bkcopy3=text3.textContent;
            bkcopy3=bkcopy3.slice(0,bkcopy3.length-1);
            text3.textContent=bkcopy3;
        
        }
        else{
            text3.textContent='';
            clearInterval(s3);
        }
        },100)
     setTimeout(function()
     {
         sc1=setInterval(function(){
         var copy=textcopy1.slice(0,1);
         textcopy1=textcopy1.slice(1,textcopy1.length);
         text1.textContent+=copy;
         
     },30);
     sc2=setInterval(function(){
        var copy=textcopy2.slice(0,1);
        textcopy2=textcopy2.slice(1,textcopy2.length);
        text2.textContent+=copy;
        
    },30);
    sc3=setInterval(function(){
        var copy=textcopy3.slice(0,1);
        textcopy3=textcopy3.slice(1,textcopy3.length);
        text3.textContent+=copy;
        
    },30);
         

     },500);
      
    });