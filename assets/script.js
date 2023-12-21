const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
]

//**récupérer les elements flèches droite et gauches pour les adapter au clique**/
let balisebannerarrow_left = document.querySelector("#banner .arrow_left");
console.log(balisebannerarrow_left);

let balisebannerarrow_right = document.querySelector("#banner .arrow_right");
console.log(balisebannerarrow_right);

let indexslide = 0;
console.log(indexslide);

let tagligne = document.querySelector(".tagligne");
let img = document.querySelector(".banner-img");
let dotArray = document.querySelectorAll(".dot");


//**écouter l'évènement du clic sur la flèche droite avec addEventListener ( au clique : 0,1,2,3,0)**/
//**envoyer instruction dans{

document.querySelector("#banner .arrow_right").addEventListener('click', function(){
	dotArray[indexslide].classList.remove("dot_selected");
		if (indexslide < slides.length-1) { //*** slides.length-1 c'est 4 image -1 dont 3eme image*/
			indexslide = indexslide + 1;	
		}
		else {
			indexslide = 0;	  //**retour à la première image  */
		}
		console.log(indexslide);
		tagligne.innerHTML = slides[indexslide].tagLine;
		img.src= "./assets/images/slideshow/"+ slides[indexslide].image;
	dotArray[indexslide].classList.add("dot_selected");
})

	//**écouter l'évènement du clic sur la flèche gauche avec addEventListener ( au clique : 0,3,2,1,0)**/ 
//**envoyer instruction dans{

document.querySelector("#banner .arrow_left").addEventListener('click', function(){
	dotArray[indexslide].classList.remove("dot_selected");
		if (indexslide > 0) { //*** indexslide égale à tout ce qui est plus grand que 0*/
			indexslide = indexslide - 1;	
		}
		else {
			indexslide = slides.length - 1;

		}
		console.log(indexslide);
		tagligne.innerHTML = slides[indexslide].tagLine;
		img.src= "./assets/images/slideshow/"+ slides[indexslide].image;
	dotArray[indexslide].classList.add("dot_selected");
})


for (var i = 0; i < slides.length-1; i++) { 
	

}








console.log("longueur du tableau :" + slides.length);




