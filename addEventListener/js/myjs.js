

var antalKnappar = document.querySelectorAll(".knapp").length;


for(var i = 0; i < antalKnappar; i++){

    document.querySelectorAll(".knapp")[i].addEventListener("click", function(){
        
        alert('Du klickade på en knapp!')             

    });



}