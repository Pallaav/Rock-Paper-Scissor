let userscore =0;
let compscore=0;
const userscore_span = document.getElementById('user-score') 
const compscore_span = document.getElementById('comp-score')
const scoreboard = document.querySelector("score-board")
const result_p = document.querySelector(".result")
const rock = document.getElementById("r")
const paper = document.getElementById("p")
const scissors = document.getElementById("s")

function getcompchoice() {
	const choices= ["r","p","s"];
	const random = Math.floor(Math.random()*3)
	return choices[random];
}
function cvt2word(letter) {
	if(letter==="r") return "Rock";
	if(letter==="p") return "Paper";
	if(letter==="s") return "Scissors";
}
function win(userchoice,compchoice) {
	userscore++;
	userscore_span.innerHTML=userscore;
	compscore_span.innerHTML=compscore;
	console.log("userchoice : "+userchoice);
	console.log("compchoice : "+compchoice);
	console.log("WIN");
	result_p.innerHTML=cvt2word(userchoice)+" beats "+cvt2word(compchoice)+" you win."
}
function loses(userchoice,compchoice) {
	compscore++;
	userscore_span.innerHTML=userscore;
	compscore_span.innerHTML=compscore;
	console.log("userchoice : "+userchoice);
	console.log("compchoice : "+compchoice);
	console.log("LOST");
	result_p.innerHTML=cvt2word(compchoice)+" beats "+cvt2word(userchoice)+" you lost."
}
function draw(userchoice,compchoice) {
	console.log("userchoice : "+userchoice);
	console.log("compchoice : "+compchoice);
	console.log("DRAW");
	result_p.innerHTML=cvt2word(compchoice)+" is same as "+cvt2word(userchoice)+" it's a draw."
}
function game(userchoice) {
	compchoice=getcompchoice()
	switch(userchoice+compchoice){
		case "rs":
		case "pr":
		case "sp":
		    win(userchoice,compchoice);
		    break;
		case "rp":
		case "ps":
		case "sr":
		    loses(userchoice,compchoice);
		    break;
		case "rr":
		case "pp":
		case "ss":
		    draw(userchoice,compchoice);
		    break;
	          
	}

}
main();
function main() {
	rock.addEventListener("click",function () {
		game("r");
	})
	paper.addEventListener("click",function () {
		game("p");
	})
	scissors.addEventListener("click",function () {
		game("s");
	})
}