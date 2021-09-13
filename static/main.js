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