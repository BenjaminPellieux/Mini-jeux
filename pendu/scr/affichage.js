

/*
function creat_button() {
	var alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	for (var lettre in alphabet){
		var bouton= document.createElement("input");
		bouton.type="button";
		bouton.id=String(lettre);
		bouton.class="cb  b-1" ;
		bouton.value=alphabet[lettre];
		bouton.onclick= partie.test_lettre
		bouton.textAlign="center";
		//bouton.addEventListener('click', partie.test_lettre);
		document.getElementById("div_button_letter").appendChild(bouton);
		};
}
*/
function pos_button(){
	var data = document.getElementById("div_button_letter").children;
	for (var d=0;d<data.length-1;d++){
		// data[d].style.borderRadius="30px";
		// data[d].style.width="3%";
		// data[d].style.height="17%";
		// data[d].style.position="absolute";
		// data[d].style.backgroundColor="withe";
		data[d].style.top=String(530+(Math.floor((d)/13)*60))+"px";
		data[d].style.left=String(18+((d)%13)*5)+"%";
	}
}

function can_word(){
	var canvas= document.getElementById('canvas_word');
	var x=300-((partie.word.length)/2)*40;
	canvas.getContext('2d').beginPath();
	canvas.getContext('2d').lineWidth=3; 
	canvas.getContext('2d').strokeStyle='black';
	for (var i=0;i<partie.word.length;i++){
	    canvas.getContext('2d').moveTo(x, 85);
	    canvas.getContext('2d').lineTo(x+30, 85);
	    x+=40
	};
	canvas.getContext('2d').stroke();    
	   
}

function select_game() {
	document.location.href="../index.html"
}

