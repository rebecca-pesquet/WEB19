console.log('coucou');
let Emilie = document.getElementById("Emilie");
console.log(Emilie);
// Ce gestionnaire ne sera exécuté qu'une fois
// lorsque le curseur se déplace sur la liste
Emilie.addEventListener("mouseover", function( event ) {
    // on met l'accent sur la cible de mouseenter
    alert('vous etes passé sur cette div de Emilie');
});


let David = document.getElementById("David");

// Ce gestionnaire ne sera exécuté qu'une fois
// lorsque le curseur se déplace sur la liste
David.addEventListener("mouseover", function( event ) {
    // on met l'accent sur la cible de mouseenter
    alert('vous etes passé sur la div de David');
});

let lili = document.getElementById("lili");

// Ce gestionnaire ne sera exécuté qu'une fois
// lorsque le curseur se déplace sur la liste
lili.addEventListener("mouseover", function( event ) {
    // on met l'accent sur la cible de mouseenter
    alert('vous etes passé sur la div de Lili ');
});