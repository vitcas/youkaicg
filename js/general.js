var face0 = new Image();
face0.src = "./img/d1.gif";
var face1 = new Image();
face1.src = "./img/d2.gif";
var face2 = new Image();
face2.src = "./img/d3.gif";
var face3 = new Image();
face3.src = "./img/d4.gif";
var face4 = new Image();
face4.src = "./img/d5.gif";
var face5 = new Image();
face5.src = "./img/d6.gif";
var dice1 = 0;
var dice2 = 0;
var dice_roll = 0;
const audio1 = new Audio('assets/sounds/SS_00000.wav');
const audio2 = new Audio('assets/sounds/SS_00001.wav');
const audio3 = new Audio('assets/sounds/mixkit-creature-cry-of-hurt-2208.wav');
const audio4 = new Audio('assets/sounds/mixkit-extra-bonus-in-a-video-game-2045.wav');

function theChosen(array) {
  return array.filter((valor, indice, arr) => arr.indexOf(valor) === indice);
}
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
function moveCounter(memo){
	let x = memo;
	let id = null;
  let elem = document.getElementById("marker");
	document.getElementById("memtxt").innerHTML = memgauge;
  //let pos = getOffset(elem).left;
  //let target = pos + ( 56 * qt);
  audio2.play();
	switch(x) {
  case 1:
    elem.style.left = '377px';
    break;
  case -1:
    elem.style.left = '454px';
    break;
	case 2:
    elem.style.left = '340px';
    break;
  case -2:
    elem.style.left = '490px';
    break;
	case 3:
    elem.style.left = '302px';
    break;
  case -3:
    elem.style.left = '529px';
    break;
	case 4:
    elem.style.left = '265px';
    break;
  case -4:
    elem.style.left = '568px';
    break;
	case 5:
    elem.style.left = '226px';
    break;
  case -5:
    elem.style.left = '604px';
    break;
	case 6:
    elem.style.left = '189px';
    break;
  case -6:
    elem.style.left = '641px';
    break;
	case 7:
    elem.style.left = '151px';
    break;
  case -7:
    elem.style.left = '678px';
    break;
	case 8:
    elem.style.left = '113px';
    break;
  case -8:
    elem.style.left = '718px';
    break;
	case 9:
    elem.style.left = '76px';
    break;
  case -9:
    elem.style.left = '754px';
    break;
	case 10:
    elem.style.left = '38px';
    break;
  case -10:
    elem.style.left = '792px';
    break;
  default:
    elem.style.left = '417px';
	} 
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
function throwdice(){
	var randomdice = Math.round(Math.random()*5);
	document.images["mydice"].src = eval("face" + randomdice + ".src");
	if (dice_roll == 0)
		dice1 = randomdice;
	if (dice_roll == 1){
		dice2 = randomdice;
		whoGoesFirst();
	}
	dice_roll++;
}