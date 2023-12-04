function momentum(ctext, maorin) {
  const regex = /\[(.*?)\]/;
	if (ctext == ""){
		document.getElementById(maorin).innerHTML = "";
		return "null";
	}
  const capture = ctext.match(regex);
	//console.log(capture ? capture[1] : null);
	document.getElementById(maorin).innerHTML = capture ? capture[0] : null;
	return ctext.replace(regex, '');
}
function analysis1(fulltxt){
	const xmom = momentum(fulltxt, "cardef");
	//console.log(xmom);
	document.getElementById("cardef").innerHTML += xmom;
	//if (xmom[0] != "done")		console.log('next step');
}
function analysis2(fulltxt){
	const xmom2 = momentum(fulltxt, "cardsour");
	//console.log(xmom);
	document.getElementById("cardsour").innerHTML += xmom2;
	//if (xmom[0] != "done")		console.log('next step');
}
function nextflow(kap){
	if (kap == "Your Turn" || kap == "Main")
		return ctext.replace(regex, '');
	if (kap == "When Attacking")
		return " Lose 2 memory.";
	if (kap == "When Digivolving")
		return " 1 of your Digimon gets +3000 DP for the turn.";
}