//Dodać w divie (wybacz, ale span mi tam bardziej pasował) licznik,
//który co 1 s będzie zliczał artykuły

// window.addEventListener( "load", function() {
//   setInterval(function () {
//     var request = new XMLHttpRequest();
//     request.open("GET", "http://localhost:3000/articles.json");
//     request.responseType = "json";
//     request.addEventListener( "load", function() {
//       document.getElementById("articles-summary").innerText = this.response.articles
//     })
//     request.send();
//   }, 1000)
// })





// Stwórz funkcję flattenUniq która przyjmuje tablicę tablic i zwraca spłaszczoną tablicę
// zawierającą wyłącznie unikalne elementy

function flatten(arrOfArrs) {
  var newArray = [];
  for ( var i = 0; i < arrOfArrs.length; i++) {
    newArray = newArray.concat(arrOfArrs[i]);
  }
  return newArray;
}

function flattenUniq(arrOfArrs) {
  var flatenedArray = flatten(arrOfArrs);
  var newArray = [];
  for ( var i = 0; i < flatenedArray.length; i++ ) {
    if (!newArray.includes(flatenedArray[i])) newArray.push(flatenedArray[i]);
  }
  return newArray;
}

flattenUniq([[1, 2, 2, 3], [2, 3, 4]])
flattenUniq([[1, 1, 1], [2, 2]])




// Stwórz funkcję whatDay , do której jako parametr przekazywana jest data w formie stringa
// (np. whatDay('2017-01-01') ) i która zwraca:

// to zadanie było dla mnie bez porównania cięższe - gdzie najlepiej szukać sensownej dokumentacji JS?
function whatDay(date) {
  var inputDate = new Date(date);
  var now = new Date()
  now.setHours(1,0,0,0)
  if (inputDate < now) {
    return "past";
  } else if (inputDate > now) {
    return "future";
  } else return "today";
}

whatDay('2017-01-01') //=> 'past'
whatDay('2028-01-01') //=> 'future'



// Stwórz funkcję repeat , która przyjmuje jako pierwszy parametr string, a jako drugi -
// liczbę powtórzeń, i zwraca string zawierający tyle powtórzeń pierwszego parametru.

function repeat(string, number) {
  var newString = "";
  for ( var i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeat('ha', 3) //=> 'hahaha'
repeat('brum ', 4) //=> 'brum brum brum brum '


// Stwórz funkcję capitalize , która przyjmuje ciąg znaków i zamienia pierwszą literę
// każdego słowa na wielką. Możesz przyjąć że słowa będą rozdzielone wyłącznie spacjami

function capitalize(string) {
  var array = string.split(' ')
  for ( var i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substr(1, array[i].length-1);
  }
  return array.join(' ')
}

capitalize('one two three') //=> 'One Two Three'
capitalize('ala, ma kota.') //=> 'Ala, Ma Kota.'





// Stwórz funkcję która przyjmie obiekt i zamieni go na tablicę:
// objectToArray({ a: 1, b: 2 }) //=> [['a', 1], ['b', 2]]
// objectToArray({ foo: 'bar' }) //=> [['foo', 'bar']]
// Przyda Ci się metoda Object.keys , która zwraca klucze danego obiektu jako tablicę, np.
// Object.keys({ foo: 'bar' }) //=> ['foo'] .
// Pamiętaj, że dostęp do elementów obiektu możesz uzyskiwać na dwa sposoby, tj.
// obj['foo'] === obj.foo .

function objectToArray (object) {
  var newArray = [];
  for ( var i = 0; i < Object.keys(object).length; i++) {
    var key = Object.keys(object)[i];
    newArray.push([key, object[key]]);
  };
  return newArray;
}
