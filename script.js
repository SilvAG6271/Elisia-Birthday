document.querySelector(".card-container").addEventListener("mousemove", function(e){
   const rect = e.target.getBoundingClientRoot();
   const x = e.client - rect.left;
   const y = e.client - rect.top;

   document.querySelector(".scratch-overlay").style.left = x + "px";
   document.querySelector(".scratch-overlay").style.top = y + "px";
});

document.querySelector(".scratch-overlay").addEventListener("mousedown", function(){
    document.querySelector(".hidden-image").style.display = "block";
});

document.querySelector(".scratch-overlay").addEventListener("mouseup", function(){
    document.querySelector(".hidden-image").style.display = "none";
});