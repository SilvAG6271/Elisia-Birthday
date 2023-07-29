

   document.addEventListener("mousemove", function(e){
   const body = document.querySelector("body");
   const birthday = document.createElement("span");
   // birthday.textContent = "Happy Birthday!";
  
   birthday.style.left = e.offsetX + "px";
   birthday.style.top = e.offsetY + "px";


body.appendChild(birthday);

 });