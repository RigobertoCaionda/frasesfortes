let presentationAreaP = document.querySelector('.presentation-area p');
let presentationAreaSmall = document.querySelector('.presentation-area small');
let randomNumber;
let newWord = document.querySelector('#new-word');

function randomNum(){
	randomNumber = Math.round(Math.random() * (frases.length - 1));
}
randomNum();
function sentenceOfTheDay(){
	let fraseDoDia = frases[randomNumber].frase;
	presentationAreaP.innerHTML = fraseDoDia;
if(frases[randomNumber].autor !== undefined){
	presentationAreaSmall.innerHTML = `Autor: ${frases[randomNumber].autor}`;
}else{
	presentationAreaSmall.innerHTML = 'Autor: Desconhecido';
}
}
sentenceOfTheDay();
newWord.addEventListener('click', ()=>{
	randomNum();
	sentenceOfTheDay();

});