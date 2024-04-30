// HTML DOM Elements
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

var myPokemon;
// getting data from pokemon.txt file
fetch("pokemon.txt").then((res) => res.text()).then((data) => (myPokemon = data.split(/\r?\n/)))

// random pokemon button
button1.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random()* myPokemon.length)
    span1.innerHTML = capitalize(myPokemon[randomIndex])
})

// random team button 
button2.addEventListener("click", () => {
   // resetting array every time random team button clicked
    let toSearchThroughArray = myPokemon
    span2.innerHTML = ''
    for (let  i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random()* toSearchThroughArray.length)
        span2.innerHTML+=`${capitalize(toSearchThroughArray[randomIndex])}, `
        toSearchThroughArray.filter(item => item!=toSearchThroughArray[randomIndex])
    }
})

// filter pokemon that start with given letter
input1.addEventListener("change", () => {
    if (input1.value == "") {
        return;
    }
    var letter = input1.value.toLowerCase()
    var pokemonFiltered = myPokemon.filter(item => item.startsWith(letter))
    pokemonFiltered = pokemonFiltered.map(item => capitalize(item))
    div1.textContent = pokemonFiltered
})

// pokemon that have X amount of letters
input2.addEventListener("change", () => {
   if (input2.value == "") {
     return;
   }
   var letter = input2.value
   var pokemonFiltered = myPokemon.filter(item => item.length == letter)
   pokemonFiltered = pokemonFiltered.map(item => capitalize(item))
   div2.textContent = pokemonFiltered

})




function capitalize(word) {
   return word.charAt(0).toUpperCase() + (word.slice(1, word.length)).toLowerCase()
}
