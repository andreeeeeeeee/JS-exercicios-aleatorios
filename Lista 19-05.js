/*
1.
Indique se um aluno passou ou rodou. Para isso leia suas notas e sua frequência.
*/

var bts=prompt("Em sua escola, a avaliação é feita em bimestres, trimestres ou semestres?");
var pf=prompt("Em sua escola, a frequência pode interferir no resultado final do ano?");
var pn=Number(prompt("De quanta nota você precisa para passar?"));
var pf2, pf, n3, n4;
if (pf == "sim") {
	pf2=Number(prompt("De quanta frequência você precisa para passar?"));
	f=Number(prompt("Digite sua frequência:"));
}
var n1=Number(prompt("Digite a sua primeira nota:"));
var n2=Number(prompt("Digite a sua segunda nota:"));
if (bts!="semestres") {
	n3=Number(prompt("Digite a sua terceira nota:"));
} else if (bts=="bimestres") {
	n4=Number(prompt("Digite a sua quarta nota:"));
}
if (bts=="bimestres" && pf=="sim") {
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
	var mf=(n1+n2+n3+n4)/4
	if (mf>=pn) {
		alert("Você passou!")
	} else {
		alert("Você rodou!")
	}
}
if (bts=="trimestres" && pf=="sim") {
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
	var mf=(n1+n2+n3)/3
	if (mf>=pn) {
		alert("Você passou!")
	} else {
		alert("Você rodou!")
	}
}
if (bts=="semestres" && pf=="sim") {
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
if (bts=="bimestres" && pf=="sim") {
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
	var mf=(n1+n2+n3+n4)/4
	if (mf>=pn) {
		alert("Você passou!")
	} else {
		alert("Você rodou!")
	}
}
if (bts=="trimestres" && pf=="sim") {
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
	var mf=(n1+n2+n3)/3
	if (mf>=pn) {
		alert("Você passou!")
	} else {
		alert("Você rodou!")
	}
}
if (bts=="semestres" && pf=="sim") {
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
	var mf=(n1+n2)/2
	if (mf>=pn) {
		alert("Você passou!")
	} else if (mf<pn) {
		alert("Você rodou!")
	}
}
