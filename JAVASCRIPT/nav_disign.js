
const tef=document.querySelectorAll(".accui");
console.log(tef);
tef.forEach((p)=>{ 
  p.addEventListener("mouseenter",()=>{
   p.style.color="white";

  });
  p.addEventListener("mouseleave",()=>{
   p.style.color="black";

  });

}

);




const te=document.querySelector(".propo");
const t=document.querySelector(".pro");

t.addEventListener("mouseenter",()=>{
te.style.color="white";}
);
t.addEventListener("mouseleave",()=>{
te.style.color="black";}
);






const tep=document.querySelector(".servic");
const tf=document.querySelector(".serv");

tf.addEventListener("mouseenter",()=>{
tep.style.color="white";}
);
tf.addEventListener("mouseleave",()=>{
tep.style.color="black";}
);





