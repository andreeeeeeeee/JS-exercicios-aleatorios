/*

Website de referência: https://www.guj.com.br/t/exercicios-com-javascript/323892

*/

/*
1.
Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas.
Faça um programa que calcule e escreva:
-a maior e a menor altura do grupo;
-a média de altura das mulheres;
-o número de homens.
*/
var a, s, maa = 0, mea = 0, sam = 0, mm = 0, qm = 0, qh = 0;
for(var c=1; c<=15; c++) {		
	a = parseInt(prompt("Digite sua altura (em metros):"));
	s = prompt("Digite seu sexo (M ou F):");
	if (a > maa) { 
		maa = a;
	}
	if (a < mea) { 
		mea = a;
	}
	if (s == "F") {
		sam += a;
		qm++;
	} else if (s == "M") {
		qh++;
	}
}
mam = sam/qm;
alert("A maior altura é: "+maa); 
alert("A menor altura é: "+mea);
alert("A média de altura das mulheres é: "+mm);
alert("O número de homens é: "+qh);
