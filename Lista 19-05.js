/*
1.
Indique se um aluno passou ou rodou. Para isso leia suas notas e sua frequência.
*/

let bts=prompt("Em sua escola, a avaliação é feita em bimestres, trimestres ou semestres?");
let pf=prompt("Em sua escola, a frequência pode interferir no resultado final do ano?");
let pf2 = 0, pf = 0, n3, n4, mf;
if (pf == "sim") {
	pf2=Number(prompt("Qual a frequência necessária para passar?"));
	f=Number(prompt("Digite sua frequência:"));
}
let pn=Number(prompt("Qual a média final necessária para passar?"));
let n1=Number(prompt("Digite a sua primeira nota:"));
let n2=Number(prompt("Digite a sua segunda nota:"));
if (bts!="semestres") {
	n3=Number(prompt("Digite a sua terceira nota:"));
} if (bts=="bimestres") {
	n4=Number(prompt("Digite a sua quarta nota:"));
}
if (bts=="bimestres") {
	mf=(n1+n2+n3+n4)/4
} else if (bts=="trimestres") {
	mf=(n1+n2+n3)/3
} else if (bts=="semestres") {
	mf=(n1+n2)/2
}
if (f>=pf2 && mf>=pn) {
	alert("Você passou!");
} else if(f>=pf2 && mf<pn) {
	alert("Você rodou por causa da média!");
} else if (f<pf2 && mf>=pn) {
	alert("Você rodou por causa da frequência!");
} else if (f<pf2 && mf<pn) {
	alert("Você rodou!");
}
