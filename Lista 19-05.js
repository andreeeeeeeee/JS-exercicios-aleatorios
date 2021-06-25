/*
1.
Indique se um aluno passou ou rodou. Para isso leia suas notas e sua frequência.
*/

var bts=prompt("Em sua escola, a avaliação é feita em bimestres, trimestres ou semestres?");
var pf=prompt("Em sua escola, a frequência pode interferir no resultado final do ano?");
if (bts=="bimestres" && pf=="sim") {
	var pf2=Number(prompt("De quanta frequência você precisa para passar?"));
	var pn=Number(prompt("De quanta nota você precisa para passar?"));
	var n1=Number(prompt("Digite a sua primeira nota:"));
	var n2=Number(prompt("Digite a sua segunda nota:"));
	var n3=Number(prompt("Digite a sua terceira nota:"));
	var n4=Number(prompt("Digite a sua quarta nota:"));
	var f=Number(prompt("Digite sua frequência:"));
	var mf=(n1+n2+n3+n4)/4
	if (f>=pf2 && mf>=pn) {
		alert("Você passou!")
	} else if(f>=pf2 && mf<pn) {
		alert("Você rodou por causa da média!")
	} else if (f<pf2 && mf>=pn) {
		alert("Você rodou por causa da frequência!")
	} else if (f<pf2 && mf<pn) {
		alert("Você rodou!")
	}
}
if (bts=="bimestres" && pf=="não") {
	var pn=Number(prompt("De quanta nota você precisa para passar?"));
	var n1=Number(prompt("Digite a sua primeira nota:"));
	var n2=Number(prompt("Digite a sua segunda nota:"));
	var n3=Number(prompt("Digite a sua terceira nota:"));
	var n4=Number(prompt("Digite a sua quarta nota:"));
	var mf=(n1+n2+n3+n4)/4
	if (mf>=pn) {
		alert("Você passou!")
	} else {
		alert("Você rodou!")
	}
}
if (bts=="trimestres" && pf=="sim") {
	var pf2=Number(prompt("De quanta frequência você precisa para passar?"));
	var pn=Number(prompt("De quanta nota você precisa para passar?"));
	var n1=Number(prompt("Digite a sua primeira nota:"));
	var n2=Number(prompt("Digite a sua segunda nota:"));
	var n3=Number(prompt("Digite a sua terceira nota:"));
	var f=Number(prompt("Digite sua frequência:"));
	var mf=(n1+n2+n3)/3
	if (f>=pf2 && mf>=pn) {
		alert("Você passou!")
	} else if(f>=pf2 && mf<pn) {
		alert("Você rodou por causa da média!")
	} else if (f<pf2 && mf>=pn) {
		alert("Você rodou por causa da frequência!")
	} else if (f<pf2 && mf<pn) {
		alert("Você rodou!")
	}
}
if (bts=="trimestres" && pf=="não") {
	var pn=Number(prompt("De quanta nota você precisa para passar?"));
	var n1=Number(prompt("Digite a sua primeira nota:"));
	var n2=Number(prompt("Digite a sua segunda nota:"));
	var n3=Number(prompt("Digite a sua terceira nota:"));
	var mf=(n1+n2+n3)/3
	if (mf>=pn) {
		alert("Você passou!")
	} else {
		alert("Você rodou!")
	}
}
if (bts=="semestres" && pf=="sim") {
	var pf2=Number(prompt("De quanta frequência você precisa para passar?"));
	var pn=Number(prompt("De quanta nota você precisa para passar?"));
	var n1=Number(prompt("Digite a sua primeira nota:"));
	var n2=Number(prompt("Digite a sua segunda nota:"));
	var f=Number(prompt("Digite sua frequência:"));
	var mf=(n1+n2)/2
	if (f>=pf2 && mf>=pn) {
		alert("Você passou!")
	} else if(f>=pf2 && mf<pn) {
		alert("Você rodou por causa da média!")
	} else if (f<pf2 && mf>=pn) {
		alert("Você rodou por causa da frequência!")
	} else if (f<pf2 && mf<pn) {
		alert("Você rodou!")
	}
}
if (bts=="semestres" && pf=="não") {
	var pn=Number(prompt("De quanta nota você precisa para passar?"));
	var n1=Number(prompt("Digite a sua primeira nota:"));
	var n2=Number(prompt("Digite a sua segunda nota:"));
	var f=Number(prompt("Digite sua frequência:"));
	var mf=(n1+n2)/2
	if (f>=pf2 && mf>=pn) {
		alert("Você passou!")
	} else if(f>=pf2 && mf<pn) {
		alert("Você rodou por causa da média!")
	} else if (f<pf2 && mf>=pn) {
		alert("Você rodou por causa da frequência!")
	} else if (f<pf2 && mf<pn) {
		alert("Você rodou!")
	}
}
	var mf=(n1+n2+n3+n4)/4
	if (f>=pf2 && mf>=pn) {
		alert("Você passou!")
	} else if(f>=pf2 && mf<pn) {
		alert("Você rodou por causa da média!")
	} else if (f<pf2 && mf>=pn) {
		alert("Você rodou por causa da frequência!")
	} else if (f<pf2 && mf<pn) {
		alert("Você rodou!")
	}
}
if (bts=="bimestres" && pf=="não") {
	var pn=Number(prompt("De quanta nota você precisa para passar?"));
	var n1=Number(prompt("Digite a sua primeira nota:"));
	var n2=Number(prompt("Digite a sua segunda nota:"));
	var n3=Number(prompt("Digite a sua terceira nota:"));
	var n4=Number(prompt("Digite a sua quarta nota:"));
	var mf=(n1+n2+n3+n4)/4
	if (mf>=pn) {
		alert("Você passou!")
	} else {
		alert("Você rodou!")
	}
}
if (bts=="trimestres" && pf=="sim") {
	var pf2=Number(prompt("De quanta frequência você precisa para passar?"));
	var pn=Number(prompt("De quanta nota você precisa para passar?"));
	var n1=Number(prompt("Digite a sua primeira nota:"));
	var n2=Number(prompt("Digite a sua segunda nota:"));
	var n3=Number(prompt("Digite a sua terceira nota:"));
	var f=Number(prompt("Digite sua frequência:"));
	var mf=(n1+n2+n3)/3
	if (f>=pf2 && mf>=pn) {
		alert("Você passou!")
	} else if(f>=pf2 && mf<pn) {
		alert("Você rodou por causa da média!")
	} else if (f<pf2 && mf>=pn) {
		alert("Você rodou por causa da frequência!")
	} else if (f<pf2 && mf<pn) {
		alert("Você rodou!")
	}
}
if (bts=="trimestres" && pf=="não") {
	var pn=Number(prompt("De quanta nota você precisa para passar?"));
	var n1=Number(prompt("Digite a sua primeira nota:"));
	var n2=Number(prompt("Digite a sua segunda nota:"));
	var n3=Number(prompt("Digite a sua terceira nota:"));
	var mf=(n1+n2+n3)/3
	if (mf>=pn) {
		alert("Você passou!")
	} else {
		alert("Você rodou!")
	}
}
if (bts=="semestres" && pf=="sim") {
	var pf2=Number(prompt("De quanta frequência você precisa para passar?"));
	var pn=Number(prompt("De quanta nota você precisa para passar?"));
	var n1=Number(prompt("Digite a sua primeira nota:"));
	var n2=Number(prompt("Digite a sua segunda nota:"));
	var f=Number(prompt("Digite sua frequência:"));
	var mf=(n1+n2)/2
	if (f>=pf2 && mf>=pn) {
		alert("Você passou!")
	} else if(f>=pf2 && mf<pn) {
		alert("Você rodou por causa da média!")
	} else if (f<pf2 && mf>=pn) {
		alert("Você rodou por causa da frequência!")
	} else if (f<pf2 && mf<pn) {
		alert("Você rodou!")
	}
}
if (bts=="semestres" && pf=="não") {
	var pn=Number(prompt("De quanta nota você precisa para passar?"));
	var n1=Number(prompt("Digite a sua primeira nota:"));
	var n2=Number(prompt("Digite a sua segunda nota:"));
	var f=Number(prompt("Digite sua frequência:"));
	var mf=(n1+n2)/2
	if (f>=pf2 && mf>=pn) {
		alert("Você passou!")
	} else if(f>=pf2 && mf<pn) {
		alert("Você rodou por causa da média!")
	} else if (f<pf2 && mf>=pn) {
		alert("Você rodou por causa da frequência!")
	} else if (f<pf2 && mf<pn) {
		alert("Você rodou!")
	}
}
