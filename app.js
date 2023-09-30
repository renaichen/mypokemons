// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png

const contain = document.querySelector('#container');
const pref = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i=1; i<2001; i++){
    const newImg = document.createElement('img');
    newImg.src = `${pref}${i}.png`;
    contain.appendChild(newImg);

}
