// CODE A IMPLEMENTER
const son = new Audio('meeeh.mp3');


const chevre=document.getElementById("goat");
chevre.addEventListener('click',meeeh);
function meeeh()
{
        chevre.src="goat_meh.jpg";
    chevre.classList.remove("animer");
    void chevre.offsetWidth;
    chevre.classList.add("animer");
    son.play();
}

chevre.addEventListener("animationend",()=>{
chevre.src="goat.jpg";
})

window.addEventListener("deviceorientation", event => {
    
    // gamma is the left-to-right tilt in degrees
    const gamma = event.gamma;
    console.log("test")
    if (gamma > 80)
    {
        meeeh();
    }
})
// Quand on clique sur l'image de la chèvre elle fait le son et l'animation

// Attraper les événements de changement d'orientation, si l'angle change et 
// que le téléphone est à l'enver alors faire comme si on clique sur la chèvre