let frutas = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra'];

frutas.forEach(function (item, indice) {
  // Crie uma chave única para cada item
  let chave = 'Fruta ' + indice;
  // Salve o item no localStorage
  localStorage.setItem(chave, item);
});
