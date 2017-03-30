var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
var animalUpperCased = animal.toUpperCase();
	text = text.replace('Papugi', animalUpperCased);
var partOfText = text.slice(0,text.length/2);
console.log(partOfText);

