let bot_memory = 0;
let bot_phase = 0;
let log_no = 0;
let wanted = 0;
var bot_decksize = botdeck_stack.length;
var bot_eggsize = botegg_stack.length;
var bot_handsize = 0;
var bot_secsize = 0;
var bot_trashsize = 0;
var breeding = 0;
var brmax = 0;
const digimon_breed = [];
const digimon_battle1 = [];
const digimon_battle2 = [];
const digimon_battle3 = [];

function breedingPhase(){
	var bstage = digimon_breed.length;
	if (bstage == 0){
		var aux = botegg_stack.pop();
		var tails = getDetails(aux[0]);
		digimon_breed.push(tails);
		document.getElementById("basegg").src = sauce + aux + ".png";
		logAdd("bot hatched egg");
	}
	else if (bot_memory >= 0)
		digivolveEgg();
	else
		brmax++;
}
function mainPhase(){
	logAdd("must play");
	var burn = handLowest();
	bot_memory -= burn;
	for (let i = 0; i < bothand_stack.length; i++) { 
		let temp = getDetails(bothand_stack[i]);
		if (temp.play == burn){
			botPlay(i);
			//console.log(temp);
			return;
		}
	}
}
function handLowest(){
	var lowest = 30;
	for (let i = 0; i < bothand_stack.length; i++) {
		var aux = getDetails(bothand_stack[i]);
		if (aux.play < lowest){
			lowest = aux.play;
		}
	}
	return lowest;
}
function callBot(memory){
	maximize();
	bot_memory = memory;
	if (memory <= 0)
		bot_memory = 3;
	moveCounter(memgauge*(-1));
	doMyBest();
}
function digivolveEgg(){
	let tam = digimon_breed.length;
	switch (tam) {
		case 1:
			if (checkHand(3) != false){
				var aux = bothand_stack.splice(wanted,1);
				var tails = getDetails(aux[0]);
				digimon_breed.push(tails);
				evolve_egg(aux,3);
				logAdd("bot digivolved");
				botdraw();
			}
			break;
		case 2:
			if (checkHand(4) != false){
				var aux = bothand_stack.splice(wanted,1);
				var tails = getDetails(aux[0]);
				digimon_breed.push(tails);
				evolve_egg(aux,4);
				logAdd("bot paid " + tails.evo + " evo cost");
				bot_memory -= tails.evo; 
				botdraw();
			}
			break;
		case 3:
			if (checkHand(5) != false){
				var aux = bothand_stack.splice(wanted,1);
				var tails = getDetails(aux[0]);
				digimon_breed.push(tails);
				evolve_egg(aux,5);
				logAdd("bot paid " + tails.evo + " evo cost");
				bot_memory -= tails.evo; 
				botdraw();
			}
			break;
		case 4:
			if (checkHand(6) != false){
				var aux = bothand_stack.splice(wanted,1);
				var tails = getDetails(aux[0]);
				digimon_breed.push(tails);
				evolve_egg(aux,6);
				logAdd("bot paid " + tails.evo + " evo cost");
				bot_memory -= tails.evo; 
				botdraw();
			}
			break;
		case 5:
			if (checkHand(7) != false){
				var aux = bothand_stack.splice(wanted,1);
				var tails = getDetails(aux[0]);
				digimon_breed.push(tails);
				evolve_egg(aux,7);
				logAdd("bot paid " + tails.evo + " evo cost");
				bot_memory -= tails.evo; 
				botdraw();
			}
		default:
			brmax++;
	}
}
function getDetails(card){
	var result = cardetails.find(obj => {
		return obj.code === card;
	});
	return result;
}
function checkHand(laval){
	for (let i = 0; i < bothand_stack.length; i++) { 
		let temp = getDetails(bothand_stack[i]);
		if (temp.type == "digimon")
			if (temp.level == laval){
				wanted = i;
				return temp;
			}
	}
	//console.log(404);
	logAdd("cant digivolve");
	brmax++;
	return false;
}
function doMyBest(){	
	logAdd("memory available: " + bot_memory);
	if (turn_count > 1)
		botdraw();
	console.log("step 1");
	while (brmax < 1)
		breedingPhase();
	brmax = 0;
	console.log("step 2");
	while (bot_memory >= 0)
		mainPhase();     
	logAdd("bot ends with " + bot_memory);
	memgauge = bot_memory*(-1);
	moveCounter(memgauge);
	turn_count++;
	document.getElementById("turntxt").innerHTML = turn_count;
	console.log("turn " + turn_count);
	startTurn();
}
function botPlay(who){
	var aux = bothand_stack.splice(who,1);
	var mother = document.getElementById("bot_table");
	var newstp = document.createElement("div");
	var stpimg = document.createElement("img");
	newstp.classList.add('setup');
	newstp.classList.add('stack2');
	stpimg.src = sauce + aux + ".png";
	newstp.appendChild(stpimg);
	mother.appendChild(newstp);
}
function botdraw(){
	let ox = botdeck_stack.pop();
  bothand_stack.push(ox);
	logAdd("bot draw");
}
function botnt(){
	botdraw();
	doMyBest();
}
function evolve_egg(digi, lovol){
	var mother = document.getElementById("eggarea");
	var stpimg = document.createElement("img");
	stpimg.src = sauce + digi + ".png";
	//stpimg.classList.add('previa');
	stpimg.classList.add('stack' + lovol);
	mother.appendChild(stpimg);
	//botdraw();
}
function logAdd(msg){
	log_no++;
	var mother = document.getElementById("log");
	var newlog = document.createElement("p");
  newlog.innerText = log_no + "-> " + msg;
	newlog.classList.add('report');
  mother.appendChild(newlog);
}
function initialize(dice_result){
	logAdd("waking bot...");
	shuffle(botegg_stack);
	shuffle(botdeck_stack);
	fillBot();
	if (dice_result == 1){
		logAdd("bot goes 1st");
		doMyBest();
	}
	else
		logAdd("bot goes 2nd");
}
function fillBot(){
	for (let i = 1; i < 6; i++) {
    let aux = botdeck_stack.pop();
    botsec_stack.push(aux);
		let ox = botdeck_stack.pop();
    bothand_stack.push(ox);
	}
}