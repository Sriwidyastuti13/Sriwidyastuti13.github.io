const textElement = ['AKUNTAN', 'dari', 'STMIK IKMI CIREBON'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words ='';

(function ngetik(){

	if(count == textElement.length){
		count = 0;
	}

	currentTxt = textElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	console.log(words);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 300);
})();