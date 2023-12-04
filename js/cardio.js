var loopmon = 1;                  //  set your counter to 1
var colsize = 115;        //  size of collection
var colcode = "";
function boosterFix(num){
	if (num < 10)
		return "00" + num;
	if (num < 100)
		return "0" + num;
	return num;	
}
function deckFix(num){
	if (num < 10)
		return "0" + num;
	return num;	
}
function getCard() {
  document.getElementById("botao").disabled = true;
  var codigo = document.getElementById("codigo").value;
  // Construir a URL da requisição GET
  var url = "https://digimoncard.io/api-public/search.php?card=" + encodeURIComponent(codigo);
  // Fazer a requisição GET usando XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
			var respostaJson = JSON.parse(xhr.responseText);
      // Atualizar a div de resultado com a resposta da requisição
      //document.getElementById("resultado").innerHTML = JSON.stringify(respostaJson, null, 2);
			document.getElementById("resultado").innerHTML = '<pre><code class="json">' + 
			JSON.stringify(respostaJson, null, 2) + '</code></pre>';
      hljs.highlightAll();  // Destacar a sintaxe usando highlight.js
      // Reabilitar o botão após 2 segundos
      setTimeout(function() {
        document.getElementById("botao").disabled = false;
      }, 1500);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
function getOne(who){
  var url = "https://digimoncard.io/api-public/search.php?card=" + encodeURIComponent(who);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
			var respostaJson = JSON.parse(xhr.responseText);
			var str = JSON.stringify(respostaJson, null, 2);
			var first = str.slice(1);
			var last = first.slice(0, -1);
      document.getElementById("resultado").innerHTML += last;
			document.getElementById("resultado").innerHTML += ",";
      setTimeout(function() {
        console.log("wait")
      }, 1500);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    var aux = colcode + "-" + boosterFix(loopmon);   //  your code here
		getOne(aux);	
		document.getElementById("prog").innerHTML = loopmon;
    loopmon++;                    //  increment the counter
    if (loopmon <= colsize) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 1500)
}
function getCollection() {
	colcode = document.getElementById("kolek").value;
	colsize = document.getElementById("quantity").value;
	document.getElementById("botao2").disabled = true;
	myLoop(); //start the loop
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}