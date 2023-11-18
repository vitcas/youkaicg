var gameflow = 0;
var deck = 50;
var security = 5;
var hand = 0;
var digitama = 4;
var trash = 0;
var memgauge = 0;
var lucky = 0;
const hand_stack = [];
const security_stack = [];
const trash_stack = [];
const egg_stack = getCookie("tamago").split(",");;
const deck_stack = getCookie("deku").split(",");;
var audio1 = new Audio('assets/sounds/SS_00000.wav');
var audio2 = new Audio('assets/sounds/SS_00001.wav');
var audio3 = new Audio('assets/sounds/mixkit-creature-cry-of-hurt-2208.wav');
var audio4 = new Audio('assets/sounds/mixkit-extra-bonus-in-a-video-game-2045.wav');

function plusHand(){
	hand++;
	document.getElementById("hand_count").innerHTML = hand;
}
function send2Hand(object){
	//alert(object.id);
	deck_stack.splice(deck,1);
	//deck = deck_stack.lenght;
	$('#inside').find("#"+object.id).css("display", "none");
	document.getElementById(object.id).style.display = 'none';
	hand_stack.push(object.id);
	plusHand();
	const myElement = document.getElementById("hand");
	let card = document.createElement("img");
	card.id = object.id;
	card.src = "assets/cards/" + object.id + ".webp";
	card.onclick= function() {handPlay(card.id)}
	myElement.append(card);
	audio1.play();
	$("#hand").children('img').hover(function(){
		$("#cadet").attr('src',$(this).attr('src')); 
		$(".previa").show();
	}, function(){
		$(".previa").hide();
	});
}
function showSec(){
	document.getElementById("showcase").style.display = 'initial';
	let fondya = document.getElementById("inside");
	var tam = security_stack.length;
	for (let i = 0; i < tam; i++) {
		var image = document.createElement("img");
		image.src = "assets/cards/" + security_stack[i] + ".webp";
		fondya.appendChild(image);
	}
	fondya.style.display = 'initial';
}
function showTrash(){
	document.getElementById("showcase").style.display = 'initial';
	let fondya = document.getElementById("inside");
	var tam = trash_stack.length;
	for (let i = 0; i < tam; i++) {
		var image = document.createElement("img");
		image.src = "assets/cards/" + trash_stack[i] + ".webp";
		fondya.appendChild(image);
	}
	fondya.style.display = 'initial';
}
function showDeck(){
	lucky++;
	deck--;
	document.getElementById("showcase").style.display = 'initial';
	document.getElementById("deck_count").innerHTML = deck;
	let fondya = document.getElementById("inside");
	var tam = deck_stack.length;
	var curcard = deck_stack[tam-lucky];
	var image = document.createElement("img");
	image.src = "assets/cards/" + curcard + ".webp";
	image.id = curcard;
	image.click(function(){ send2Hand(this); });
	fondya.appendChild(image);
	$("#inside").children('img').click(function(){ send2Hand(this); });
	//alert(curcard);
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
function nextPhase(){
	gameflow++;
	if (gameflow == 1){
		document.getElementById("phase3").style.display = 'none';
		document.getElementById("phase4").style.display = 'initial';
	}
	else{
		document.getElementById("phase4").style.display = 'none';
		document.getElementById("phase5").style.display = 'initial';
		gameflow = 0;
		document.querySelector('#saturn').disabled = false;
		document.querySelector('#next').disabled = true;
	}
}
function moveCounter(nemo){
	let x = nemo;
	let id = null;
  let elem = document.getElementById("marker");
  //let pos = getOffset(elem).left;
  //let target = pos + ( 56 * qt);
  audio2.play();
	switch(x) {
  case 1:
    elem.style.left = '525px';
    break;
  case -1:
    elem.style.left = '635px';
    break;
	case 2:
    elem.style.left = '475px';
    break;
  case -2:
    elem.style.left = '687px';
    break;
	case 3:
    elem.style.left = '422px';
    break;
  case -3:
    elem.style.left = '740px';
    break;
	case 4:
    elem.style.left = '370px';
    break;
  case -4:
    elem.style.left = '792px';
    break;
	case 5:
    elem.style.left = '320px';
    break;
  case -5:
    elem.style.left = '845px';
    break;
	case 6:
    elem.style.left = '265px';
    break;
  case -6:
    elem.style.left = '897px';
    break;
	case 7:
    elem.style.left = '215px';
    break;
  case -7:
    elem.style.left = '950px';
    break;
	case 8:
    elem.style.left = '160px';
    break;
  case -8:
    elem.style.left = '1005px';
    break;
	case 9:
    elem.style.left = '105px';
    break;
  case -9:
    elem.style.left = '1057px';
    break;
	case 10:
    elem.style.left = '50px';
    break;
  case -10:
    elem.style.left = '1111px';
    break;
  default:
    elem.style.left = '581px';
	} 
}
function getCookie(c_name){
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
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
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
function firstHand(){  
  var imageParent = document.getElementById("hand");
  for (let i = 0; i < 5; i++) {
    var image = document.createElement("img");
    let aux = deck_stack.pop();
    hand_stack.push(aux);
    image.id = aux;
    image.src = "assets/cards/" + aux + ".webp";
    image.onclick = function() {handPlay(aux)}
    imageParent.appendChild(image);
  } 
}
function startGame(mode){
	shuffle(egg_stack);
	shuffle(deck_stack);
	for (let i = 0; i < 5; i++) {
		security_stack.push(deck_stack.pop());
	}
	document.getElementById('redbutt').style.visibility='hidden';
	document.getElementById('redbutt2').style.visibility='hidden';	
	document.getElementById("comando").style.display = 'initial';
	deck = 40;
	document.getElementById("deck_count").innerHTML = deck;
	hand = 5;
	document.getElementById("hand_count").innerHTML = hand;
	document.getElementById("sec_count").innerHTML = security;
	document.getElementById("phase3").style.display = 'initial';
	document.querySelector('#saturn').disabled = true;
	if (mode == 2) {
		document.querySelector('#saturn').disabled = false;
		document.querySelector('#next').disabled = true;
		document.getElementById("phase3").style.display = 'none';
	}
	firstHand();
	$(".security").css("display", "initial");
	audio4.play();
}
function setCenter(){
  var layer = new Konva.Layer();
  var box = new Konva.Rect({
    x: rectX,
    y: rectY,
    width: 115,
    height: 165,
    fill: '#a83258',
    stroke: 'black',
    strokeWidth: 4,
  });
  layer.add(box);
  stage.add(layer);
}
function handPlay(el){
  if (hand > 0){
    hand = hand - 1;
    document.getElementById("hand_count").innerHTML = hand;
    var element = document.getElementById(el);
    element.remove();
    var layer = new Konva.Layer();
    stage.add(layer);
    var imageObj = new Image();
    imageObj.onload = function () {
      var yoda = new Konva.Image({
        x: rectX,
        y: rectY,
        image: imageObj,
        width: 115,
        height: 165,
        draggable: true,
      });
      yoda.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      yoda.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });
      layer.add(yoda);
    };
    imageObj.src = element.src; 
    audio1.play();
  }
  else 
    alert("Mão vazia!");
}
function breed() {
	if (digitama > 0){
    let egg = egg_stack.pop();
		digitama = digitama - 1;
		document.getElementById("egg_count").innerHTML = digitama;
    var layer = new Konva.Layer();
    stage.add(layer);
    var imageObj = new Image();
    imageObj.onload = function () {
      var yoda = new Konva.Image({
        x: 230,
        y: 490,
        image: imageObj,
        width: 115,
        height: 165,
        draggable: true,
      });
      yoda.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      yoda.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });
      layer.add(yoda);
    };
    imageObj.src = "assets/cards/" + egg  + ".webp";
		if (digitama == 0)
			document.getElementById("egg_cover").style.display = 'none';
    audio1.play();
	}
	else
		alert("Acabou o ovo!");
}
function secCheck(){
  let secard = security_stack.pop();
  document.getElementById("sec"+security).style.display = 'none';
  security--;
	document.getElementById("sec_count").innerHTML = security;
  audio1.play();
	var layer = new Konva.Layer();
  stage.add(layer);
  var imageObj = new Image();
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: rectX,
      y: rectY,
      image: imageObj,
      width: 115,
      height: 165,
      draggable: true,
    });
    layer.add(yoda);
		yoda.on('mouseover', function () {
    document.body.style.cursor = 'pointer';
		});
		yoda.on('mouseout', function () {
			document.body.style.cursor = 'default';
		});
  };
  imageObj.src = "assets/cards/" + secard + ".webp";
}
function draw() {
	if (deck > 0){
		let aux = deck_stack.pop();
		hand_stack.push(aux);
		deck = deck - 1;
		document.getElementById("deck_count").innerHTML = deck;
		plusHand();
		const myElement = document.getElementById("hand");
		let card = document.createElement("img");
		card.id = aux;
		card.src = "assets/cards/" + aux + ".webp";
		card.onclick= function() {handPlay(card.id)}
		myElement.append(card);
		audio1.play();
		$("#hand").children('img').hover(function(){
			$("#cadet").attr('src',$(this).attr('src')); 
			$(".previa").show();
		}, function(){
			$(".previa").hide();
		});
		if (deck == 0)
			document.getElementById("deck_cover").style.display = 'none';
	}
	else
		alert("Acabou o deck!");
}
function startTurn(){
	//remember tu unsuspend here
  if (memgauge < 1){
    let elem = document.getElementById("marker");
    elem.style.left = '423px';
    memgauge = 3;
    document.getElementById("memtxt").innerHTML = memgauge;
  }
  draw();
	document.getElementById("phase5").style.display = 'none';
	document.getElementById("phase3").style.display = 'initial';
	document.querySelector('#saturn').disabled = true;
	document.querySelector('#next').disabled = false;
}
function payCost() {
  let qt = document.getElementById("tnt").value;
	let aux = memgauge - Number(qt);
  if (aux >= (-10)){
		memgauge = aux;
		document.getElementById("memtxt").innerHTML = memgauge;
    moveCounter(memgauge);
  }
  else
    alert('Memory overflow!');
}
function gainMemo() {
  let qt = document.getElementById("tnt").value;
	let aux = memgauge + Number(qt);
  if (aux <= 10){
		memgauge = aux;
		document.getElementById("memtxt").innerHTML = memgauge;
    moveCounter(memgauge);
  }
  else
    alert('Memory overflow!');
	
}
