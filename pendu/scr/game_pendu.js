
class Game{
	constructor(){
		this.word=this.select_word();
		this.in_game=true;
		this.error=0;
		this.lettre_teste=[];
		this.liste_pos=[];
		this.liste_lettre_find=Array(this.word.length);
		this.liste_img=["pendu_0.gif","pendu_1.gif","pendu_2.gif","pendu_3.gif","pendu_4.gif","pendu_5.gif","pendu_6.gif","pendu_7.gif"];
		this.liste_caractere=["-","'"]
		console.log(this.word,this.word.length);
	}

	select_word(){
		var nb= getRandom(3,13);
		return dico[String(nb)][getRandom(0,dico[String(nb)].length)].toUpperCase();
		//return dico["mot_plus_utiliser"][nb].toUpperCase();
	}
	test_lettre(element) {
		//console.log(element,"lettre",event.value)
		if (partie.in_game){			
			if (partie.lettre_teste.includes(element.value)){
				alert("Cette lettre à déja été testé");
			}
			else{
				partie.lettre_teste.push(element.value);
				if (partie.word.includes(element.value)){
					element.style.backgroundColor="green";
					partie.liste_pos=[];
					for (var k in partie.word){
						if (partie.word[k]==element.value){
							partie.liste_pos.push(k);
						}
					}
					partie.affichage_word();
					for (var l in partie.liste_pos){
						partie.liste_lettre_find[partie.liste_pos[l]]=element.value;
					}
					if (partie.word==partie.liste_lettre_find.join('')){
						partie.win();
						
					};
				}
				else{
					element.style.backgroundColor="red";
					partie.error++;
					partie.draw();

				}

			}
		}
	}

	win(){
		document.getElementById('canvas_word').getContext('2d').font='17pt Verdana';
		document.getElementById('canvas_word').getContext('2d').fillText("Felicitation vous avez trouver le mot mystère",50,30);
		this.in_game=false;
	}
	affichage_word(){
		for (var elem in this.liste_caractere){
			if (this.word.includes(this.liste_caractere[elem])){
				this.liste_pos.push(elem);

			}			
		}
		for (var l in this.word){
			if(this.liste_pos.includes(l)){
				document.getElementById('canvas_word').getContext('2d').font='30pt Verdana';
				document.getElementById('canvas_word').getContext('2d').fillText(this.word[l],300-40*((this.word.length)/2-l),75);
			}
		}

	}
	

	draw(){
		document.getElementById("div_image").children[0].src="./image/"+this.liste_img[this.error-1];
		if (this.error==8){
			document.location.href="./lose.html";
		}
	}

}


function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function print_word() {
	if (navigator.userAgent=="bob"){
		console.log(partie.word,partie.word.length);
	} 
}

var partie = new Game;
print_word();
//console.log(partie)