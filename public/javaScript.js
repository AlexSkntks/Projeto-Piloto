function changeBG(op) {
	if(op === 1){
		document.getElementById('socio1').style.backgroundColor = "#9180c5";

	}else{
		document.getElementById('socio2').style.backgroundColor = "#9180c5";
	}

}	

function oldColor(op) {
	if(op === 1){
		document.getElementById('socio1').style.backgroundColor = "#9E8FCA";

	}else{
		document.getElementById('socio2').style.backgroundColor = "#9E8FCA";
	}
	
}

// Muda a cor do texto do botão de login
function changeTextColor(op){
	if(op === 1){
		document.getElementById('texto-login').style.color = "white";
	}else{
		document.getElementById('texto-login').style.color = "black";

	}
}

function cVal(op){
	if(op === true){
		val = true;
	}else{
		val = false;
	}
}
