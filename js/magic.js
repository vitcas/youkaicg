var gameflow = 0; var turn_count = 0; var memgauge = 0;
var deck = 50; var digitama = 4;
var security = 0; var hand = 0; var trash = 0;
let lucky = 0; var breeding = 0;
let selected_card = ""; let selected_type = ""; 
let selected_level = 0;
let myStacks = 0;
const digiMax = [["ex1","ex2","ex4"],["rb1","rb2"],["bt14"]];
const digiMox = [];

const sauce = "assets/cards/default/";
const shield2 = "assets/sleeves/jeane.jpg";
//decks initialization
const hand_stack = [];
const security_stack = [];
const trash_stack = [];
const egg_stack = sessionStorage.getItem('tamago').split(",");
const deck_stack = sessionStorage.getItem('deku').split(",");
const shortEgg = theChosen(egg_stack);
const shortDeck = theChosen(deck_stack);
const shorted = shortEgg.concat(shortDeck);
const mongodata = [];
function getDocument(code) {
  fetch(`http://127.0.0.1:5000/api/youkaicg/${code}`)
  .then(response => response.json())
  .then(data => {			
    //var cleanedData = JSON.stringify(data, null, 2);
		mongodata.push(data);
  }).catch(error => {
    console.error('Erro:', error);
		console.log('Erro na chamada da API');
  });
}
for (const elemento of shorted)
  getDocument(elemento);
