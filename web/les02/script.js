const koelkast = document.getElementById('koelkast');
const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

const zetInGroenteLa = function(groente){
    console.log('Ik zet de ' + groente + ' in de groente lade');

    const element = document.createElement('h2');
    element.className = 'groen';
    element.innerHTML = groente;

    groentevak.appendChild(element);

}

const zetInFruitLa = function(fruit){
    console.log('Ik zet de ' + fruit + ' in de fruit lade');

    const element = document.createElement('h2');
    element.className = 'rood';
    element.innerHTML = fruit;

    fruitvak.appendChild(element);

}