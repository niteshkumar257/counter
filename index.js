const count=0;
const btns=document.querySelectorAll(".btn");
const value=document.querySelector("#value");
btns.forEach(function(btn){
    addEventListener("click",function(e)
    {
     const s=e.currentTarget.classList;
     if (s.contains("drecrease"))
     {
         count--;
       
    
     }
     else if(s.contains("increase"))
     {
         count++;
     }  
     else{
         count=0;
     }
     value.textContent=count;
    })
    
})