//basic functions
function maxTop(matrix, num){
	return matrix[num][matrix[num].length - 1];
}
function prefix(card){
	let partes = card.split("-");
	let aux = partes[0];
	return aux + "/";
}
function writeMessage(message) {
  text.text(message);
}
function changePrev(){  
  $("#cadet").attr('src',$(this).attr('src')); 
}
function payCost(howmuch) {
	let aux = memgauge - howmuch;
  if (aux >= (-10)){
		memgauge = aux;
		document.getElementById("memtxt").innerHTML = memgauge;
    moveCounter(memgauge);
  }
  else
    alert('Memory overflow!');
}
function gainMemo(howmuch) {
	let aux = memgauge + Number(howmuch);
  if (aux <= 10){
		memgauge = aux;
		document.getElementById("memtxt").innerHTML = memgauge;
    moveCounter(memgauge);
  }
  else
    alert('Memory overflow!');
}
function plusHand(){
	hand++;
	document.getElementById("hand_count").innerHTML = hand;
}
function canDigivolve(){
	if (digiMox.length < 1 || memgauge < 0)	return false;
	return true;
}
function isDigimon(card){
	if (card == "Digimon") return true;
	return false;
}
function hasLevel(lvl){
	for (let i = 0; i < digiMox.length; i++) {
		var aux = maxTop(digiMox,i);
		var temp = getCard(aux);
		if (temp.level == lvl) return true;
		console.log(temp);
	} 
	return false;
}
//game preparation
function fillSec(){
	var mother = document.getElementById("sec_area");
	for (let i = 1; i < 6; i++) {
		var image = document.createElement("img");
    let aux = deck_stack.pop();
    security_stack.push(aux);
    image.id = "sec" + i;
    image.src = shield2;
		image.classList.add("digicard");
    image.classList.add("security");
    image.onclick = function() {secCheck()}
    mother.appendChild(image);
	}
}
function firstHand(){  
  var imageParent = document.getElementById("hand");
  for (let i = 0; i < 5; i++) {
    var image = document.createElement("img");	
    let aux = deck_stack.pop();
		let prefixo = prefix(aux);
    hand_stack.push(aux);
    image.id = aux;
    image.src = sauce + prefixo + aux + ".webp";
		image.classList.add("digicard");
    //image.onclick = function() {handPlay(aux)};
		image.onclick = function() {selectCard(aux)};
    image.addEventListener("mouseover", changePrev, false);
		image.oncontextmenu = (e)=>{e.preventDefault();};
    imageParent.appendChild(image);
  } 
}
function startGame(mode){
	shuffle(egg_stack);
	shuffle(deck_stack);
	fillSec();
	firstHand();
	deck = 40;hand = 5;security = 5;
	turn_count++;
	document.getElementById("turntxt").innerHTML = turn_count;
	document.getElementById("deck_count").innerHTML = deck;
	document.getElementById("hand_count").innerHTML = hand;
	document.getElementById("sec_count").innerHTML = security;
	document.getElementById("egg_cover").style.display = 'initial';
	document.getElementById("deck_cover").style.display = 'initial';
	document.getElementById("comando").style.display = 'initial';	
	$(".security").css("display", "initial");
	//audio4.play();
}
//security functions
function secCheck(){
  let secard = security_stack.pop();
	let fonte = sauce + prefix(secard) + secard + ".webp";
  document.getElementById("sec"+security).style.display = 'none';
  security--;
	document.getElementById("sec_count").innerHTML = security;
  audio1.play();
  var imageObj = new Image();
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: rectX,
      y: rectY,
      image: imageObj,
      width: 83,
      height: 117,
      name: 'card',
      draggable: true,
    });
    layer.add(yoda);
		yoda.on('mouseover', function () {
			document.body.style.cursor = 'pointer';
			$("#cadet").attr('src',fonte);
		});
		yoda.on('mouseout', function () {
			document.body.style.cursor = 'default';
		});
  };
  imageObj.src = fonte;
}
function recovery(){
	deck--;
	document.getElementById("deck_count").innerHTML = deck;
	let aux = deck_stack.pop();
	security_stack.push(aux);
	security++;
	document.getElementById("sec_count").innerHTML = security;
	var mother = document.getElementById("sec_area");
	var image = document.createElement("img");
  image.id = "sec" + security;
  image.src = shield2;
	image.classList.add("digicard");
  image.classList.add("security");
  image.onclick = function() {secCheck()}
  mother.appendChild(image);
}
function showSec(){
	if (security > 0){
		lucky++;
		document.getElementById("showcase").style.display = 'initial';
		let fondya = document.getElementById("inside");
		var tam = security_stack.length;
		var aux = tam - lucky;
		var curcard = security_stack[aux];
		var image = document.createElement("img");
		image.src = sauce + prefix(curcard) + curcard + ".webp";
		image.id = curcard;
		image.onclick = function(){send2Hand(this,1,aux);};
		image.oncontextmenu = (e)=>{e.preventDefault();};
		fondya.appendChild(image);
	}
}
//deck functions
function draw() {
	if (deck > 0){
		let aux = deck_stack.pop();
		hand_stack.push(aux);
		deck = deck - 1;
		document.getElementById("deck_count").innerHTML = deck;
		plusHand();
		const myElement = document.getElementById("hand");
		let card = document.createElement("img");
		card.oncontextmenu = (e)=>{e.preventDefault();};
		card.id = aux;
		card.src = sauce + prefix(aux) + aux + ".webp";
		card.classList.add("digicard");
		card.onclick = function() {selectCard(card.id)};
		myElement.append(card);
		audio1.play();
		card.addEventListener("mouseover", changePrev, false);
		if (deck == 0)
			document.getElementById("deck_cover").style.display = 'none';
	}
	else
		alert("Acabou o deck!");
}
function showDeck(){
	lucky++;
	deck--;
	document.getElementById("showcase").style.display = 'initial';
	document.getElementById("deck_count").innerHTML = deck;
	let fondya = document.getElementById("inside");
	var tam = deck_stack.length;
	var aux = tam - lucky;
	var curcard = deck_stack[tam-lucky];
	var image = document.createElement("img");
	image.src = sauce + prefix(curcard) + curcard + ".webp";
	image.id = curcard;
	image.onclick = function(){send2Hand(this,3,aux);};
	image.oncontextmenu = (e)=>{e.preventDefault();};
	fondya.appendChild(image);
}
//trash functions
function showTrash(){
	document.getElementById("showcase").style.display = 'initial';
	let fondya = document.getElementById("inside");
	var tam = trash_stack.length;
	for (let i = 0; i < tam; i++) {
		var image = document.createElement("img");
		var aux = trash_stack[i];
		var temp = prefix(aux);
		image.src = sauce + temp + aux + ".webp";
		image.id = trash_stack[i];
		image.onclick = function(){send2Hand(this,2,i);};
		image.oncontextmenu = (e)=>{e.preventDefault();};
		fondya.appendChild(image);
	}
	fondya.style.display = 'initial';
}
//egg functions
function breed() {
	if (gameflow > 0){
		alert("You missed the breeding phase!");
		return;
	}
	if (digitama > 0){
    let egg = egg_stack.pop();
		digiMox.push([egg]);
		console.log(digiMox);
		let fonte = sauce + prefix(egg) + egg  + ".webp";
		digitama = digitama - 1;
		document.getElementById("egg_count").innerHTML = digitama;
    var imageObj = new Image();
    imageObj.onload = function () {
      var yoda = new Konva.Image({
        x: 161,
        y: 350,
        image: imageObj,
        width: 83,
        height: 117,
        name: 'card',
        draggable: true,
      });
      yoda.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
				$("#cadet").attr('src',fonte);				
      });
      yoda.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });
			layer.add(yoda);
			let nodes = tr.nodes().concat([yoda]);
			tr.nodes(nodes);     
    };
    imageObj.src = fonte;
		if (digitama == 0)
			document.getElementById("egg_cover").style.display = 'none';
    audio1.play();
    if (gameflow < 1)
			nextPhase();
	}
	else alert("Acabou o ovo!");
}
//hand functions
function handPlay(){
	if (memgauge < 0){
		document.getElementById("cardef").innerHTML = "Not enough memory.";
		return;
	}
	var lixo = loadCard();
	if (isDigimon(lixo.type)){
		digiMox.push([lixo.cardnumber]);
		console.log(digiMox);
	}
	payCost(lixo.play_cost);
  hand--;
  document.getElementById("hand_count").innerHTML = hand;
  var element = document.getElementById(selected_card);
  element.remove();
  var imageObj = new Image();
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: rectX,
      y: rectY,
      image: imageObj,
      width: 83,
      height: 117,
      name: 'card',
      draggable: true,
    });
    yoda.on('mouseover', function () {
      document.body.style.cursor = 'pointer';
			$("#cadet").attr('src',element.src);
    });
    yoda.on('mouseout', function () {
      document.body.style.cursor = 'default';
    });
    layer.add(yoda);
		let nodes = tr.nodes().concat([yoda]);
		tr.nodes(nodes);
  };
  imageObj.src = element.src; 
  audio1.play();
	document.getElementById("btnPlay").disabled = true;
	if (gameflow < 1)
		nextPhase();
}
function digivolve(){
	handPlay();
	draw();
	document.getElementById("btnDigivolve").disabled = true;
}
//gameflow functions
function startTurn(){
	//remember tu unsuspend here
	gameflow = 0;
	turn_count++;
	document.getElementById("turntxt").innerHTML = turn_count;
  if (memgauge < 1){
    let elem = document.getElementById("marker");
    elem.style.left = '423px';
    memgauge = 3;
    document.getElementById("memtxt").innerHTML = memgauge;
  }
  draw();
	document.getElementById("comando").style.display = 'initial';
	document.getElementById("phasetext").innerHTML = 'Breeding Phase';
	//document.querySelector('#next').disabled = false;
}
function nextPhase(){
	gameflow++;
	if (gameflow == 1){
		document.getElementById("phasetext").innerHTML = 'Main Phase';
	}
	if (gameflow == 2){
		startTurn();
	}
}
function endTurn(){
	document.getElementById("phase3").style.display = 'none';
	document.getElementById("phase4").style.display = 'none';
	document.getElementById("phase5").style.display = 'initial';
	gameflow = 0;
	document.getElementById("comando").style.display = 'none';
	var receba = memgauge*(-1);
	callBot(receba);
}
//card details
function loadCard(){
	var aux = mongodata.find(element => element.cardnumber === selected_card);
	selected_type = aux.type;
	selected_level = aux.level;
	analysis1(aux.maineffect);
	analysis2(aux.inherit);
	return aux;
}
function getCard(kode){
	var aux = mongodata.find(element => element.cardnumber === kode);
	return aux;
}
function selectCard(receive){
	selected_card = receive;
	loadCard();
	if (memgauge >= 0)
		document.getElementById("btnPlay").disabled = false;
	if (selected_type == "Digimon"){
		var validator = canDigivolve();
		var perg = hasLevel(selected_level-1);
		if (validator == true)
			document.getElementById("btnDigivolve").disabled = false;
	}
}
//popup window
function send2Hand(object, from, who){
	//alert(object.id);
	switch(from) {
  case 1:
    security_stack.splice(who,1);
		security = security_stack.length;
		document.getElementById("sec_count").innerHTML = security;
		document.getElementById("sec"+(security+1)).style.display = 'none';
    break;
  case 2:
    trash_stack.splice(who,1);
    break;
  default:
    deck_stack.splice(deck,1);
	} 
	//deck = deck_stack.lenght;
	$('#inside').find("#"+object.id).css("display", "none");
	//document.getElementById(object.id).style.display = 'none';
	hand_stack.push(object.id);
	plusHand();
	let myElement = document.getElementById("hand");
	let card = document.createElement("img");
	card.id = object.id;
	card.src = sauce + prefix(object.id) + object.id + ".webp";
	card.onclick= function() {handPlay(card.id)};
	card.addEventListener("mouseover", changePrev, false);
	//card.addEventListener("mouseout", patata, false);
	myElement.append(card);
	audio1.play();
}
function closeShow(){
	let fondya = document.getElementById("showcase");
	fondya.style.display = 'none';
	document.getElementById("inside").innerHTML = "";
	lucky = 0;
	shuffle(deck_stack);
	deck = deck_stack.length;
	document.getElementById("deck_count").innerHTML = deck;
	
}
function minimize(){
	document.getElementById("bota").style.display = 'none';
	document.getElementById("maxim").style.display = 'initial';
}
function maximize(){
	document.getElementById("bota").style.display = 'initial';
	document.getElementById("maxim").style.display = 'none';
}
//other
function token(){
  var imageObj = new Image();
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: rectX,
      y: rectY,
      image: imageObj,
      width: 115,
      height: 165,
      name: 'token',
      draggable: true,
    });
		yoda.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
				$("#cadet").attr('src',"assets/cards/token/BT2-Diaboromon_Token.webp");
      });
      yoda.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });
    layer.add(yoda);
		//let nodes = tr.nodes().concat([yoda]);
		//tr.nodes(nodes);
  };
  imageObj.src = "assets/cards/token/BT2-Diaboromon_Token.webp";
  audio1.play();
}
