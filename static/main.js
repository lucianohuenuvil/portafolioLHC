function cambiarDerecha()   {
    let idSlide = document.getElementById("Slide")

    switch (idSlide.style.marginLeft){
        case "":
            idSlide.style.marginLeft = "-20%"
            break;
        case '0%':
            idSlide.style.marginLeft = "-20%";
            break;

        case "-20%":
            idSlide.style.marginLeft = "-40%"
            break;
        case "-40%":
            idSlide.style.marginLeft = "-60%"
            break;
        case "-60%":
            idSlide.style.marginLeft = "0%"
            break;

    }
}


function cambiarIzquierda()   {
    let idSlide = document.getElementById("Slide")

    switch (idSlide.style.marginLeft){
        case "":
            idSlide.style.marginLeft = "-60%"
            break;
        case "0%":
            idSlide.style.marginLeft = "-60%";
            break;
        case "-20%":
            idSlide.style.marginLeft = "0%"
            break;
        case "-40%":
            idSlide.style.marginLeft = "-20%"
            break;
        case "-60%":
            idSlide.style.marginLeft = "-40%"
            break;
    }
}


function navresponsive(){
    if (document.querySelector(".link-nav-container-responsive").style.marginLeft == "-100%"){
        document.querySelector(".link-nav-container-responsive").style.marginLeft = "0%";

    } 
    else{
        document.querySelector(".link-nav-container-responsive").style.marginLeft = "-100%";
    }
    
}


//Slide scroll page

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){


        window.location.hash = hash;
      });
    } 
  });
});

