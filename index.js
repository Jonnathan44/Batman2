//APPARITION DES INFORMATIONS SUR LES PESONNAGES QUAND LE CURSEUR PASSE AU-DESSUS DE LEURS PHOTOTS
let image = document.querySelectorAll ('.image')

image.forEach(function (element){
    element.addEventListener ("mouseover", function (){
        element.querySelector (".qui").style.display = "flex"
        element.style.transform = "scale (1.1)"
    })
    element.addEventListener ("mouseout", function (){
        element.querySelector (".qui").style.display = "none"
        element.style.transform = "scale (1)"
    })

})





//CREATION DE LA CHAUVE-SOURIS QUI SUIT LE CURSEUR PARTOUT

//Acces à l'élement canvas de la page web pour dessiner la chauve-souris qui suit le curseur
let canvas = document.getElementById('canvas');
let c = canvas.getContext ('2d');

//Acces à l'image de la chauve-souris dans le dossier media
let img = new Image();
img.src = 'Media/logohome.png'

//La création du dessin de la chauve-souris
let bat = {
    positions: [],
    draw(){
        c.drawImage (img, 0, 0, 50, 20)
    }
}


//faire en sorte que la chauve-souris suit le curseur
window.addEventListener ("mousemove", deplacement);
function deplacement (event){
    canvas.style.top = event.clientY+ window.scrollY + 20 + "px" ;
    canvas.style.left = event.clientX + window.scrollX + 20 + "px";
}

img.onload = bat.draw();



//CREATION DE L'EFFET DE DEZOOM SUR LES PHOTOS
function reveal (){
    const reveals = document.querySelectorAll (".reveal");
    for (let i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;  
        
        if (elementTop < windowHeight - elementVisible ) {
            reveals[i].classList.add ("active");
        } else {
            reveals [i].classList.remove ("active")
        }
    }
    
}

window.addEventListener ("scroll", reveal);

reveal ();



//CREATION DE L'EFFET FONDU DE GAUCHE A DROITE SUR LES ELEMENTS
function slide (){
    const slides = document.querySelectorAll (".slide");
    for (let i = 0; i < slides.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = slides[i].getBoundingClientRect().top;
        var elementVisible = 150;  
        
        if (elementTop < windowHeight - elementVisible ) {
            slides[i].classList.add ("active1");
        } else {
            slides [i].classList.remove ("active1")
        }
    }
    
}

window.addEventListener ("scroll", slide);

slide ();



//Gere le scroll pour les deux boutons, voir les heros et voir les adversaires

let hero = document.getElementById ('heros')
let adv = document.getElementById ('adversaires');
hero.addEventListener ("click", scrollTo1)
adv.addEventListener ("click", scrollTo2);

function scrollTo1(){
    const anchor = document.getElementById ("cinema");
    anchor.scrollIntoView ({behavior: 'smooth'})
}

function scrollTo2(){
    const anchor = document.getElementById ("nemesis");
    anchor.scrollIntoView ({behavior: 'smooth'})
}

